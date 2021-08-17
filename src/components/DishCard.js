import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    WrapItem,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

function DishCard({ rName, dName, dPrice, dImageURL }) {
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
                    src={dImageURL}
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
                            <chakra.a href={'#'} display={'flex'}>
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