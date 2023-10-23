import { Text, Link as ChakraLinkProps, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function NavLink(props) {
    const { icon, children, href, ...rest } = props;
    return (
        <Link to={href} passHref>
            <ChakraLinkProps display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLinkProps>
        </Link>

    );
}