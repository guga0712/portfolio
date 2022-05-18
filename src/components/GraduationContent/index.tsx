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
                <Heading data-aos="fade-up" data-aos-duration="400" >Formação</Heading>
                <Flex data-aos="fade-up" data-aos-duration="400" data-aos-delay="200" justifyContent="space-between" align="center" width="1000px" height="min-content" flexDirection="row">
                    <SchoolBox name="ETEC Martin Luther King" course="Automação industrial" grade="Técnico" initial="2018" final="2019" />
                    <SchoolBox name="Universidade Paulista" course="Ciência da Computação" grade="Bacharel" initial="2018" final="2021" />
                </Flex>
            </Flex>
        </>
    );
}