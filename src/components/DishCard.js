import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    WrapItem,
    useToast
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

function DishCard({ rName, dName, dPrice, dImgUrl, setCart, _id }) {
    const cart = [];
    const toast = useToast()
    const addToCart = () => {
        const dish = {
            rName,
            dName,
            dPrice,
            dImgUrl           
        }
        console.log('We are in addToCart()');
        setCart((prevCart) => [...prevCart, dish]);
        cart.push(dish);
        toast({
            title: "Added to Cart",
            description: "You can view your orders",
            variant: "left-accent",
            status: "success",
            duration: 2000,
            isClosable: true,
        })
    };
    
    return (
        <WrapItem>
        <Flex p={50} w="full" alignItems="center" justifyContent="center" maxW="400px">
            <Box
                bg={useColorModeValue('white', 'primary.900')}
                maxW="sm"
                borderWidth="2px"
                rounded="lg"
                shadow="lg"
                position="relative">
                
                <Image
                    src={dImgUrl}
                    alt={`Picture of ${dName}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {dName}
                        </Box>
                       
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                                <chakra.a onClick={() => addToCart()} display={'flex'}>
                                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="xl"
                            fontWeight="normal"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {rName}
                        </Box>
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                ₹
                            </Box>
                            {dPrice}
                        </Box>
                        
                    </Flex>
                </Box>
            </Box>
        </Flex>
        </WrapItem>
    );
}

export default DishCard;