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
	// Font
	default_font: '1.6rem',
};
const StyledMain = styled.main`
	/* Animations */

	/* Base */
	.images {
		.composition {
			&:hover .composition__photo:not(:hover) {
				transform: scale(0.9);
			}
			position: relative;
			&__photo {
				width: 55%;
				box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
				border-radius: 2px;
				position: absolute;
				z-index: 10;
				transition: all 0.2s;
				&--p1 {
					left: 0;
					top: -2rem;
				}
				&--p2 {
					right: 0;
					top: 2rem;
				}
				&--p3 {
					left: 20%;
					top: 10rem;
				}
				&:hover {
					outline: 1.5rem solid ${props => props.theme.primary};
					transform: scale(1.05);
					box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
					z-index: 20;
					outline-offset: 2rem;
				}
			}
		}
	}
	.tour-marketing {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.btn-text {
		&:link,
		&:visited {
			font-size: ${props => props.theme.default_font};
			color: ${props => props.theme.primary};
			display: inline-block;
			text-decoration: none;
			border-bottom: 1px solid ${props => props.theme.primary};
			padding: 3px;
			transition: all 0.2s;
		}
		&:hover {
			background-color: ${props => props.theme.primary};
			color: ${props => props.theme.white};
			box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
			transform: translateY(-2px);
		}
		&:active {
			box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
			transform: translateY(0);
		}
	}
	.section-about {
		background-color: ${props => props.theme.grey_light_1};
		padding: 25rem 0;
		margin-top: -20vh;
	}
	/* Typography */
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
		letter-spacing: 2px;
		transition: all 0.2s;
		&:hover {
			transform: skewY(2deg);
			text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0);
		}
	}
	.heading-tertiary {
		font-size: ${props => props.theme.default_font};
		font-weight: 700;
		text-transform: uppercase;
	}
	.paragraph {
		font-size: 1.5rem;
		&:not(:last-child) {
			margin-bottom: 3rem;
		}
	}
	/* Utilities */
	.u-center-text {
		text-align: center;
	}
	.u-margin-bottom-big {
		margin-bottom: 8rem;
	}
	.u-margin-bottom-medium {
		margin-bottom: 6rem;
	}
	.u-margin-bottom-small {
		margin-bottom: 2rem;
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
					<div class="u-center-text u-margin-bottom-big">
						<h2 class="heading-secondary">Exciting tours for adventurous people</h2>
					</div>
					<div class="tour-marketing">
						<div class="text">
							<h3 class="heading-tertiary u-margin-bottom-small">
								You're going to fall in love with nature
							</h3>
							<p class="paragraph">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
								similique repellat inventore voluptatum maxime, non accusantium, ea reiciendis
								atque tempora beatae perspiciatis, temporibus ipsam repudiandae blanditiis
								ipsa error qui illum?
							</p>
							<h3 class="heading-tertiary u-margin-bottom-small">
								Live adventurous as you never have before
							</h3>
							<p class="paragraph">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla quasi
								cum sunt totam iusto dolore veritatis officia quos repellendus quia excepturi,
								in porro adipisci aperiam, commodi quidem iste perferendis.
							</p>
							<a href="#" class="btn-text">
								Learn more {String.fromCharCode(8594)}
							</a>
						</div>
						<div class="images">
							<div class="composition">
								<img
									src="img/nat-1-large.jpg"
									alt="Photo 1"
									class="composition__photo composition__photo--p1"
								/>
								<img
									src="img/nat-2-large.jpg"
									alt="Photo 2"
									class="composition__photo composition__photo--p2"
								/>
								<img
									src="img/nat-3-large.jpg"
									alt="Photo 3"
									class="composition__photo composition__photo--p3"
								/>
							</div>
						</div>
					</div>
				</section>
			</StyledMain>
		</MainDiv>
	);
}
