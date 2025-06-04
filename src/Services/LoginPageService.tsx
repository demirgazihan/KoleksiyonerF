import { type AxiosResponse } from "axios";
import axios from "axios";
import { type LoginResponse } from "../Types/types";

class LoginPageService {

    BASE_URL = "http://localhost:9001";

    login(user: LoginResponse): Promise<LoginResponse[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.post(`${this.BASE_URL}/api/auth/signIn`, { ...user })
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error) => reject(error));

        })
    }
}


export default new LoginPageService();