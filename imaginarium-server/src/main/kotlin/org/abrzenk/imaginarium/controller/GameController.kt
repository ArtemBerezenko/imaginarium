package org.abrzenk.imaginarium.controller

import org.abrzenk.imaginarium.dto.GameDTO
import org.abrzenk.imaginarium.dto.UserDTO
import org.abrzenk.imaginarium.model.Game
import org.abrzenk.imaginarium.model.User
import org.abrzenk.imaginarium.service.GameService
import org.abrzenk.imaginarium.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
@RequestMapping("api/v1/imaginarium")
class GameController(
    private val gameService: GameService,
    private val userService: UserService
) {

    private lateinit var game: Game

    @PostMapping("/createGame")
    fun createGame(@RequestBody gameDTO: GameDTO): ResponseEntity<Unit> {
        game = Game(numberOfParticipants = gameDTO.participantsNumber)
        return ResponseEntity.ok(gameService.createGame(game))
    }

    @PostMapping("/addUserToGame")
    fun addUser(@RequestBody user: UserDTO) = ResponseEntity.ok(userService.createUser(user, game))

    @GetMapping("/rating")
    fun getRating(): ResponseEntity<List<UserDTO>> = ResponseEntity.ok(
        userService.getAllUser()
            .asSequence()
            .map { user -> UserDTO(user.login, user.rating) }
            .toList())

    @GetMapping("/users")
    fun getAllUsers(): ResponseEntity<List<UserDTO>> =
        ResponseEntity.ok(
            userService.getAllUser()
                .asSequence()
                .map { user ->
                    UserDTO(login = user.login, vote = user.vote)
                }.toList()
        )

    @PutMapping("/voting")
    fun voting(
        @RequestParam login: String,
        @RequestParam vote: Int
    ): ResponseEntity<User> {
        val user = userService.getUserByLogin(login)?.apply { this.vote = vote }
        user?.let { userService.updateUser(it) }
        return if (user != null) ResponseEntity.ok(user) else ResponseEntity.badRequest().body(user)
    }

}

