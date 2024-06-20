import React from "react";
import { Box, Center, Flex, Image, Stack } from "@chakra-ui/react";

import breakawayLogo from "../../../images/breakaway_logo.png";
import mifuLogo from "../../../images/mifu_logo.png";

const Header = () => {
  return (
    <Flex as="nav" wrap="wrap" bg="white" boxShadow="xs">
      <Center boxShadow={"xs"} w={"100%"} p={6}>
        <Stack direction="row" gap="20px" alignItems={"center"}>
          <Image
            src={breakawayLogo.src}
            alt="Breakaway Logo"
            fallbackSrc="https://via.placeholder.com/40"
            h={[6, 8, 12, 14]}
          />
          <span className="font-bold text-lg">X</span>
          <Image
            src={mifuLogo.src}
            alt="Mifu Logo"
            fallbackSrc="https://via.placeholder.com/40"
            h={[6, 8, 12, 14]}
          />
        </Stack>
      </Center>
    </Flex>
  );
};

export default Header;
