import { Flex, Text, Heading, Button, useDisclosure, HStack, background } from "@chakra-ui/react";
import React from "react";

export default function IntroductionButtons() {
    return (
        <Flex flexDirection="column" align="center" gap='6'>
            <Heading>Gustavo R. Martins</Heading>
            <Text>Bem vindo ao meu Portfólio</Text>
            <HStack>
                <Button w="230px" colorScheme="purple">
                    Download CV</Button>
                <Button border='2px solid'
                    borderColor={'purple.500'}
                    backgroundColor='transparent'
                    w="230px"
                    _hover={{ backgroundColor: 'purple.500', color: 'white' }}>Contato</Button>
            </HStack>
        </Flex>

    )
}