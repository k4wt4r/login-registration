import React from 'react'
import * as Yup from "yup"
import { useFormik} from "formik"
import styled  from "styled-components"

const ButtonSignup = styled.button`
	background: #7B68EE;
	border-radius: 5px;
	border: none;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	color: white;
	margin: 9px;
	padding: 0.25em 1em;
	width: 90px;
	height: 35px;
`
const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 70vh;
	width: 40vw;
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(8.5px);
	-webkit-backdrop-filter: blur(8.5px);
	border-radius: 10px;
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 0.4rem;
}
`;

const Input = styled.input`
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	border-radius: 20px;
	width: 70%;
	margin: 9px;
	height: ;
	padding: 1rem;
	border: none;
	outline: none;
	color: #3c354e;
	font-size: 1rem;
	font-weight: bold;
	&:focus {
		display: inline-block;
		box-shadow: 0 0 0 0.1rem #b9abe0;
		backdrop-filter: blur(12rem);
		border-radius: 1rem;
	}
	&::placeholder {
		color: #b9abe099;
		font-weight: 100;
		font-size: 1rem;
	}

`
export default function Signup() {
	const formik = useFormik({
	  initialValues: {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	  },
	  validationSchema: Yup.object({
		firstName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		lastName:  Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		email: Yup.string()
			.email('Invalid email')
			.required('Required'),
		password: Yup.string()
			.required("Please enter password")
	}),
	  onSubmit: values => {
		alert(JSON.stringify(values, null, 2));
	  },
	});
	return (
	  <Form onSubmit={formik.handleSubmit}>
		<Input
		  id="firstName"
		  name="firstName"
		  placeholder="Enter your firstName"
		  type="text"
		  onChange={formik.handleChange}
		  value={formik.values.firstName}
		/>
		{formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
		<Input
		  id="lastName"
		  name="lastName"
		  placeholder="Enter your lastName"
		  type="text"
		  onChange={formik.handleChange}
		  value={formik.values.lastName}
		/>
		{formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
		<Input
		  id="email"
		  name="email"
		  type="email"
		  placeholder="Enter your email"
		  onChange={formik.handleChange}
		  value={formik.values.email}
		/>
		<Input
		  id="password-signup"
		  name="password"
		  type="password"
		  placeholder="Enter your password"
		  onChange={formik.handleChange}
		  value={formik.values.password}
		/>
		<ButtonSignup type="submit">Sign Up </ButtonSignup>
	  </Form>
	);
  };

