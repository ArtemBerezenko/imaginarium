import axios from '../axios/axios';

class ApiService {

    getGameRating() {
        return axios.get('/rating');
    }

    getAllUsers() {
        return axios.get('/allUsers')
    }

    collectAllVotes() {
        return axios.get('/collectAllVotes')
    }

    createGame(game) {
        return axios.post('/createGame', game);
    }

    startVoting(login, vote) {
        return axios.put('/voting?login=' + login + '&vote=' + vote);
    }

    getLeader() {
        return axios.get('/getLeader')
    }

    addUser(user) {
        return axios.post('/addUserToGame', user);
    }
}

export default new ApiService();