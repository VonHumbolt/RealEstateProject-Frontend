import axios from "axios";

export default class EstateTypeService{
    
    baseUrl = "http://localhost:8080/api/estateTypes/"

    getall() {
        return axios.get(this.baseUrl + "getall")
    }
}