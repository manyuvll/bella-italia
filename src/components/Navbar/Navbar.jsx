import React from 'react';
import { HStack, Text, Heading } from "@chakra-ui/react"
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <Router>
            <HStack position='absolute' width="100%" spacing='28px' pr="70px" pt="40px">
                <Heading ml="auto" color='white' fontSize="30px" fontWeight="400" letterSpacing="0.15em" lineHeight="39px" transition="ease-in-out" transitionDuration="0.3s" _hover={{ color: "highlights" }}>
                    <Link to="/about">ABOUT</Link>
                </Heading>
                <Heading color='white' fontSize="30px" fontWeight="400" letterSpacing="0.15em" lineHeight="39px" transition="ease-in-out" transitionDuration="0.3s" _hover={{ color: "highlights" }}>
                    MENU
                </Heading>
                <Heading color='white' mr="10px" fontSize="30px" fontWeight="400" letterSpacing="0.15em" lineHeight="39px" transition="ease-in-out" transitionDuration="0.3s" _hover={{ color: "highlights" }}>
                    HORAIRES ET ACCÈS
                </Heading>
            </HStack>
        </Router>
    )
};

export { Navbar };
