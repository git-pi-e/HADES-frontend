import {  useState, useEffect, useDispatch } from "react";
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
  // let initCart = [];
  // if (JSON.parse(localStorage.getItem("cart")).length) {
  //   initCart = JSON.parse(localStorage.getItem("cart"));
  // }
  const [cart, setCart] = useState([]);
  localStorage.setItem('cart', JSON.stringify(cart));
  // let [token] = useState(false);

  // token = localStorage.getItem("token");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const userID = localStorage.getItem("userID")
  //     ? localStorage.getItem("userID")
  //     : "";
  //   dispatch();
  // }, [dispatch]);
  
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
                </Route> */}

                {/* <Route path="/signup" exact>
                  {token ? <Redirect to="/dashboard" /> : < />}
                </Route> */}

                <Route path="/404" exact>
                  <ErrorPage />
                </Route>
                <Route path="/signin" exact>
                  <SignIn />
                </Route>
                <Route path="/signup" exact>
                  <SignUp />
                </Route>
                <Route path="/restaurants" exact >
                  <Restaurants setCart={setCart}/>
                </Route>
                <Route path="/orders" exact >
                  <Orders cart={cart}/>
                </Route>
                <Route path="/">
                  <Redirect to="404" />
                </Route>
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
