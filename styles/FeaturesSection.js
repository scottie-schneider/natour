import styled from 'styled-components';

const FeaturesSection = styled.section`
	.overlay {
		height: 100%;
		width: 100%;
		background-image: linear-gradient(
			to right bottom,
			${props => props.theme.primary_light},
			${props => props.theme.primary_dark}
		);
		opacity: 80%;
		position: absolute;
		z-index: -10;
	}
	z-index: 100;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	padding: 5rem;
	grid-gap: 6rem;
	transition: all 0.3s;
	transform: skewY(-7deg);
	height: 95vh;
	background-size: cover;
	background-image: url('/img/hero.jpg');
	clip-path: polygon(0 0, 100% 0, 100% 75vh, 0% 100%);
	position: relative;
	& > *:not(.overlay) {
		transform: skewY(7deg);
	}
	.feature-box {
		.heading-tertiary {
			font-size: 1.2rem;
		}
		transition: all 0.2s;
		background-color: rgba(255, 255, 255, 0.8);
		font-size: 1.2rem;
		padding: 2.5rem;
		text-align: center;
		border-radius: 3px;
		box-shadow: 0 1.5rem 4rem rgba(0, 0, 0.15);
		z-index: 100;
		&__icon {
			font-size: 6rem;
			margin-bottom: 0.5rem;
			background-image: linear-gradient(
				to right,
				${props => props.theme.primary_light},
				${props => props.theme.primary_dark}
			);
			display: inline-block;
			-webkit-background-clip: text;
			color: transparent;
		}
		&:hover {
			transform: translateY(-1.5rem) scale(1.03);
		}
	}

	.images {
		.composition {
			&:hover .composition__photo:not(:hover) {
				transform: scale(0.9) translateY(-5rem);
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
		margin-bottom: 8rem;
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
export default FeaturesSection;
