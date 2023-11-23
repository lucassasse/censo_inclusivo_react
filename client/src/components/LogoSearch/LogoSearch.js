import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { AiFillThunderbolt, AiOutlineSearch } from "react-icons/ai";

export function LogoSearch({ collapse }) {
    return (
        <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            gap={4}
        >
            <Box display={"flex"} alignItems={"center"} gap={2}>
                {collapse &&
                    <Text fontSize={16} fontWeight={"bold"} color={"#0969da"}>
                        CENSO INCLUSIVO
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