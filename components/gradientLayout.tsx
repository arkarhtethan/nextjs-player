import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

interface IGradientLayoutProps {
    color: any;
    children?: any;
    image?: any;
    subtitle?: any;
    title?: any;
    description?: any;
    roundedImage?: any;
}

const GradientLayout = ({
    color,
    children,
    image,
    subtitle,
    title,
    description,
    roundedImage,
}: IGradientLayoutProps) => {
    return (
        <Box
            height="100%"
            overflowY="auto"
            bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
        >
            <Flex bg={`${color}.600`} padding="40px" align="end">
                <Box padding="20px">
                    <Image
                        src=""
                        alt=""
                        boxSize="160px"
                        boxShadow="2xl"
                        borderRadius={roundedImage ? '100%' : '3px'}
                    />
                </Box>
                <Box padding="20px" lineHeight="40px" color="white">
                    <Text fontSize="sm" fontWeight="bold" casing="uppercase">
                        {subtitle}
                    </Text>
                    <Text fontSize="6xl">
                        {title}
                    </Text>
                    <Text fontSize="sm">
                        {description}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default GradientLayout;
