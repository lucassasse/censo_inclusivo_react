import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: blue;
	border: 1px solid blue;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 10px;
`;

function BtnComBorda(props){
    return(
        <>
            <StyledButton>{props.text}</StyledButton>
        </>
    );
}

export default BtnComBorda;