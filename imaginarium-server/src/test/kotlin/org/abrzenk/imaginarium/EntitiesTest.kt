package org.abrzenk.imaginarium

import org.abrzenk.imaginarium.model.Game
import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.repository.GameRepository
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import org.springframework.test.context.junit.jupiter.SpringExtension

@DataJpaTest
@ExtendWith(SpringExtension::class)
class EntitiesTest {

    @Autowired
    lateinit var entityManager: TestEntityManager

    @Autowired
    lateinit var gameRepository: GameRepository

    @Test
    fun addUsersToGame() {
        val first = User(login = "Alina", vote = 1)
        val second = User(login = "Danichka", vote =  3)
        val third = User(login = "Leva", vote =  1)

        val users = listOf(first, second, third)

        users.forEach {
            entityManager.persist(it)
            entityManager.flush()
        }
        val game = Game(users = users)
        entityManager.persist(game)
        entityManager.flush()

        val persistedGame = gameRepository.findById(game.id).get()
        assertNotNull(persistedGame)
        assertTrue(persistedGame == game)
    }
}