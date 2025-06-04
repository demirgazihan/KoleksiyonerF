import * as yup from 'yup';

export const loginSchemas = yup.object().shape({
    email: yup.string().required('E-posta adresi zorunludur.').email("Geçerli bir e-posta giriniz."),
    password: yup.string().required('Şifre alanı zorunludur.')
})