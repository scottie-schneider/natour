import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "../context/userContext";
import firebase from "../firebase/clientApp";
import styled from "styled-components";

const MainDiv = styled.div`
  /* Basic reset */
  min-height: 100vh;
  .header {
    height: 95vh;
    background-size: cover;
    background-image: url("/img/hero.jpg");
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
    .logo-box {
      position: absolute;
      top: 40px;
      left: 40px;
    }
    .text-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .heading-primary {
      z-index: 5;
      color: #fff;
      text-transform: uppercase;
      /* Animation shakiness fix */
      backface-visibility: hidden;
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
    .logo {
      height: 35px;
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
  }
`;

export default function Home() {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();

  const profile = { username: "nextjs_user", message: "Awesome!!" };

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
    await db.collection("profile").doc(profile.username).set(profile);
    alert("User created!!");
  };

  return (
    <MainDiv>
      <Head>
        <title>Next.js w/ Firebase Client-Side</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div className="overlay"></div>
        <div className="other">
          <div className="logo-box">
            <img
              src="/img/logo-white.png"
              alt="Natours logo"
              className="logo"
            />
          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Outdoors </span>
              <span className="heading-primary-sub">is where life happens</span>
            </h1>
          </div>
        </div>
      </header>
    </MainDiv>
  );
}
