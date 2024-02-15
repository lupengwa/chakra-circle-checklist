import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Checklist from "./Components/CheckList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Checklist></Checklist>
      </Grid>
    </Box>
  </ChakraProvider>
)
