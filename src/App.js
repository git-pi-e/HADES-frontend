import { useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import customTheme from "utils/customTheme";

import Navbar from "components/Navbar";
import Home from "pages/Home";
import ErrorPage from "pages/ErrorPage";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Restaurants from "pages/Restaurants";
import Orders from "pages/Orders";


function App() {
  // const [cart, setCart] = useState([]);
  // localStorage.setItem('cart', JSON.stringify(cart));
  let [token] = useState(false);
  token = localStorage.getItem("token");

  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <div className="top-bar">
          <Navbar />
          <ColorModeSwitcher justifySelf="flex-end" className="colorMode-button" />
        </div>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/orders">
                  {token ? <Orders /> : <Redirect to="/signin" />}
                </Route>
                <Route path="/restaurants" exact>
                  {token ? <Restaurants /> : <Redirect to="/signin" />}
                </Route>
                <Route path="/404" exact>
                  <ErrorPage />
                </Route>
                <Route path="/signin" exact>
                  <SignIn />
                </Route>
                <Route path="/signup" exact>
                  <SignUp />
                </Route>
                <Route path="/">
                  <Redirect to="404" />
                </Route>
              </Switch>
            </VStack>
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
