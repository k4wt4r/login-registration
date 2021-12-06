import styled from 'styled-components'


const Input = styled.input`
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	border-radius: 7px;
	width: 60%;
	margin: 10px;
	height: 30px;
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
		border-radius: 0.5rem;
	}
	&::placeholder {
		color: #b9abe099;
		font-weight: 100;
		font-size: 1rem;
	}

`
export default Input;