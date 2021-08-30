import axios from "axios";

export default class AdvertService {

    baseUrl = "http://localhost:8080/api/adverts/"

    getall(pageNo, pageSize) {
        return axios.get(this.baseUrl + "getall?pageNo=" + pageNo + "&pageSize=" + pageSize)
    }

    getAdvertById(advertId) {
        return axios.get(this.baseUrl + "getAdvertById?advertId=" + advertId)
    }

    getAdvertByUserId(userId, pageNo, pageSize) {
        return axios.get(this.baseUrl + "getBySellerId?sellerId=" + userId + "&pageNo=" + pageNo + "&pageSize=" + pageSize )
    }
}