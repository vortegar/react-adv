import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css'

export const FormikAbstract = () => {

    


  return (
    <div>
        <h1>Formik Abstract</h1>
        <Formik 
            initialValues={{
                firstName : '',
                lastName  : '',
                email     : '',
                terms     : false,
                jobType   : '',
            }}
            onSubmit={( values ) => {
                console.log( values )
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe de tener menos de 15 caracteres')
                                .required(),
                lastName: Yup.string()
                                .max(15, 'Debe de tener menos de 15 caracteres')
                                .required(),
                email: Yup.string()
                                .email('must be a valid email')
                                .required(),
                terms : Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opción no es permitida')
                                .required('Requerido')
            })
            }>

                { (formik) => (
                        <Form>                 
                        <MyTextInput 
                            label="firstName"
                            name="firstName" 
                            placeholder="Victorio"
                        />
                        <MyTextInput 
                            label="last name"
                            name="lastName" 
                            placeholder="Ortega"
                        />

                        <MyTextInput 
                            label="Email Addres"
                            name="email" 
                            placeholder="email@gmail.com"
                        />

                        <MySelect label="jobType" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckBox label="Terms & Conditions" name="terms"/>
                        
                        <button type='submit'>Submit</button>
                    </Form>
                    )
                }
        </Formik>

    </div>
  )
}
