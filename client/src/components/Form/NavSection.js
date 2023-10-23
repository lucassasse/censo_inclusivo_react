import { Box, Stack, Text } from "@chakra-ui/react";


export function NavSection(props) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{props.title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {props.children}
            </Stack>
        </Box>
    );
}