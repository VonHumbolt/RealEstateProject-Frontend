import axios from "axios";

export default class LocationService{
    
    baseUrl = "http://localhost:8080/api/location/"

    getAll() {
        return axios.get(this.baseUrl + "getall")
    }

}