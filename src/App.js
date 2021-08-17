import { useEffect, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import ErrorPage from "pages/ErrorPage";
import customTheme from "utils/customTheme";

import Navbar from "components/Navbar";
import Home from "pages/Home";
import ErrorPage from "pages/ErrorPage"
import SignIn from "pages/SignIn"
import Restaurants from "pages/Restaurants"


function App() {
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
                {/* <Route exact path="/dashboard">
                  {token ? <Dashboard /> : <Redirect to="/signin" />}
                </Route>
                <Route exact path="/calculator">
                  {token ? <Calculator /> : <Redirect to="/signin" />}
                </Route>
                <Route exact path="/quote">
                  {token ? <Quote /> : <Redirect to="/signin" />}
                </Route>
                <Route exact path="/stocks/:symbol">
                  {token ? <Stock /> : <Redirect to="/signin" />}
                </Route>
                <Route path="/signin" exact>
                  {token ? <Redirect to="/dashboard" /> : <SawoLogin />}
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/leaderboard" exact>
                  <Leaderboard />
                </Route> */}
                <Route path="/404" exact>
                  <ErrorPage />
                </Route>
                <Route path="/signin" exact>
                  <SignIn />
                </Route>
                <Route path="/restaurants" exact>
                  <Restaurants />
                </Route>
                {/* <Route path="/">
                  <Redirect to="404" />
                </Route> */}
              </Switch>
            </VStack>
          </Grid>
        </Box>
        {/* <Footer /> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
