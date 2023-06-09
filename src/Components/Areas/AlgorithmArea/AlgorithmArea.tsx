import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CodeArea from "./CodeArea";
import ProgrammingLanguageArea from "./ProgrammingLanguageArea";

type Props = {};

export default function AlgorithmArea({}: Props) {
  return (
    <Flex
      id="algorithm-area"
      direction="column"
      gap="2"
      borderRadius="10px"
      p="2"
      bg="gray.900"
      width="100%"
      align="center"
      justify="center"
    >
      <Text color="gray.500" fontWeight="700" fontSize="14pt">
        Algorithm
      </Text>
      <ProgrammingLanguageArea />
      <CodeArea />
    </Flex>
  );
}
