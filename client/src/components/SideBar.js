import React from "react";
import { Box } from "@chakra-ui/react";
import { LogoSearch } from "./LogoSearch";
import { SwitchButtons } from "./SwitcButtons";
import { Navigation } from "../components/Navigation/Navigation";

export function SideBar({ collapse }) {
    return (
        <React.Fragment>
            <Box>
                <LogoSearch />
                <SwitchButtons />
                <Navigation collapse={collapse} />
            </Box>
            {/* AVATAR BOX */}
        </React.Fragment>
    );
};


