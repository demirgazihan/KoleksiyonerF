import axios from "axios";
import { type AxiosResponse } from "axios";
import { type FabricType } from "../../../Types/types";
import storageService from '../../StorageService'
import SwalMessage from "../../swal";

const currentUser: any = storageService.read("currentUser");

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${currentUser.token}`,
};


class FabricService {

    BASE_URL = "http://localhost:9001";

    findFabricsGroupByName(params: Object): Promise<Array<FabricType>> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/api/material/fabric/findFabricsGroupByName`,
                { headers, params })
                .then((response: AxiosResponse<any, any>) => resolve(response.data.data))
                .catch((error: any) => {
                    SwalMessage.swalErrorMessage("Kumaşlar Listelenemedi",
                        error.response.status != 403 ? error.response.data.exception.message : "");
                    reject(error)
                });
        })
    }
    findAllByName(params: Object): Promise<Array<FabricType>> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/api/material/fabric/findAllByName`,
                { headers, params })
                .then((response: AxiosResponse<any, any>) => resolve(response.data.data))
                .catch((error: any) => {
                    SwalMessage.swalErrorMessage("Kumaşlar Listelenemedi",
                        error.response.status != 403 ? error.response.data.exception.message : "");
                    reject(error)
                });
        })
    }

    createFabrics(fabrics: Array<FabricType>): Promise<Array<FabricType>> {
        return new Promise((resolve: any, reject: any) => {
            axios.post(`${this.BASE_URL}/api/material/fabric/create`,
                [...fabrics], { headers })
                .then((response: AxiosResponse<any, any>) => {
                    SwalMessage.swalSuccess("Kumaşlar Başarı İle Eklendi.", 2500);
                    return resolve(response.data)
                })
                .catch((error: any) => {
                    SwalMessage.swalErrorMessage("Kumaşlar Eklenemedi",
                        error.response.status != 403 ? error.response.data.exception.message : "");
                    reject(error)
                });
        })
    }

}

export default new FabricService();