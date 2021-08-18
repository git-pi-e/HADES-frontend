import React from 'react'
import { Text, Box, Stack, } from "@chakra-ui/react";


const Orders = (props) => {
    const { cart } = props;
    console.log(cart);

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
            <Stack>
                {cart.length > 0 &&
                    cart.map((dish) => (
                        <Box>
                            <Text
                                as="h2"
                                fontSize="35px"
                                marginTop="120px"
                                marginBottom="70px"
                            >
                                {dish.dName}
                            </Text>
                            <Text
                                as="h4"
                                fontSize="28px"
                                marginTop="120px"
                                marginBottom="70px"
                            >
                                {dish.rName}
                            </Text>
                            <Text
                                as="h3"
                                fontSize="32px"
                                marginTop="120px"
                                marginBottom="70px"
                            >
                                {dish.dPrice}
                            </Text>
                            
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Orders
