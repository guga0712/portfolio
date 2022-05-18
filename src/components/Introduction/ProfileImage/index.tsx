import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function IntroductionImage() {
    return (
        <Flex>
            <Image
                borderRadius='full'
                src='/draw_home.png'
                alt='Gustavo R. Martins'
                boxSize='450px'
                width='100%'
            />
        </Flex>
    )
}