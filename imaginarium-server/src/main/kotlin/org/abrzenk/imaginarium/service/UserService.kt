package org.abrzenk.imaginarium.service

import org.abrzenk.imaginarium.dto.UserDTO
import org.abrzenk.imaginarium.model.Game
import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {

    fun createUser(user: UserDTO, game: Game) {
        userRepository.save(User(login = user.login, game = game))
    }

    fun getAllUser(): List<User> = userRepository.findAll()

    fun getUserByLogin(login: String): User? = userRepository.findUserByLogin(login)
}