import React from 'react';
import { chakra, Box, Image } from "@chakra-ui/react"
import backgroundPc from 'assets/images/backgroundPc.png'
import logo from 'assets/images/logo.svg'

import background from 'assets/video/background.webm'

const Home = () => {
    return (
        <Box overflowX="hidden" overflowY="hidden">
            {/* <Box
                zIndex="-1"
                position="absolute"
                width="100%" height="100vh"
                maxWidth="100%" maxHeight="100vh"
                backgroundImage={`url('${backgroundPc}')`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            /> */}
            <video playsInline autoplay muted loop id="videobackground">
                <source src={background} type="video/webm" />
            </video>
            <Image boxSize='250px' top={'-25px'} left={'60px'} position={'absolute'} src={logo} />
        </Box>
    );
};

export default Home