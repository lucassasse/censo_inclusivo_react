import styled from 'styled-components';

const StyledInput = styled.input`
	background-color: white;
	border: 1px solid gray;
	color: black;
	padding: 15px 32px;
	margin-bottom: 16px;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 10px;
`;

function InpComum(props){
    return(
        <>
            <StyledInput placeholder={props.text}></StyledInput>
        </>
    );
}

export default InpComum;