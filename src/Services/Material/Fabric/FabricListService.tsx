import axios from "axios";
import { type AxiosResponse } from "axios";
import { type FabricType } from "../../../Types/types";
import storageService from '../../StorageService'

const currentUser: any = storageService.read("currentUser");

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${currentUser.token}`,
};
let params = {
    "pageNo": 0,
    "pageSize": 1000
}

class FabricListService {

    BASE_URL = "http://localhost:9001";
    findFabricsGroupByName(): Promise<Array<FabricType>> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/api/material/fabric/findFabricsGroupByName`,
                { headers, params })
                .then((response: AxiosResponse<any, any>) => resolve(response.data.data))
                .catch((error: any) => {
                    console.log(error.response.status != 403)
                    Swal.fire({
                        icon: 'error',
                        title: 'Kumaşlar Listelenemedi',
                        text: error.response.status != 403 ? error.response.data.exception.message : "",
                        confirmButtonText: 'Tamam'
                    })
                    reject(error)
                });
        })
    }
}

export default new FabricListService();