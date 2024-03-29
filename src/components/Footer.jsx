import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" width="full" p={5} textAlign="center" borderTopWidth="1px">
    © {new Date().getFullYear()} Your Company
  </Box>
);

export default Footer;
