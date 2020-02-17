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
    private val userService: UserService) {

    @PostMapping("/createGame")
    fun createGame(@RequestBody gameDTO: GameDTO): ResponseEntity<Unit> {
        gameService.game = Game(numberOfParticipants = gameDTO.participantsNumber)
        return ResponseEntity.ok(gameService.createGame(gameService.game))
    }

    @PostMapping("/addUserToGame")
    fun addUser(@RequestBody userDTO: UserDTO): ResponseEntity<Unit> {
        val user = User(
            login = userDTO.login,
            gameOrder = userDTO.order,
            game = gameService.game
        )
        return ResponseEntity.ok(userService.createUser(user))
    }

    @GetMapping("/rating")
    fun getRating(): ResponseEntity<List<UserDTO>> {
        val userList = gameService.scoring()
        userService.saveAll(userList)
        return ResponseEntity.ok(userList.map { user ->
            UserDTO(user.login, user.rating)
        })
    }

    @GetMapping("/allUsers")
    fun getAllUsers(): ResponseEntity<List<UserDTO>> = ResponseEntity.ok(
        userService.getAllUser().map { user ->
            UserDTO(
                login = user.login,
                rating = user.rating,
                order = user.gameOrder
            )
        })

    @GetMapping("/collectAllVotes")
    fun collectAllVotes(): ResponseEntity<List<UserDTO>> = ResponseEntity.ok(
        gameService.collectAllVotes().map { user ->
            UserDTO(login = user.login, vote = user.vote)
        }
    )

    @GetMapping("/getLeader")
    fun takeUserByOrder(): ResponseEntity<String> = ResponseEntity.ok(gameService.getLeader())

    @PutMapping("/voting")
    fun voting(@RequestParam login: String, @RequestParam vote: Int): ResponseEntity<User> {
        val user = userService.getUserByLogin(login)?.apply { this.vote = vote }
        user?.let {
            gameService.votedUsers.add(user)
            userService.updateUser(it)
        }
        return if (user != null) ResponseEntity.ok(user) else ResponseEntity.badRequest().body(user)
    }

}

