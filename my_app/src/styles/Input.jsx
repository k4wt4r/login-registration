import styled from 'styled-components'


const Input = styled.input`
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 4px 10px 0 #ff9a3c;
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
		color: gray;
		font-weight: 90;
		font-size: 0.9rem;
	}

`
export default Input;