import Head from "next/head";
import React from "react";
import AboutMe from "../components/AboutMe";
import GraduationContent from "../components/GraduationContent";
import Introduction from "../components/Introduction";

export default function Home() {

  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
      </Head>
      <Introduction />
      <AboutMe />
      <GraduationContent />
    </>
  )
}
