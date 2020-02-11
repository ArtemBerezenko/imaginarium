import axios from '../axios/axios';

class ApiService {

    getGameRating() {
        return axios.get('/rating');
    }

    getAllUsers() {
        return axios.get('/users')
    }

    createGame(game) {
        return axios.post('/createGame', game);
    }

    startVoting(login, vote) {
        return axios.put('/voting?login=' + login + '&vote=' + vote);
    }

    game() {
        return axios.get('/game')
    }

    addUser(user) {
        return axios.post('/addUserToGame', user);
    }
}

export default new ApiService();