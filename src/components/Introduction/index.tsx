import { Flex } from "@chakra-ui/react";
import React from "react";
import IntroductionButtons from "./IntroductionButtons";
import IntroductionImage from "./ProfileImage";

export default function Introduction() {
    return (
        <Flex justifyContent="center" align="center" width="100%" height="100vh" flexDirection="column">
            <Flex justifyContent="space-between" align="center" width="1000px" height="min-content" flexDirection="row">
                <IntroductionButtons />
                <IntroductionImage />
            </Flex>
        </Flex>
    )
}