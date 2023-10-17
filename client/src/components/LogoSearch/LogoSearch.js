import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { AiFillThunderbolt, AiOutlineSearch } from "react-icons/ai";

export function LogoSearch({ collapse }) {
    return (
        <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={collapse ? "row" : "column"}
            gap={4}
        >
            <Box display={"flex"} alignItems={"center"} gap={2}>
                <Icon as={AiFillThunderbolt} fontSize={30} />
                {collapse &&
                    <Text fontSize={16} fontWeight={"bold"}>
                        Design2ChakraUI
                    </Text>
                }
            </Box>
            <IconButton
                aria-label="Search"
                variant={"ghost"}
                icon={<AiOutlineSearch />}
                fontSize={26}
                color={"gray.400"}
                borderRadius={"50%"}
            />
        </Flex>
    );

};