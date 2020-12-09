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
    .overlay {
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
      opacity: 80%;
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
        <div className="overlay">Some text...</div>
      </header>
    </MainDiv>
  );
}
