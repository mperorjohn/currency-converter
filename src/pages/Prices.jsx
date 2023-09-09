import { Stack, Table, Td, Th, Thead, Tbody, Tr } from "@chakra-ui/react";
import React from "react";

export const Prices = () => {
  const dataField = ["Country", "Buying Price", "Selling Price"];

  const countData = [
    {
      countryName: "Nigeria",
      buyingPrice: 20.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Ghana",
      buyingPrice: 30.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Cotonu",
      buyingPrice: 10.9,
      sellingPrice: 30.6,
    },
    {
      countryName: "Pounds",
      buyingPrice: 90.9,
      sellingPrice: 101.6,
    },
    {
      countryName: "Nigeria",
      buyingPrice: 20.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Ghana",
      buyingPrice: 30.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Cotonu",
      buyingPrice: 10.9,
      sellingPrice: 30.6,
    },
    {
      countryName: "Pounds",
      buyingPrice: 90.9,
      sellingPrice: 101.6,
    },
    {
      countryName: "Nigeria",
      buyingPrice: 20.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Ghana",
      buyingPrice: 30.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Cotonu",
      buyingPrice: 10.9,
      sellingPrice: 30.6,
    },
    {
      countryName: "Pounds",
      buyingPrice: 90.9,
      sellingPrice: 101.6,
    },
    {
      countryName: "Nigeria",
      buyingPrice: 20.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Ghana",
      buyingPrice: 30.9,
      sellingPrice: 25.6,
    },
    {
      countryName: "Cotonu",
      buyingPrice: 10.9,
      sellingPrice: 30.6,
    },
    {
      countryName: "Pounds",
      buyingPrice: 90.9,
      sellingPrice: 101.6,
    },
  ];

  // const NewData = countData.sort()

  return (
    <Stack color={"white"} overflowX={'hidden'}>
      <Table variant="simple">
        <Thead color={"current"}>
          <Tr color={"white"} _hover={{ bg: "green" }}>
            {dataField.map((extractData, index) => (
              <Th color={"white"} fontSize={"xl"} key={index}>
                {extractData}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {countData.map((extractedCountry, index) => (
            <Tr
              _hover={{
                bg: "white",
                fontWeight: "bold",
                color: "green",
                overflowX: "hidden",
              }}
              key={index}
            >
              <Td>{extractedCountry.countryName}</Td>
              <Td>{extractedCountry.buyingPrice}</Td>
              <Td>{extractedCountry.sellingPrice}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default Prices;
