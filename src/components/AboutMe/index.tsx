import { Flex, Heading, Text, Image } from "@chakra-ui/react";


export default function AboutMe() {
    return (
        <Flex justifyContent="center" gap="100" align="center" width="100%" height="100vh" flexDirection="column">
            <Heading data-aos="fade-up" data-aos-duration="400" >Sobre mim</Heading>
            <Flex data-aos="fade-up" data-aos-duration="400" data-aos-delay="200" justifyContent="space-between" align="center" width="1000px" height="min-content" flexDirection="row">
                <Text width="50%" fontWeight='400' fontSize='20px'>Formado em Automação Industrial e Ciência da Computação, trabalhei no <Text color={'purple.400'} as={'span'} fontWeight="700">Hotel Holiday Inn Anhembi</Text>, exercendo o suporte <Text color={'purple.400'} as={'span'} fontWeight="700">Help-desk</Text> e demais atividades como manutenção de computadores, configuração de rede e servidores.
                    <br /><br />Atualmente trabalho como <Text color={'purple.400'} as={'span'} fontWeight="700">Head of Technical Support</Text> na <Text color={'purple.400'} as={'span'} fontWeight="700">Up Agency Brasil</Text>, buscando soluções de problemas recorrentes e realizando migrações entre plataformas de E-commerce. <br /><br /><Text fontWeight='600' fontSize='25px'>Curiosidades</Text><Text>Curto videogames e toco violão</Text></Text>
                <Image
                    borderRadius='full'
                    boxSize='300px'
                    src='https://media-exp1.licdn.com/dms/image/C4D03AQGA3_Shqk0Wfw/profile-displayphoto-shrink_800_800/0/1614038710675?e=1657756800&v=beta&t=NciJvwg6JmtWIubOjT2s2cdd3Ru04aRJjTTjyLBqceI'
                    alt='Gustavo R. Martins'
                    padding='10px'
                    border='2px solid'
                    borderColor={'purple.400'}
                />
            </Flex>
        </Flex>
    )
}