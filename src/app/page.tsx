"use client";

import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import CampaignForm from "./components/CampaignForm";
import CampaignFormHeader from "./components/CampaignFormHeader";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Container maxW={1000}>
        <CampaignFormHeader />
        <CampaignForm />
      </Container>
    </main>
  );
}
