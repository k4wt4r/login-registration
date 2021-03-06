import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import Input from '../styles/Input';
import Button from '../styles/Button';
import Form from '../styles/Form';
import { Link } from 'react-router-dom';
import LinkRegister from '../styles/LinkRegister';
import Title from '../styles/Title';

export default function Login() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
			.email('Invalid email')
			.required('Required'),
		password: Yup.string()
			.required("Please enter password")
		}),
		onSubmit: (values) =>{
			console.log(values)
		}
	});
	return (
		<div>
	
			
		<Form onSubmit={formik.handleSubmit}>
	
			<Title> Login to Your Account </Title>
				<Input
				id="email"
				type="email"
				placeholder="Enter your email address"
				onChange={formik.handleChange}
				value={formik.values.email}
				/>
				<Input
				id="password"
				placeholder="Enter your password"
				onChange={formik.handleChange}
				value={formik.values.password}
				type="password"
				/>
			<Button type="submit">
				Log in
			</Button>
			<LinkRegister>
			<p>Don't have an account? <Link to="/register">Register </Link> </p> 	
			</LinkRegister>
		</Form>
		</div>
	)
}
