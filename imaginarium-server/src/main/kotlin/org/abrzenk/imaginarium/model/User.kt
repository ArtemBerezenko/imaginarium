package org.abrzenk.imaginarium.model

import javax.persistence.*

@Entity
data class User (
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    val id: Int = 0,
    val login: String,
    val vote: Int = 0,
    val rating: Int = 0
) {
    @ManyToOne(fetch = FetchType.LAZY)
    lateinit var game: Game
}