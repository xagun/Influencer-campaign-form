"use client";

import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";

import "@fontsource-variable/montserrat";

const theme = extendTheme({
  shadows: {
    customShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
    xs: "0 0 50px rgba(245, 245, 244, 0.8)",
  },
  textStyles: {
    labelStyle: {
      fontWeight: 400,
      textTransform: "capitalize",
      textColor: "#232859",
      marginBottom: 0,
    },
  },
  colors: {
    labelText: "#232859",
  },
  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
