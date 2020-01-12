package org.abrzenk.imaginarium.repository

import org.abrzenk.imaginarium.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Int>
