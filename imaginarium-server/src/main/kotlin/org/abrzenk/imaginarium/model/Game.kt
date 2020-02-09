package org.abrzenk.imaginarium.model

import javax.persistence.*

@Entity
data class Game (
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    val id: Int = 0,
    val numberOfParticipants: Int = 0
) {
    @OneToMany(
        mappedBy = "game",
        cascade = [CascadeType.ALL],
        orphanRemoval = true
    )
    lateinit var users: List<User>
    @Transient
    lateinit var votingResult: Map<Int, Int>
}