import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import ProfileImage from "./ProfileImage";

export default function AboutMeContent() {
    return (
        <Flex justifyContent="center" align="center" width="100%" height="100vh" flexDirection="column">
            <Flex justifyContent="space-between" align="center" width="70%" height="min-content" flexDirection="row">
                <AboutMe />
                <ProfileImage />
            </Flex>
        </Flex>
    )
}