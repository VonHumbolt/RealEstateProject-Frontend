import axios from "axios"

export default class AuthService {
    
    baseUrl = "http://localhost:8080/api/auth/"

    login(user) {
        return axios.post(this.baseUrl + "login", user)
    }

    register(user) {
        return axios.post(this.baseUrl+ "register" , user)
    }
    
}