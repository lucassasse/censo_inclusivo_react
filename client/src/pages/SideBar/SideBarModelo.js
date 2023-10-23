import React from "react";
import { Flex, HStack, } from "@chakra-ui/react";
import { SideBar } from "../../components/SideBar/SideBar";
import { Cadastro } from "../Cadastro/Cadastro";


export function SideBarModelo() {
    const [collapse] = React.useState(true);

    return (
        <HStack w="full" h="100vh" bg="#8AB2D3" padding={10} >
            {/* Side Bar */}
            <Flex
                as="aside"
                w="full"
                h="full"
                maxW={collapse ? 350 : 100}
                bg="white"
                alignItems="center"
                padding={6}
                flexDirection="column"
                justifyContent="space-between"
                transition="ease-in-out .2s"
                borderRadius="3xl"
            >
                {/* Importar Side Bar */}
                <SideBar collapse={collapse} />

            </Flex>

            {/* Main */}
            <Flex
                as={"main"}
                w={"full"}
                h={"full"}
                bg={"white"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                position={"relative"}
                borderRadius={"3xl"}
            >
                <Cadastro />
            </Flex>

        </HStack >
    );
};


