import React from 'react';

import {
    Text, Box, VStack, Stat,
    StatLabel,
    StatNumber,
    StatHelpText, Button} from "@chakra-ui/react";


const Orders = (props) => {
    // const { cart } = props;
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log('Here are all the cart items: ', cart);
    const removeFromCart = (dish) => { cart.remove(dish); }
    
    return (
        <Box>
            <Text
                as="h2"
                fontSize="35px"
                marginTop="120px"
                marginBottom="70px"
            >
                Orders
            </Text>
            {cart.length === 0 && <Text
                as="h3"
                fontSize="28px"
                marginTop="120px"
                marginBottom="70px"
            >
                Cart is empty...
            </Text>}
            <VStack>
                {cart.length > 0 &&
                    cart.map((dish) => (
                        <Stat borderWidth="1px" px="20px" py="10px">
                            <StatLabel fontSize="23px">{dish.dName}</StatLabel>
                            <StatNumber fontSize="25px">₹{ dish.dPrice}</StatNumber>
                            <StatHelpText fontSize="20px">{ dish.rName}</StatHelpText>
                            <Button
                                size="sm"
                                rounded="md"
                                color={["primary.500", "primary.500", "white", "white"]}
                                bg={["white", "white", "primary.500", "primary.500"]}
                                _hover={{
                                    bg: [
                                        "primary.100",
                                        "primary.100",
                                        "primary.600",
                                        "primary.600",
                                    ],
                                }}
                                onClick={() => removeFromCart(dish)}
                            >
                                Remove
                            </Button>
                        </Stat>
                    ))
                }
            </VStack>
            {/* {cart.length > 0 &&
                <Button onClick={() => localStorage.setItem(cart) }>
                    Order
                </Button>
            } */}
        </Box>
    )
}

export default Orders
