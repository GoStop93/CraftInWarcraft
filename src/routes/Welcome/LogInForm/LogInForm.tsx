import { Formik, useField } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { StyledErrorMessage, StyledButton, StyledForm, StyledSubtitle } from './LogInForm.styles';
import { MyTextInputProps } from './type';
import { SignUpForm } from '../SignUpForm/SignUpForm';

export const LogInForm = () => {
  const [regForm, setRegForm] = useState(false);
  const [log, setLog] = useState(false);

  let navigate = useNavigate();

  const click = (event: any) => {
    event.preventDefault();
    setRegForm(true);
  };

  const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label htmlFor={props.name}>{label}</label>
        <input style={{ height: '17px' }} {...props} {...field} />
        {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
      </>
    );
  };

  const content = regForm ? (
    <SignUpForm />
  ) : (
    <Formik
      initialValues={{
        name: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, 'at least two characters').required('required field!'),
        password: Yup.string().required('required field!'),
      })}
      onSubmit={(values) => {
        let myName = localStorage.getItem('name');
        let myPass = localStorage.getItem('password');
        if (values.name === myName && values.password === myPass) {
          setLog(true);
          navigate('/main');
          window.scroll({
            top: 0,
          });
        } else {
          setRegForm(true);
        }
      }}
    >
      <StyledForm>
        <StyledSubtitle>Log In to your account</StyledSubtitle>
        <MyTextInput label="User name" id="name" name="name" type="text" />
        <MyTextInput label="Password" id="password" name="password" type="password" />
        <StyledButton type="submit" className="login1">
          Log in
        </StyledButton>
        <StyledButton className="reg" onClick={click}>
          Register
        </StyledButton>
      </StyledForm>
    </Formik>
  );

  return <>{content}</>;
};
