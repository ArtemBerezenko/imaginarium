package org.abrzenk.imaginarium.controller

import org.abrzenk.imaginarium.service.GameService
import org.abrzenk.imaginarium.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
@RequestMapping("api/v1/imaginarium")
class GameController(private val gameService: GameService,
                     private val userService: UserService) {

    @PostMapping("/addUserToGame")
    fun addUser(@RequestBody login: String)
            = ResponseEntity.ok(userService.createUser(login))

}