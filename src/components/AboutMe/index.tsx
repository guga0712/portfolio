import { Flex, Image, Heading, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import React from "react";

export default function AboutMe() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex flexDirection="column" width="50%" align="center" gap='6'>
            <Heading>Gustavo R. Martins</Heading>
            <Button onClick={onOpen} colorScheme="purple" w="50%">Saiba mais  </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backdropFilter='blur(10px)' />
                <ModalContent background="gray.800" borderRadius="10px">
                    <ModalHeader background="gray.800" borderRadius="10px">Sobre mim</ModalHeader>
                    <ModalBody background="gray.800" borderRadius="10px">
                        Formado em Automação Industrial e atual estudante de Ciência da Computação, trabalhei no Hotel Holiday Inn Anhembi, exercendo o suporte Help-desk e demais atividades como manutenção de computadores, configuração de rede e servidores.
                        <br /><br />Atualmente trabalho como Head of Technical Support na Up Agency Brasil, buscando soluções de problemas recorrentes e realizando migrações entre plataformas de E-commerce.
                    </ModalBody>

                    <ModalFooter background="gray.800" borderRadius="10px">
                        <Button colorScheme='purple' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>

    )
}