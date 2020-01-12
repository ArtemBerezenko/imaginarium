plugins {
    base
    kotlin("jvm") version "1.3.61" apply false
    id("io.spring.dependency-management") version "1.0.7.RELEASE" apply false
}

allprojects {
    group = "com.abrzenk"
    version = "0.0.1-SNAPSHOT"

    repositories {
        mavenLocal()
        mavenCentral()
        jcenter()
    }
}
