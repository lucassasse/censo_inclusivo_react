import React from "react";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { SideBar } from "../../components/SideBar/SideBar";


export function SideBarModelo() {
    const [collapse, setCollapse] = React.useState(false);

    return (
        <HStack w="full" h="150vh" bg="gray.100" padding={10} >
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
                <IconButton
                    aria-label="Menu Collapse"
                    icon={<MdMenu />}
                    position={"absolute"}
                    top={6}
                    left={6}
                    onClick={() => setCollapse(!collapse)}
                />
                <Text fontSize={100} color={"gray.300"}>Main</Text>
            </Flex>

        </HStack >
    );
};


