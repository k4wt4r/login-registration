import React from 'react'
import * as Yup from "yup"
import { useFormik} from "formik"

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
	  <form onSubmit={formik.handleSubmit}>
		<label htmlFor="firstName">First Name</label>
		<input
		  id="firstName"
		  name="firstName"
		  type="text"
		  onChange={formik.handleChange}
		  value={formik.values.firstName}
		/>
		{formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
		<label htmlFor="lastName">Last Name</label>
		<inputtr
		  id="lastName"
		  name="lastName"
		  type="text"
		  onChange={formik.handleChange}
		  value={formik.values.lastName}
		/>
		{formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
		<label htmlFor="email">Email Address</label>
		<input
		  id="email"
		  name="email"
		  type="email"
		  onChange={formik.handleChange}
		  value={formik.values.email}
		/>
		<label htmlFor="password">Password</label>
		<input
		  id="password-signup"
		  name="password"
		  type="password"
		  onChange={formik.handleChange}
		  value={formik.values.password}
		/>
		<button type="submit">Sign Up</button>
	  </form>
	);
  };

