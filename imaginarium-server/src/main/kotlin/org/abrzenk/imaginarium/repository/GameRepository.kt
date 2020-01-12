package org.abrzenk.imaginarium.repository

import org.abrzenk.imaginarium.model.Game
import org.springframework.data.jpa.repository.JpaRepository

interface GameRepository : JpaRepository<Game, Int>
