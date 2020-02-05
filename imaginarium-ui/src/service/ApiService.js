import axios from '../axios/axios';

class ApiService {

    getGameRating() {
        return axios.get('/rating');
    }

    deleteUser(id) {
        return axios.delete('/' + id);
    }

    addUser(user) {
        return axios.post('/addUserToGame', user);
    }


    deleteGame() {
        return axios.delete('/game/delete');
    }
}

export default new ApiService();