import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: #203054;
	border: 1px solid #203054;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 10px;
	cursor: pointer;
`;

function BtnComBorda(props){
    return(
        <>
            <StyledButton onClick={props.event}>{props.text}</StyledButton>
        </>
    );
}

export default BtnComBorda;