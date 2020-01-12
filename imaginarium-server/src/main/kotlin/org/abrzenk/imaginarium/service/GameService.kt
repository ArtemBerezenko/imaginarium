package org.abrzenk.imaginarium.service

import org.abrzenk.imaginarium.model.Game
import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.GameRepository
import org.springframework.stereotype.Service

@Service
class GameService(private val gameRepository: GameRepository) {

    fun createGame(game: Game, users: List<User>) {
        gameRepository.save(game)
    }
}