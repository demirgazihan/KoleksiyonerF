import React from 'react';
import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import loginPageService from '../../../Services/LoginPageService';
import type { LoginResponse, CheckType } from '../../../Types/types'
import { setCurrentUser } from '../../../Redux/appSlice';
import { loginSchemas } from '../../../Schemas/LoginSchemas';
import { useFormik } from 'formik';
import storageService from '../../../Services/StorageService'

const SignIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async () => {
        const payload: LoginResponse = {
            email: values.email,
            password: values.password
        }
        const response = await loginPageService.login(payload);
        storageService.write("currentUser", response);
        navigate("/");
    }

    const submit = () => {
        login();
    }

    const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: submit,
        validationSchema: loginSchemas,

    });


    return (
        <div className="sign-in-bg">
            <div className="app-wrapper d-block">
                <div className="main-container bg-primary">
                    <Container>
                        <Row className="sign-in-content-bg">
                            <Col lg={6} className="image-contentbox d-none d-lg-block bg-black">
                                <div className="form-container ">
                                    <div className="signup-bg-img">
                                        <img src="../assets/images/login/koleksiyoner.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} className="form-contentbox">
                                <div className="form-container">
                                    <form className="app-form" onSubmit={handleSubmit}>
                                        <Row>
                                            <Col xs={12}>
                                                <div className="mb-5 text-center text-lg-start">
                                                    <h2 className="text-primary f-w-600">Koleksiyonere Hoşgeldiniz.</h2>
                                                    <p>Kayıt sırasında girdiğiniz verilerinizle giriş yapınız.</p>
                                                </div>
                                            </Col>
                                            <Col xs={12}>

                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label" >E-Posta</label>
                                                    <input type="text" className="form-control" id="email" value={values.email} onChange={handleChange}
                                                        placeholder="E-postanızı giriniz" />
                                                    {errors.email &&
                                                        <span className='text-danger mx-2'>{errors.email}</span>
                                                    }
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Parola</label>
                                                    <Link to="/auth/password-reset" className="link-primary float-end">Parolanızı mı unuttunuz ?</Link>
                                                    <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange}
                                                        placeholder="Parolanızı Giriniz" />
                                                    {errors.password &&
                                                        <span className='text-danger mx-2'>
                                                            {errors.password}
                                                        </span>
                                                    }
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="checkDefault" />
                                                    <label className="form-check-label text-secondary"
                                                        htmlFor="checkDefault">
                                                        Beni Hatırla
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <button type='submit' className="btn btn-primary w-100">Giriş Yap</button>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="text-center text-lg-start text-dark">
                                                    Henuz Bir Hesabınız Yok mu ?<Link to="/auth/sign-up"
                                                        className="link-primary text-decoration-underlin"> Kayıt Ol</Link>
                                                </div>
                                            </Col>
                                            <div className="app-divider-v justify-content-center">
                                            </div>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default SignIn;