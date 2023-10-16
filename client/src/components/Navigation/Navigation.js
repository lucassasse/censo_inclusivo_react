import { IconProps, List, ListItem, Text } from "@chakra-ui/react";
import {
    RiDashboardLine,
    RiShoppingBagLine,
    RiMailLine,
    RiFlagLine,
    RiCalendar2Line,
    RiGroupLine,
    RiSettings5Line,
    RiChatSmile2Line,
    RiNotification3Line,
} from "react-icons/ri";
import { NavItem } from "./NavItem";
import React from "react";

const items = [
    {
        type: "link",
        label: "Painel do Usuário",
        icon: RiDashboardLine,
        path: "/",
    },
    {
        type: "link",
        label: "Estatística",
        icon: RiShoppingBagLine,
        path: "/",
    },
    {
        type: "link",
        label: "Vagas de Emprego",
        icon: RiMailLine,
        path: "/",
    },
    {
        type: "link",
        label: "Eventos",
        icon: RiFlagLine,
        path: "/",
    },
    {
        type: "link",
        label: "Leis e Noticias",
        icon: RiCalendar2Line,
        path: "/",
    },
    {
        type: "link",
        label: "Entre em Contato",
        icon: RiGroupLine,
        path: "/",
    },

    {
        type: "header",
        label: "Account",
    },

    {
        type: "link",
        label: "Notifications",
        icon: RiNotification3Line,
        path: "/",
        notifications: 24,
    },
    {
        type: "link",
        label: "Chat",
        icon: RiChatSmile2Line,
        path: "/",
        messages: 8,
    },
    {
        type: "link",
        label: "Settings",
        icon: RiSettings5Line,
        path: "/",
    },
];
export function Navigation({ collapse }) {
    return (
        <List w="full" my={8}>
            {items.map((item, index) => (
                <ListItem key={index}>
                    <NavItem item={item} isActive={index === 0} collapse={collapse} />
                </ListItem>
            ))}
        </List>
    );
}