import {
  Box,
  Heading,
  ListItem,
  Spacer,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Stack
      p={4}
      bg={"white"}
      color={"green"}
      display={"flex"}
      flexDirection={"row"}
      overflow={"hidden"}
    >
      <Box>
        <Heading textAlign={{ base: "center", md: "start" }}>Market.Ng</Heading>
      </Box>
      <Spacer />
      <Box mr={6} display={{ base: "none", md: "flex" }}>
        <UnorderedList
          color={"green"}
          display={"flex"}
          gap={4}
          listStyleType={"none"}
        >
          <ListItem>
            <Link to={"/"}>Home |</Link>
          </ListItem>
          <ListItem>
            <Link to={"convert"}>Convert |</Link>
          </ListItem>
          <ListItem>
            <Link>Prices |</Link>
          </ListItem>
          <ListItem>
            <Link to={"stock"}>Stock |</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Stack>
  );
};
