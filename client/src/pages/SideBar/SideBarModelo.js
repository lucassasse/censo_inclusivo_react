import { HStack, Flex, Text, IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { SideBar } from "../../components/SideBar";

export function SideBarModelo() {
    return (
        <HStack w="full" h="100vh" bg="gray.100" padding={10} >
            {/* Side Bar */}
            <Flex
                as="aside"
                w="full"
                h="full"
                maxW={350}
                bg="white"
                alignItems="center"
                padding={6}
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="3xl"
            >
                {/* Importar Side Bar */}
                <SideBar />

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
                    onClick={() => null}
                />
                <Text fontSize={100} color={"gray.300"}>Main</Text>
            </Flex>

        </HStack >
    );
};


