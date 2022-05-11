import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Section({ children }) {
    return (
        <>
            <Flex justifyContent="center" align="center" width="100%" height="100vh">
                {children}
            </Flex>
        </>
    )
}