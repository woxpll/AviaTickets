import axios from "axios";
import config from "../config/apiConfig";

/**
    /countries
    /cities
    /price/cheap
 */
export class Api{
    constructor(config) {
        this.url = config.url
    }
    async countries() {
        try {
            const responce = await axios.get(`${this.url}/countries`)
            return responce.data
        } catch (err){
            console.log(err)
            return Promise.reject(err)
        }
    }
    async cities() {
        try {
            const responce = await axios.get(`${this.url}/cities`)
            return responce.data
        } catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }
    async price(params){
        try {
            const responce = await axios.get(`${this.url}/prices/cheap`, {
                params
            })
            return responce.data
        } catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }

    async airlines(params){
        try {
            const responce = await axios.get(`${this.url}/airlines`, {
                params
            })
            return responce.data
        } catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }

}

const api = new Api(config)

export default api