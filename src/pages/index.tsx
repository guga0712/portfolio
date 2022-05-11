import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AboutMe from "../components/AboutMe";
import ProfileImage from "../components/ProfileImage";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Section>
        <Flex justifyContent="space-between" align="center" width="70%" height="min-content" flexDirection="row">
          <AboutMe />
          <ProfileImage />
        </Flex>
      </Section>

    </>
  )
}