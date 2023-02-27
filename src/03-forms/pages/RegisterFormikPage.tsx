import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';

import * as Yup from 'yup'

import '../styles/styles.css'

export const RegisterFormikPage = () => {



  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues={{
                name     : '',
                email    : '',
                password1: '',
                password2: '',
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema= {Yup.object({
                name: Yup.string()
                                .min(2, 'Debe de tener mas de 2 caracteres')
                                .max(15, 'Debe de tener menos de 15 caracteres')
                                .required('Requerido'),
                email    : Yup.string()
                                .email('Revise el formato del correo')
                                .required('Requerido'),
                password1 : Yup.string()
                                .min(6, 'Debe de tener mas de 6 caracteres')
                                .required('Requerido'),
                password2 : Yup.string()
                                .oneOf([ Yup.ref('password1') ], 'Las constraseñas no son iguales')
                                .required('Requerido')
            })}
        >
            {
                ({resetForm}) => (
                    <Form>
                        <MyTextInput 
                        label="Nombre" 
                        name="name" 
                        placeholder="victorio"    
                    />
                    <MyTextInput 
                        label="Email" 
                        name="email" 
                        type="email"
                        placeholder="chipito@gmail.com"    
                    />
                    
                    <MyTextInput 
                        label="Password" 
                        name="password1" 
                        type="password"
                        placeholder="******"    
                    />
                    <MyTextInput 
                        label="Password" 
                        name="password2" 
                        type="password"
                        placeholder="******"    
                    />

                    <button type="submit">Create</button>
                    <button type="button" onClick={ () => resetForm() }>Reset</button>

                    </Form>
                )
            }
        </Formik>


    

    </div>
  )
}
    