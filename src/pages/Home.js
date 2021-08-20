import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Link, Image
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
    return (
        <Container maxW={"5xl"} marginTop="-50px">
            <Stack
                textAlign={"center"}
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                    lineHeight={"110%"}>
                    HADES{" "}
                    <Text as={"span"} color={"primary.400"}>
                        Hellstaurants
                    </Text>
                </Heading>
                
                <Stack spacing={6} direction={"row"}>
                    <Link as={RouterLink} to="/signin" className="router-link">
                        <Button
                            rounded={"full"}
                            px={6}
                            colorScheme={"primary"}
                            bg={"primary.400"}
                            _hover={{ bg: "primary.500" }}>
                            Choose your Poison
                        </Button>
                    </Link>
                </Stack>
                <Flex w={"full"} justify="center">
                    
                    <Image src="https://i.imgur.com/odMPbh1.png" alt="HADES" />
                    
                </Flex>
            </Stack>
        </Container>
    );
};


export default Home;
