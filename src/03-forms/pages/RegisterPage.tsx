
import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {


    const { email, name, password1, password2, formData, onChange, resetForm, isValidEmail } = useForm({
        name      : '',
        email     : '',
        password1 : '',
        password2 : '',
    })

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log( formData );
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form 
            noValidate 
            onSubmit={ (e) => onSubmit(e) }     
        >
            <input 
                type="text" 
                placeholder="Name"
                name='name'
                value={ name }
                onChange={ (e) => onChange(e) }
                className={`${ name.length <= 0 && 'has-error' }`}
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span> }
            <input 
                name='email'
                type="email" 
                placeholder="Email"
                value={ email }
                onChange={ onChange }
                className={`${ !isValidEmail( email ) && 'has-error'} `}
            />
            { !isValidEmail(email) && <span>Este campo es necesario</span> }
            <input 
                name='password1'
                type="password" 
                placeholder="Password"
                value={ password1 }
                onChange={ onChange }
                />
                { password1.trim().length <= 0  && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 &&  password1.trim().length > 0  && <span>La contraseña tiene que tener 6 caracteres</span> }
            <input 
                name='password2'
                type="password" 
                placeholder="Repeat Password"
                value={ password2 }
                onChange={ onChange }
            />
                { password1.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

            <button type="submit">Create</button>
            <button type="button" onClick={ resetForm }>Reset</button>

        </form>
    </div>
  )
}
    