import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SchoolBox from "./SchoolBox";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GraduationContent() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Flex justifyContent="center" gap="100" align="center" width="100%" height="100vh" flexDirection="column">
                <Heading data-aos="fade-up" data-aos-duration="200">Formação</Heading>
                <Flex data-aos="fade-up" data-aos-duration="500" justifyContent="space-between" align="center" width="70%" height="min-content" flexDirection="row">
                    <SchoolBox name="Unip" course="Ciencia da computacao" grade="Bacharel" initial="2018" final="2021" />
                    <SchoolBox name="Etec" course="Automação industrial" grade="Técnico" initial="2018" final="2019" />
                </Flex>
            </Flex>
        </>
    );
}