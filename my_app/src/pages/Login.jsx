import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

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
	console.log(formik.values);
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="input-div">
				<input
				id="email"
				type="email"
				placeholder="Enter your email address"
				onChange={formik.handleChange}
				value={formik.values.email}
				/>
				<input
				id="password"
				placeholder="Enter your password"
				onChange={formik.handleChange}
				value={formik.values.password}
				type="password"
				/>
			</div>
			<button type="submit" className="btn-login">
				Log in
			</button>
		</form>
	)
}
