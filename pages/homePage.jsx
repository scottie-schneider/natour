import Head from 'next/head';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background: red;
	border: 4px solid black;
	min-height: 100%;
	height: 100%;
`;
export default function Trillo() {
	return (
		<StyledDiv>
			<Head></Head>
			hi
		</StyledDiv>
	);
}
