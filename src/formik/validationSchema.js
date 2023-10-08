import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
    name: Yup.string()
        .min(4, 'Como minimo se requieren 4 caracteres')
        .max(25, 'Como maximo se permiten 25 caracteres')
        .required('Campo requerido'),
    email: Yup.string()
        .email('Debe ser un email valido')
        .required('Campo requerido'),
    subject: Yup.string()
        .min(4, 'Como minimo se requieren 4 caracteres')
        .max(25, 'Como maximo se permiten 25 caracteres')
        .required('Campo requerido'),
    message: Yup.string()
        .min(10, 'Como minimo se requieren 10 caracteres')
        .max(144, 'Como maximo se permiten 144 caracteres')
        .required('Campo requerido'),
});