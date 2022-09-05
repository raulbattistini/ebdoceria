import * as yup from 'yup';

export const newsletterSchema = yup.object().shape({
    emailNotification: yup.string().email('Insira um email válido.').required('Para se inscrever, insira seu email.')
})
