import { Box, LinkBox, LinkOverlay, List, ListIcon, ListItem } from "@chakra-ui/layout";
import Link from "next/link";
import { MdHome, MdLibraryMusic, MdSearch } from "react-icons/md";

const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        route: "/",
    },
    {
        name: "Search",
        icon: MdSearch,
        route: "/search",
    },
    {
        name: "Your Library",
        icon: MdLibraryMusic,
        route: "/library",
    },
];

const Sidebar = () => {
    return (
        <Box
            width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="gray"
        >
            <Box paddingY="20px">
                <Box
                    width="220px"
                    marginBottom="20px"
                    paddingX="20px"
                    fontSize="30px"
                    color="white"
                    fontWeight="bold"
                >
                    KM Player
                </Box>
                <Box marginBottom={"20px"}>
                    <List spacing={2}>
                        {navMenu.map((menuItem, index) => (
                            <ListItem key={index} paddingX="20px" fontSize="16px">
                                <LinkBox>
                                    <Link href={menuItem.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menuItem.icon} color="white" marginRight="20px" />
                                            {menuItem.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
