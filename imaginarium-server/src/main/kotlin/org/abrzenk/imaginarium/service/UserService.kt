package org.abrzenk.imaginarium.service

import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {

    fun createUser(user: User) {
        userRepository.save(user)
    }

    fun updateUser(user: User) {
        userRepository.save(user)
    }

    fun getAllUser(): List<User> = userRepository.findAll()

    fun getUserByLogin(login: String): User? = userRepository.findUserByLogin(login)

    fun saveAll(userList: List<User>) {
        userRepository.saveAll(userList)
    }
}