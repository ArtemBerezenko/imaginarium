package org.abrzenk.imaginarium.service

import org.abrzenk.imaginarium.model.Game
import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.GameRepository
import org.springframework.stereotype.Service

@Service
class GameService(private val gameRepository: GameRepository) {
    lateinit var game: Game
    var leaderOrder: Int = 1
    val votedUsers = mutableListOf<User>()

    fun createGame(game: Game) {
        gameRepository.save(game)
    }

    fun getGame(id: Int) = gameRepository.findById(id)

    fun getLeader(): String = getLeaderFromDB().login

    fun collectAllVotes(): List<User> {
        while (true) {
            if (votedUsers.size == numberActiveParticipants())
                break
        }
        return votedUsers
    }

    fun scoring(): List<User> {
        val leader = getLeaderFromDB()
        val whoGuessedList = votedUsers.filter { user -> user.vote == leaderOrder }
        if (whoGuessedList.size == numberActiveParticipants()) {
            leader.rating -= 3
        } else if (whoGuessedList.isEmpty()) {
            leader.rating -= 2
        }
        votedUsers.asSequence().forEach { user ->
            if (user.vote == leaderOrder) {
                leader.rating++
                user.rating += 3
            } else {
                votedUsers.first { it.gameOrder == user.vote }.rating++
            }
        }
        if (leaderOrder == game.numberOfParticipants) leaderOrder == 0 else leaderOrder++
        return mutableListOf<User>().apply {
            addAll(votedUsers)
            add(leader)
        }
    }

    fun getLeaderFromDB(): User = gameRepository.findById(game.id).get().users
        .first { it.gameOrder == leaderOrder }

    private fun numberActiveParticipants() = game.numberOfParticipants - 1

}
