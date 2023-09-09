// import "./App.css";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  Box,
  Button,
  CircularProgress,
  Spinner,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

const Convert = () => {
  // Defining the first state for input
  const [selectFrom, setSelectFrom] = useState("");
  const [input, setInput] = useState(0);
  const [toCur, setToCur] = useState("");
  const [result, setResult] = useState("");
  const [currencies, setCurrencies] = useState([]);

  // first function to handle select from
  const curhandler = (e) => {
    setSelectFrom(e.target.value);
  };
  // second function to handle currency input
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(typeof input);
  };
  // third function to handle tocur
  const handleTocur = (e) => {
    setToCur(e.target.value);
    // console.log(e)
  };
  // fourth function to handle return result
  const config = useMemo(
    () => ({ headers: "apikey:Z5DCFr3bOYsHuDP5owbIew5n6UKf7v1J" }),
    []
  );
  const handleResult = async () => {
    // const config = {headers:'Z5DCFr3bOYsHuDP5owbIew5n6UKf7v1J'}
    const res = await axios.get(
      `https://api.apilayer.com/fixer/convert?to=${toCur}&from=${selectFrom}&amount=${input}`,
      config
    );

    // console.log(res);
    setResult(res.data);
  };

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await axios.get(
        "https://api.apilayer.com/fixer/symbols",
        config
      );
      const currs = res.data.symbols;
      const arr = [];
      for (const [key, value] of Object.entries(currs)) {
        const obj = { key, value };
        arr.push(obj);
      }
      setCurrencies(arr);
    };
    getCurrencies();
  }, [config]);

  return (
    <Stack mt={"16"} bgImage={"url=''"} blur={"3xl"}>
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ type: "spring" }}
      >
        {/* {currencies.length < 1 ? (
        <Flex justify={'center'}>
          <CircularProgress isIndeterminate size={'90'} value={'Loading'}  color="whatsapp.200" />
          
        </Flex>
      ) : ( */}
        <Container>
          <Heading color={"white"} textAlign={"center"} mb={6} as={"h2"}>
            Currency Converter
          </Heading>
          <Text textAlign={"center"} color={"white"}>
            Convert From
          </Text>
          <Stack>
            <Flex flexDirection={"row"}>
              <Select
                variant={"filled"}
                bg={"green"}
                color={"white"}
                onChange={curhandler}
                borderRight={"none"}
                borderRightRadius={"0"}
                placeholder="From"
                fontWeight={"bold"}
                _focus={{ bg: "green" }}
                _hover={{ bg: "green.600" }}
              >
                <option disabled>Select Country</option>
                {currencies.map((symb) => (
                  <option value={symb.key} keys={symb.value}>
                    {symb.value}
                  </option>
                ))}
              </Select>
              <Input
                type="number"
                borderLeftRadius={"0"}
                color={"white"}
                fontWeight={"bold"}
                variant={"outline"}
                border={"1px"}
                borderLeft={"none"}
                onChange={handleInput}
                _focus={{ border: "none", outline: "none" }}
              />
            </Flex>

            <br />
          </Stack>
          <Text textAlign={"center"} color={"white"}>
            To
          </Text>
          <Stack>
            <Flex>
              <Select
                variant={"filled"}
                bg={"green"}
                name="to"
                onChange={handleTocur}
                _focus={{ border: "none", bg: "green.600", outline: "none" }}
                color={"white"}
                fontWeight={"bold"}
                placeholder="To"
                borderRight={"none"}
                borderRightRadius={"0"}
                _hover={{ bg: "green.600" }}
              >
                <option disabled>Select Country</option>
                {currencies.map((symb) => (
                  <option value={symb.key} keys={`${symb.value}1`}>
                    {symb.value}
                  </option>
                ))}
              </Select>
              <Input
                type="number"
                borderLeftRadius={"0"}
                color={"white"}
                fontWeight={"bold"}
                value={result.result}
                variant={"outline"}
                border={"1px"}
                borderLeft={"none"}
                _focus={{ border: "none", outline: "none" }}
              />
            </Flex>

            {result.info && (
              <Box>
                <Text color={"white"}>
                  Conversion rate from {selectFrom} to {toCur} is
                  {result.info.rate} as at {result.date}. However rate changes
                  unpredictably
                </Text>
              </Box>
            )}
            <Flex mt={8} justify={"center"}>
              <Button
                bg={"green"}
                color={"white"}
                type="button"
                onClick={handleResult}
                isDisabled={!input}
                width={"100%"}
                _hover={{ bg: "green.600" }}
              >
                {result.info && <Spinner size={"lg"} color="white" />}
                Convert
              </Button>
            </Flex>
          </Stack>
        </Container>
        )};
      </motion.div>
      <Container>
        <Box padding={4} bg={"white"}>
          <Heading color={"blue.200"} textAlign={"center"}>
            Banner A
            <Text as={"span"} color={"yellow.200"}>
              d
            </Text>
            <Text as={'span'} color={'red'}>s</Text>
          </Heading>
        </Box>
      </Container>
    </Stack>
  );
};

export default Convert;
