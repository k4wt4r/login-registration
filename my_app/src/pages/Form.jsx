import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 50vh;
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

export default Form;