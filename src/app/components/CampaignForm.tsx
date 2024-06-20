import { getSocialLinkImageSrc } from "../../../lib/socialImgs";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { capitalizeWord } from "../utils";
import { getCampaignForm } from "../../../lib/api";

const CampaignForm = () => {
  const {
    isLoading,
    isError,
    data: campaign,
    error,
  } = useQuery({
    queryKey: ["campaignForm", ""],
    queryFn: async () => getCampaignForm(""),
  });

  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting },
  } = useForm();

  const renderField = (label: any, idx: number) => {
    return (
      <FormControl isInvalid={!!errors[label]} key={idx}>
        <VStack align="start">
          <FormLabel htmlFor={label} textStyle="labelStyle">
            {label}
          </FormLabel>
          {label.includes("email") ? (
            <Input
              autoComplete="off"
              id={label}
              type="text"
              size="lg"
              fontSize={14}
              placeholder={"Enter your " + label}
              {...register(label, {
                required: `${capitalizeWord(label)} is required`,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
          ) : (
            <Input
              autoComplete="off"
              id={label}
              type="text"
              size="lg"
              fontSize={14}
              placeholder={"Enter your " + label}
              {...register(label, {
                required: `${capitalizeWord(label)} is required`,
              })}
            />
          )}

          <FormErrorMessage>
            {/* @ts-ignore */}
            {errors && errors[label]?.message}
          </FormErrorMessage>
        </VStack>
      </FormControl>
    );
  };

  const renderSocialField = (label: any, idx: number) => {
    return (
      <Flex key={idx} gap={3} alignItems="center">
        <Image
          src={getSocialLinkImageSrc(label)}
          alt={label}
          width={"40px"}
          height={"40px"}
          borderRadius="50%"
          overflow={"hidden"}
          objectFit={"cover"}
        />
        <FormControl isInvalid={!!errors[label]}>
          <InputGroup>
            <InputLeftAddon
              bg="transparent"
              borderRight="none"
              fontWeight="700"
              boxSize="48px"
            >
              @
            </InputLeftAddon>
            <Input
              autoComplete="off"
              fontSize={14}
              borderLeft="none"
              id={label}
              type="text"
              size="lg"
              placeholder={capitalizeWord(label) + " Username"}
              {...register(label, {
                required: `${capitalizeWord(label)} is required`,
              })}
            />
          </InputGroup>

          <FormErrorMessage>
            {/* @ts-ignore */}

            {errors && errors[label]?.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>
    );
  };

  const renderCustomField = (label: any, idx: number) => {
    return (
      <FormControl
        isInvalid={label.is_required && errors[label.name]}
        key={idx}
      >
        <VStack align="start">
          <FormLabel htmlFor={label.name.toLowerCase()} textStyle="labelStyle">
            {label.question}
          </FormLabel>
          {label.type === "boolean" ? (
            <Select
              id={label.name.toLowerCase()}
              placeholder="Choose option"
              size="lg"
              {...register(label.name, {
                required: `This field is required`,
              })}
              fontSize={14}
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </Select>
          ) : (
            <Input
              autoComplete="off"
              id={label.name.toLowerCase()}
              type="text"
              size="lg"
              fontSize={14}
              placeholder="Your answer"
              {...register(label.name, {
                required: label.is_required && `This field is required`,
              })}
            />
          )}
        </VStack>
        <FormErrorMessage>
          {/* @ts-ignore */}

          {errors && errors[label?.name]?.message}
        </FormErrorMessage>
      </FormControl>
    );
  };

  const onSubmit = (values: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log("Form Submitted:", JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
  };

  if (isError) return `Error: ${error.message} `;
  return (
    <Box pb={16} pt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          borderRadius="xl"
          overflow="hidden"
          p={8}
          mx={["4", "16"]}
          boxShadow="customShadow"
        >
          <Text color="labelText" fontWeight={600} mb={5} fontSize="20px">
            Apply Now
          </Text>

          {isLoading ? (
            <Stack spacing={5}>
              <Stack>
                <Skeleton height="20px" width="60px" />
                <Skeleton height="40px" />
              </Stack>
              <Stack>
                <Skeleton height="20px" width="60px" />
                <Skeleton height="40px" />
              </Stack>

              <Flex gap={3} alignItems="center">
                <SkeletonCircle size="12" />
                <Skeleton height="40px" width="100%" />
              </Flex>
              <Flex gap={3} alignItems="center">
                <SkeletonCircle size="12" />
                <Skeleton height="40px" width="100%" />
              </Flex>

              <Stack>
                <Skeleton height="20px" width="60px" />
                <Skeleton height="40px" />
              </Stack>
              <Stack>
                <Skeleton height="20px" width="60px" />
                <Skeleton height="40px" />
              </Stack>
            </Stack>
          ) : (
            <VStack spacing={6} align="stretch">
              {/* Render default fields if present  */}
              {campaign?.default_fields?.map((df, idx) => renderField(df, idx))}

              {/* Render Social fields if present */}

              <Text color="labelText" fontWeight={500} mb={-2}>
                Your Socials
              </Text>
              {campaign?.socials?.map((sf, idx) => renderSocialField(sf, idx))}

              {/* Render Custom fields if present */}
              {campaign?.custom_fields?.map((cf, idx) =>
                renderCustomField(cf, idx)
              )}
            </VStack>
          )}
        </Box>
        <Flex justifyContent={"end"} mx={16}>
          <Button
            color="white"
            bg="#5957D5"
            size="lg"
            borderRadius={15}
            marginTop={5}
            isLoading={isSubmitting}
            type="submit"
            loadingText="Submitting"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default CampaignForm;
