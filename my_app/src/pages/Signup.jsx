import React from 'react'
import * as Yup from "yup"
import { useFormik} from "formik"
import Button from './Button'
import Input from './Input'
import Form from './Form'

export default function Signup() {
	const Formik = useFormik({
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
	  <Form onSubmit={Formik.handleSubmit}>
		<Input
		  id="firstName"
		  name="firstName"
		  placeholder="Enter your firstname"
		  type="text"
		  onChange={Formik.handleChange}
		  value={Formik.values.firstName}
		/>
		{Formik.errors.firstName ? <p>{Formik.errors.firstName}</p> : null}
		<Input
		  id="lastName"
		  name="lastName"
		  placeholder="Enter your lastname"
		  type="text"
		  onChange={Formik.handleChange}
		  value={Formik.values.lastName}
		/>
		{Formik.errors.lastName ? <p>{Formik.errors.lastName}</p> : null}
		<Input
		  id="email"
		  name="email"
		  type="email"
		  placeholder="Enter your email"
		  onChange={Formik.handleChange}
		  value={Formik.values.email}
		/>
		<Input
		  id="password-signup"
		  name="password"
		  type="password"
		  placeholder="Enter your password"
		  onChange={Formik.handleChange}
		  value={Formik.values.password}
		/>
		<Button type="submit">Sign Up </Button>
	  </Form>
	);
  };

