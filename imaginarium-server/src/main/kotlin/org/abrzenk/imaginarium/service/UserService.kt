package org.abrzenk.imaginarium.service

import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {

    fun createUser(login: String) {
        userRepository.save(User(login = login))
    }

    fun deleteUser(user: User) {
        userRepository.delete(user)
    }
}