import { Flex, Text, Heading, Button, useDisclosure, HStack, background, VStack, Link } from "@chakra-ui/react";
import React from "react";


export default function IntroductionButtons() {
    return (
        <Flex flexDirection="column" gap='8'>
            <VStack gap='0' align='flex-start' marginTop='0'>
                <Text>Olá, meu nome é</Text>
                <Heading>Gustavo R. <Text color={'purple.400'} as={'span'}>Martins</Text></Heading>
                <Text>Desenvolvedor Front-End Junior</Text>
            </VStack>
            <HStack>
                <Button
                    w="230px"
                    colorScheme="purple"
                    _focus={{ outline: 0 }}>
                    Download CV</Button>
                <Link href="#">
                    <Button
                        border='2px solid'
                        borderColor={'purple.500'}
                        backgroundColor='transparent'
                        w="230px"
                        _hover={{ backgroundColor: 'purple.500', color: 'white' }}
                        _focus={{ outline: 0 }}
                        _active={{ backgroundColor: 'purple.500' }}
                    >
                        Contato
                    </Button>
                </Link>
            </HStack>
        </Flex>

    )
}