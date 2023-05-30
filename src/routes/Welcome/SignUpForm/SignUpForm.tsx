import { Formik, useField} from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { LogInForm } from '../LogInForm/LogInForm';
import { MyTextInputProps } from '../LogInForm/type';
import { FormValues } from './type';
import { StyledForm, StyledButton, StyledSubtitle, StyledErrorMessage } from './SignUpForm.styles';

export const SignUpForm = () => {
    const [logForm, setLogForm] = useState(false);

    const click = (event: any) => {
        event.preventDefault();
        setLogForm(true);
    };

    const initialValues: FormValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const MyTextInput = ({ label,  ...props }: MyTextInputProps) => {
        const [field, meta] = useField(props);
    
        return (
            <>
               <label htmlFor={props.name}>{label}</label>
               <input {...props} {...field} style={{height: '17px'}} /> 
               {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
               ) : null}
            </>
        );
    };

    const content = logForm ? <LogInForm/> :
    <Formik
        initialValues = {initialValues}
        validationSchema = {Yup.object({
            name: Yup.string()
                    .min(2, 'at least two characters')
                    .required('required field!'),
            email: Yup.string()
                    .email('wrong email address')
                    .required('required field!'),
            password: Yup.string()
                    .required('required field!')
                    .min(6, 'at least six characters'),
            confirm_password: Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match')
                    .required('required field!')
        })}
        onSubmit = {values => 
            {
                for (let key in values) {
            localStorage.setItem(key, values[key])
                };
                setLogForm(true);
            }}
        >
        <StyledForm>
        <StyledSubtitle>Registration Form</StyledSubtitle>
            <MyTextInput
                label='User name'
                id='name'
                name='name'
                type='text'
            />
            <MyTextInput
                label='Email'
                id='email'
                name='email'
                type='email'
            />
            <MyTextInput
                label='Password'
                id='password'
                name='password'
                type='password'
            />
            <MyTextInput
                label='Confirm Password'
                id='confirm_password'
                name='confirm_password'
                type='password'
            />
            <StyledButton type="submit" className='reg1'>Register</StyledButton>
            <StyledButton className='login' onClick={click}>Log in</StyledButton>
        </StyledForm>
    </Formik>

    return (
        <>
            {content}
        </>
    );
};
