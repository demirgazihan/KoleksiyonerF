import axios from "axios";
import { type AxiosResponse } from "axios";
import { type FabricType } from "../../../Types/types";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDk2NDcxOTYsImV4cCI6MTc0OTY2NzE5Nn0.ucL2geTRR7Kp540APeAe3TZZ-BonxVWzDc7vp0dH6q0";

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
};
let params = {
    "pageNo": 0,
    "pageSize": 10
}

class FabricListService {


    BASE_URL = "http://localhost:9001";
    findFabricsGroupByName(): Promise<Array<FabricType>> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/api/material/fabric/findFabricsGroupByName`,
                { headers, params })
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => {
                    console.log("error")
                    console.log(error)
                    reject(error)
                });
        })
    }
}

export default new FabricListService();