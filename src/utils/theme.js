import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Six Caps',
        body: 'Pathway Gothic One',
    },
    colors: {
        highlights: "#C4C4C4",
        title: "",
        footerBg: "#902222"
    },
})

export default theme