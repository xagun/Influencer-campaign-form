import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CampaignFormHeader = () => {
  return (
    <Flex
      className="text-center"
      direction="column"
      gap={8}
      color={"black"}
      lineHeight={1.2}
      my={16}
    >
      <Heading
        fontSize={["28px", "32px", "55px"]}
        fontWeight={700}
        // letterSpacing={2}
      >
        Become an Influencer For Breakaway x Mifu
      </Heading>

      <Stack gap={6}>
        <Text fontSize={["14px", "16px", "20px"]} fontWeight={500}>
          Whether you're the person with the most likes or followers on campus,
          or a hard-worker looking to build your network and gain marketing
          experience, we want to HEAR from you.
        </Text>
        <Text fontSize={["14px", "16px", "20px"]} fontWeight={500}>
          Becoming a part of the Breakaway Influencer and Ambassador team is
          pretty simple. Just apply by selecting your preferred market below.
          Complete your application and attach your Instagram handle for a
          chance to be considered!
        </Text>
      </Stack>
    </Flex>
  );
};

export default CampaignFormHeader;
