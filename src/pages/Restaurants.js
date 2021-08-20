import React from 'react';
import { Wrap, Text, Box, useMediaQuery, } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import DishCard from 'components/DishCard';
import axios from 'axios';

const Restaurants = ({ setCart }) => {
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [isSmallerScreen] = useMediaQuery("(max-width:550px)");
    useEffect( () => {
        axios.get('http://localhost:5000/dishes/').then((res) => {
            console.log('pre-setData thingy ', res.data);
            setDishes(res.data);
            setLoading(false);
            console.log('data state: ', dishes);
        }).catch(err => console.log(err));
        // eslint-disable-next-line
    }, []);
    let rest1 = dishes.filter(dish => dish.rName === 'Jekyll n Hyde');
    let rest2 = dishes.filter(dish => dish.rName === 'Devil Island');
    let rest3 = dishes.filter(dish => dish.rName === 'Rattlesnake');
    console.log('data state outside useEffect: ', dishes);
    
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
            <Wrap direction={isSmallerScreen ? "column" : "row"} justify="center">
                {(!loading) && rest1.map(e => {
                    return <DishCard rName={ e.rName} dName={e.dName} dImgUrl={e.dImgUrl} dPrice={e.dPrice} key={e._id} setCart={setCart}/>
                })}
        </Wrap>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
			>
				Devil Island
			</Text>
            <Wrap direction={isSmallerScreen ? "column" : "row"} justify="center">
                {(!loading) && rest2.map(e => {
                    return <DishCard rName={e.rName} dName={e.dName} dImgUrl={e.dImgUrl} dPrice={e.dPrice} key={e._id} setCart={setCart} />
                })}
        </Wrap>
            <Text
				as="h2"
				fontSize="35px"
				marginTop="120px"
				marginBottom="70px"
			>
				Rattlesnake
			</Text>
            <Wrap direction={isSmallerScreen ? "column" : "row"} justify="center">
                {(!loading) && rest3.map(e => {
                    return <DishCard rName={e.rName} dName={e.dName} dImgUrl={e.dImgUrl} dPrice={e.dPrice} key={e._id} setCart={setCart} />
                })}
        </Wrap>
        </Box>
    )
}

export default Restaurants
