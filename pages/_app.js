import UserProvider from '../context/userContext';
import { createGlobalStyle } from 'styled-components';
import '../styles/styles.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    text-decoration: none; 
  }
  html, body {margin: 0; height: 100%; overflow: hidden}
  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px; 
    line-height: 1.7;
    color: #777;
    padding: 0px;
  }
  #__next {
    height: 100%;
    min-height: 100%;
    
  }
`;
// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
	return (
		<UserProvider>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
					rel="stylesheet"
				/>
			</head>
			<GlobalStyle />
			<Component {...pageProps} />
		</UserProvider>
	);
}
