package org.abrzenk.imaginarium.service

import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {

    fun createUser(user: User) {
        userRepository.save(user)
    }

    fun deleteUser(user: User) {
        userRepository.delete(user)
    }
}