import { Box, Button, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";



interface SchoolBoxProps {
    name: string;
    course: string;
    grade: string;
    initial: string;
    final: string;

}

export default function SchoolBox({ name, course, grade, initial, final }: SchoolBoxProps) {
    return (
        <>
            <Box bg="gray.700" w="45%" h="auto" borderRadius="10px" textAlign="center" py="20px">
                <VStack>
                    <Text fontSize="1xl">{name}</Text>
                    <Text fontSize="3xl" fontWeight="bold">{course}</Text>
                    <VStack spacing="0">
                        <Text fontWeight="bold">{grade}</Text>
                        <Text fontWeight="400" fontSize="xs">De: {initial}</Text>
                        <Text fontWeight="400" fontSize="xs">Até: {final}</Text>
                    </VStack>
                    <Button colorScheme="purple" _focus={{ outline: 0 }}>Saiba mais</Button>
                </VStack>
            </Box>
        </>


    );
}