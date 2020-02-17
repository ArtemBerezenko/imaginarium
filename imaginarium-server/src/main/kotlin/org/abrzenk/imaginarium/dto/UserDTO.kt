package org.abrzenk.imaginarium.dto

data class UserDTO (
    val login: String,
    val rating: Int = 0,
    val order: Int = 0,
    val vote: Int = 0
)