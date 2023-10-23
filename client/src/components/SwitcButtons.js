import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

export function SwitchButtons() {
    const [isPersonal, setIsPersonal] = useState(true);
    const [isBusiness, setIsBusiness] = useState(false);

    const handleIsPersonalIsBusiness = (target) => {
        if (target.target.id === "personal") {
            setIsPersonal(true);
            setIsBusiness(false);
        } if (target.target.id === "business") {
            setIsPersonal(false);
            setIsBusiness(true);
        }
    }

    return (
        <Flex
            w={"full"}
            borderWidth={1}
            borderColor={"gray.100"}
            borderRadius={"14"}
            my={6}
        >
            <Button
                w={"full"}
                variant={isPersonal ? "solid" : "ghost"}
                borderRadius={14}
                colorScheme={isPersonal ? "messenger" : "gray"}
                id="personal"
                textTransform={"uppercase"}
                size={"sm"}
                py={5}
                onClick={handleIsPersonalIsBusiness}
            >
                Personal
            </Button>
            <Button
                w={"full"}
                variant={isBusiness ? "solid" : "ghost"}
                borderRadius={14}
                colorScheme={isBusiness ? "messenger" : "gray"}
                id="business"
                textTransform={"uppercase"}
                color={isBusiness ? "white" : "gray.500"}
                size={"sm"}
                py={5}
                onClick={handleIsPersonalIsBusiness}

            >
                Business
            </Button>
        </Flex>
    );
};