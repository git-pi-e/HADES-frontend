import React from 'react';
import { Wrap, Text, Box, useMediaQuery, } from "@chakra-ui/react";

import DishCard from 'components/DishCard';

const Restaurants = () => {
    const [isSmallerScreen] = useMediaQuery("(max-width:550px)");
    return (
        <Box>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
				className="about-stonkr">
				Jekyll n Hyde
			</Text>
        <Wrap direction={isSmallerScreen ? "column" : "row"}>
                <DishCard rName="Jekyll n Hyde" dName="Pizza" dImageURL="https://i.imgur.com/vTt7Mhm.jpg" dPrice={80}/>
                <DishCard rName="Jekyll n Hyde" dName="Pasta" dImageURL="https://i.imgur.com/XD1cUw9.jpg" dPrice={70}/>
                <DishCard rName="Jekyll n Hyde" dName="Burger" dImageURL="https://i.imgur.com/EBanwX4.jpg" dPrice={50}/>
                <DishCard rName="Jekyll n Hyde" dName="Beverages" dImageURL="https://i.imgur.com/hstOxB6.jpg" dPrice={40}/>
        </Wrap>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
				className="about-stonkr">
				Devil Island
			</Text>
        <Wrap direction={isSmallerScreen ? "column" : "row"}>
                <DishCard rName="Devil Island" dName="Pizza" dImageURL="https://i.imgur.com/vTt7Mhm.jpg" dPrice={80}/>
                <DishCard rName="Devil Island" dName="Pasta" dImageURL="https://i.imgur.com/XD1cUw9.jpg" dPrice={70}/>
                <DishCard rName="Devil Island" dName="Burger" dImageURL="https://i.imgur.com/EBanwX4.jpg" dPrice={50}/>
                <DishCard rName="Devil Island" dName="Beverages" dImageURL="https://i.imgur.com/hstOxB6.jpg" dPrice={40}/>
        </Wrap>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
				className="about-stonkr">
				Rattlesnake
			</Text>
        <Wrap direction={isSmallerScreen ? "column" : "row"}>
                <DishCard rName="Rattlesnake" dName="Pizza" dImageURL="https://i.imgur.com/vTt7Mhm.jpg" dPrice={80}/>
                <DishCard rName="Rattlesnake" dName="Pasta" dImageURL="https://i.imgur.com/XD1cUw9.jpg" dPrice={70}/>
                <DishCard rName="Rattlesnake" dName="Burger" dImageURL="https://i.imgur.com/EBanwX4.jpgg" dPrice={50}/>
                <DishCard rName="Rattlesnake" dName="Beverages" dImageURL="https://i.imgur.com/hstOxB6.jpg" dPrice={40}/>
        </Wrap>
        </Box>
    )
}

export default Restaurants
