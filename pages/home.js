import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useUser } from '../context/userContext';
import firebase from '../firebase/clientApp';
import styled, { createGlobalStyle } from 'styled-components';
// Styled Component File imports
import StyledHeader from '../styles/HomeHeader';

// Should put this up a level (_app?) as the project grows
const GlobalStyle = createGlobalStyle`
	html {
		font-size: 10px;
	}
	@media(max-width: 800px) {
		html {
		font-size: 10px;
	}
	}
`;
// Define what main theme will look like
// For ease, I'm putting in the theme here. For further work use the themeprovider.
const theme = {
	// Colors
	primary: '#55c57a',
	primary_light: '#7ed56f',
	primary_dark: '#28b485',
	grey_dark: '#777',
	white: '#fff',
	black: '#000',
	grey_light_1: '#f7f7f7',
};
const StyledMain = styled.main`
	.section-about {
		background-color: ${props => props.theme.grey_light_1};
		padding: 25rem 0;
		margin-top: -20vh;
	}
	.heading-secondary {
		font-size: 3.5rem;
		text-transform: uppercase;
		font-weight: 700;
		/* Neat example of how to apply a linear gradient to text */
		/* 1 - bacground image of linear gradient */
		background-image: linear-gradient(
			to right,
			${props => props.theme.primary_light},
			${props => props.theme.primary_dark}
		);
		/* 2 - display inline block to only take up needed space */
		display: inline-block;
		/* 3 - clip bg to text */
		-webkit-background-clip: text;
		/* 4 - text goes transparent to allow bg to show */
		color: transparent;
	}
`;
const MainDiv = styled.div`
	/* Basic reset */
	min-height: 100vh;
`;

export default function Home() {
	// Our custom hook to get context values
	const { loadingUser, user } = useUser();

	const profile = { username: 'nextjs_user', message: 'Awesome!!' };

	useEffect(() => {
		if (!loadingUser) {
			// You know that the user is loaded: either logged in or out!
			console.log(user);
		}
		// You also have your firebase app initialized
		console.log(firebase);
	}, [loadingUser, user]);

	const createUser = async () => {
		const db = firebase.firestore();
		await db.collection('profile').doc(profile.username).set(profile);
		alert('User created!!');
	};

	return (
		<MainDiv theme={theme}>
			<GlobalStyle />
			<Head>
				<title>Next.js w/ Firebase Client-Side</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StyledHeader theme={theme}>
				<div className="overlay"></div>
				<div className="other">
					<div className="header__logo-box">
						<img src="/img/logo-white.png" alt="Natours logo" className="logo" />
					</div>
					<div className="header__text-box">
						<h1 className="heading-primary">
							<span className="heading-primary-main">Outdoors </span>
							<span className="heading-primary-sub">is where life happens</span>
						</h1>
						<a href="#" className="btn btn-white btn-animated">
							Discover our tours
						</a>
					</div>
				</div>
			</StyledHeader>
			<StyledMain theme={theme}>
				<section class="section-about">
					<h2 class="heading-secondary">Exciting tours for adventurous people</h2>
				</section>
			</StyledMain>
		</MainDiv>
	);
}
