import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import loginPageService from '../../../Services/LoginPageService';
import type { LoginResponse, CheckType } from '../../../Types/types'
import { setCurrentUser } from '../../../Redux/appSlice';
import { loginSchemas } from '../../../Schemas/LoginSchemas';
import { useFormik } from 'formik';


const SignInBgImage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkUser = (response: Array<LoginResponse>, email: string, password: string): CheckType => {
        const checkResponse: CheckType = {
            result: false,
            user: null
        }
        response.forEach((user: LoginResponse) => {
            if (user.email === email && user.password === password) {
                checkResponse.result = true;
                checkResponse.user = user;
            }
        })
        return checkResponse;
    }
    const login = async (email: string, password: string) => {
        if (!email || !password) {
            toast.warn("Bütün alanları doldurunuz");
            return;
        }
        try {
            const payload: LoginResponse = {
                email: values.email,
                password: values.password
            }
            const response = await loginPageService.login(payload);
            if (response) {
                const checkTypeResponse: CheckType = checkUser(response, email, password);
                dispatch(setCurrentUser(checkTypeResponse.user));
                navigate("/");
            } else {
                toast.warn("kullanıcı adı yada paralo yanlış");
            }
        } catch (error: any) {
            toast.error("Login servisi hatası", error);
        }
    }

    const submit = (values: any) => {
        login(values.email, values.password);
    }

    const { values, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: submit,
        validationSchema: loginSchemas,

    });

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} className="p-0">
                        <div className="login-form-container">

                            <div className="form_container">

                                <form className="app-form" onSubmit={handleSubmit}>
                                    <div className="mb-3 text-center">
                                        <h3>Hesabınıza Giriş Yapın</h3>
                                        <p className="f-s-12 text-secondary">Evini Seven Koleksiyoner'e Gelir.</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">E-Posta Adresi</label>
                                        <input type="email" className="form-control" id="email" value={values.email} onChange={handleChange} />
                                        <div className="form-text text">E-postanızı asla başkalarıyla paylaşmayacağız.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" >Şifre</label>
                                        <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="formCheck1" />
                                        <label className="form-check-label" htmlFor="formCheck1">Beni Hatırla</label>
                                    </div>
                                    <div>
                                        <button type='submit' className="btn btn-primary w-100">Giriş Yap</button>
                                    </div>
                                    <div className="app-divider-v justify-content-center">
                                        <p>OR</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="text-center">
                                            <button type="button" className="btn btn-dark icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-facebook text-white"></i></button>
                                            <button type="button" className="btn btn-primary icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-instagram text-white"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/other/terms-condition"
                                            className="text-secondary text-decoration-underline">Kullanım Şartları ve Koşullar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignInBgImage;
