import axios from "axios";

export default class CityService {

    baseUrl = "http://localhost:8080/api/cities/"

    getAll() {
        return axios.get(this.baseUrl + "getall")
    }
}