import { useState } from 'react';
import axios from 'axios';
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, useColorModeValue, useToast } from '@chakra-ui/react';

const SignUp = () => {
    const toast = useToast();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        let user = { name, email, password };
        axios.post('https://hades-backend.herokuapp.com/user/signup', user).then(res => {
            console.log(res);
            toast({
                title: "Sign up ",
                description: "Go to sign in tab to log in",
                variant: "left-accent",
                status: "success",
                duration: 2000,
                isClosable: true,
            })
        }).catch(err => {
            console.log('Error submitting signup request', err);
        })
    };
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="name">
                            <FormLabel >Name</FormLabel>
                            <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" email="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" password="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            {/* <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack> */}
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={(e) => onSubmit(e)}
                            >
                                Sign up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default SignUp