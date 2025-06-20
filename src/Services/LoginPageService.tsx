import { type AxiosResponse } from "axios";
import axios from "axios";
import { type LoginResponse } from "../Types/types";
import SwalMessage from "./swal";

class LoginPageService {

    BASE_URL = "http://localhost:9001";

    login(user: LoginResponse): Promise<LoginResponse[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.post(`${this.BASE_URL}/api/auth/signIn`, { ...user })
                .then((response: AxiosResponse<any, any>) => resolve(response.data.data))
                .catch((error) => {
                    SwalMessage.swalErrorMessage("Hatalı Giriş",
                        error.response.status != 403 ? error.response.data.exception.message : "");
                    reject(error);
                });

        })
    }
}


export default new LoginPageService();