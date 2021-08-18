import React from 'react';
import { Wrap, Text, Box, useMediaQuery, } from "@chakra-ui/react";

import DishCard from 'components/DishCard';

const Restaurants = ({setCart}) => {
    const [isSmallerScreen] = useMediaQuery("(max-width:550px)");

   
    return (
        <Box>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
			>
				Jekyll n Hyde
			</Text>
        <Wrap direction={isSmallerScreen ? "column" : "row"}>
                <DishCard rName="Jekyll n Hyde" dName="Pizza" dImageURL="https://i.imgur.com/vTt7Mhm.jpg" dPrice={80} setCart={setCart}/>
                <DishCard rName="Jekyll n Hyde" dName="Pasta" dImageURL="https://i.imgur.com/XD1cUw9.jpg" dPrice={70} setCart={setCart}/>
                <DishCard rName="Jekyll n Hyde" dName="Burger" dImageURL="https://i.imgur.com/EBanwX4.jpg" dPrice={50} setCart={setCart}/>
                <DishCard rName="Jekyll n Hyde" dName="Beverages" dImageURL="https://i.imgur.com/hstOxB6.jpg" dPrice={40} setCart={setCart}/>
        </Wrap>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
			>
				Devil Island
			</Text>
        <Wrap direction={isSmallerScreen ? "column" : "row"}>
                <DishCard rName="Devil Island" dName="Pizza" dImageURL="https://i.imgur.com/vTt7Mhm.jpg" dPrice={80} setCart={setCart}/>
                <DishCard rName="Devil Island" dName="Pasta" dImageURL="https://i.imgur.com/XD1cUw9.jpg" dPrice={70} setCart={setCart}/>
                <DishCard rName="Devil Island" dName="Burger" dImageURL="https://i.imgur.com/EBanwX4.jpg" dPrice={50} setCart={setCart}/>
                <DishCard rName="Devil Island" dName="Beverages" dImageURL="https://i.imgur.com/hstOxB6.jpg" dPrice={40} setCart={setCart}/>
        </Wrap>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
			>
				Rattlesnake
			</Text>
        <Wrap direction={isSmallerScreen ? "column" : "row"}>
                <DishCard rName="Rattlesnake" dName="Pizza" dImageURL="https://i.imgur.com/vTt7Mhm.jpg" dPrice={80} setCart={setCart}/>
                <DishCard rName="Rattlesnake" dName="Pasta" dImageURL="https://i.imgur.com/XD1cUw9.jpg" dPrice={70} setCart={setCart}/>
                <DishCard rName="Rattlesnake" dName="Burger" dImageURL="https://i.imgur.com/EBanwX4.jpgg" dPrice={50} setCart={setCart}/>
                <DishCard rName="Rattlesnake" dName="Beverages" dImageURL="https://i.imgur.com/hstOxB6.jpg" dPrice={40} setCart={setCart}/>
        </Wrap>
        </Box>
    )
}

export default Restaurants
