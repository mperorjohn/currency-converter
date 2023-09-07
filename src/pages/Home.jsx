import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack>
      <Heading color={'white'}>
        Go to convert page <Link to={"convert"}>Convert</Link>
      </Heading>
    </Stack>
  );
};


export default Home