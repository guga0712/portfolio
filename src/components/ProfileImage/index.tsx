import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function ProfileImage() {
    return (
        <Flex>
            <Image
                borderRadius='full'
                boxSize='250px'
                src='https://media-exp1.licdn.com/dms/image/C4D03AQGA3_Shqk0Wfw/profile-displayphoto-shrink_800_800/0/1614038710675?e=1657756800&v=beta&t=NciJvwg6JmtWIubOjT2s2cdd3Ru04aRJjTTjyLBqceI'
                alt='Gustavo R. Martins'
            />
        </Flex>
    )
}