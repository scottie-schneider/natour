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
	.header {
		height: 95vh;
		background-size: cover;
		background-image: url('/img/hero.jpg');
		clip-path: polygon(0 0, 100% 0, 100% 75vh, 0% 100%);
		position: relative;
		.overlay {
			height: 100%;
			width: 100%;
			background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
			opacity: 80%;
			position: absolute;
			z-index: -10;
		}
		.other {
		}
		.header__logo-box {
			position: absolute;
			top: 40px;
			left: 40px;
		}
		.header__text-box {
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
		.header__logo {
			height: 35px;
		}
		.heading-primary {
			z-index: 5;
			color: #fff;
			text-transform: uppercase;
			/* Animation shakiness fix */
			backface-visibility: hidden;
			margin-bottom: 60px;
		}
		.heading-primary-main {
			display: block;
			font-size: 60px;
			font-weight: 400;
			letter-spacing: 35px;
			/* Animations */
			animation-name: moveInLeft;
			animation-duration: 1s;
			animation-timing-function: ease-out;
		}
		.heading-primary-sub {
			display: block;
			font-size: 20px;
			font-weight: 700;
			letter-spacing: 17.4px;
			/* Animations */
			animation: moveInRight 1s ease-out;
		}

		/* Buttons */
		.btn:link,
		.btn:visited {
			display: inline-block;
			text-transform: uppercase;
			text-decoration: none;
			padding: 15px 40px;
			border-radius: 100px;
			transition: all 0.2s;
			position: relative;
		}
		.btn:hover {
			transform: translateY(-3px);
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		}
		.btn:active {
			transform: translateY(-1px);
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
		}
		.btn-white {
			background-color: #fff;
			color: #777;
		}
		.btn::after {
			content: '';
			display: inline-block;
			height: 100%;
			width: 100%;
			border-radius: 100px;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			transition: all 0.4s;
		}
		.btn-white::after {
			background-color: #fff;
		}
		.btn:hover::after {
			transform: scaleX(1.4) scaleY(1.6);
			opacity: 0;
		}
		.btn-animated {
			animation: moveInBottom 0.5s ease-out 0.75s;
			animation-fill-mode: backwards;
		}
		@keyframes moveInLeft {
			0% {
				opacity: 0;
				transform: translateX(-100px);
			}
			80% {
				transform: translateX(10px);
			}
			100% {
				opacity: 1;
				transform: translate(0);
			}
		}
		@keyframes moveInRight {
			0% {
				opacity: 0;
				transform: translateX(100px);
			}
			80% {
				transform: translateX(-10px);
			}
			100% {
				opacity: 1;
				transform: translate(0);
			}
		}
		@keyframes moveInBottom {
			0% {
				opacity: 0;
				transform: translateY(30px);
			}
			100% {
				opacity: 1;
				transform: translate(0);
			}
		}
	}
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
						<img src="/img/logo-white.png" alt="Natours logo" className="header__logo" />
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
