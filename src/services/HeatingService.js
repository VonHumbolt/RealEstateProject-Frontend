import axios from "axios";

export default class HeatingService{

    baseUrl = "http://localhost:8080/api/heating/"

    getall() {
        return axios.get(this.baseUrl + "getall")
    }
}