import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        50: "#E8F4F9",
        100: "#D9DEE9",
        200: "#B7C2DA",
        300: "#6482C0",
        400: "#4267B2",
        500: "#385898",
        600: "#314E89",
        700: "#29487D",
        800: "#223B67",
        900: "#1E355B",
    },
};

const customTheme = extendTheme({ colors });

export default customTheme;