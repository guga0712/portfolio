import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Head } from "next/document";
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
                <Text fontSize="1xl">{name}</Text>
                <Text fontSize="2xl" fontWeight="bold">{course}</Text>
                <Text fontWeight="bold">{grade}</Text>
                <Text fontWeight="400" fontSize="xs">{initial}</Text>
                <Text fontWeight="400" fontSize="xs">{final}</Text>
            </Box>
        </>


    );
}