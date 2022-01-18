import {
    Box,
    Divider,
    LinkBox,
    LinkOverlay,
    List,
    ListIcon,
    ListItem,
} from "@chakra-ui/layout";
import Link from "next/link";
import {
    MdFavorite,
    MdHome,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdSearch,
} from "react-icons/md";
import { usePlaylist } from "../lib/hooks";

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

const MusicMenu = [
    {
        name: "Create Playlist",
        icon: MdPlaylistAdd,
        route: "/",
    },
    {
        name: "Favourites",
        icon: MdFavorite,
        route: "/",
    },
];


const Sidebar = () => {
    // const { playlists } = usePlaylist();
    const playlists = [];
    return (
        <Box
            width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="gray"
        >
            <Box paddingY="20px" height="100%" position="relative">
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
                <Box marginBottom={"20px"} css={{
                    '::-webkit-scrollbar': {
                        width: '20px',
                    },
                }}>
                    <List spacing={2}>
                        {navMenu.map((menuItem, index) => (
                            <ListItem key={index} paddingX="20px" fontSize="16px">
                                <LinkBox>
                                    <Link href={menuItem.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon
                                                as={menuItem.icon}
                                                color="white"
                                                marginRight="20px"
                                            />
                                            {menuItem.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color="gray.800" />
                <Box marginTop="20px">
                    <List spacing={2}>
                        {MusicMenu.map((item) => (
                            <ListItem paddingX="20px" key={item.name} fontSize="16px">
                                <LinkBox>
                                    <Link href={item.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon
                                                as={item.icon}
                                                color="white"
                                                marginRight="20px"
                                            />
                                            {item.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color="gray.800" />
                <Box height="56%" overflowY="auto" paddingY="20px">
                    <List spacing={2}>
                        {playlists && playlists.map((item: any) => <ListItem key={item.id} paddingX="20px">
                            <LinkBox>
                                <Link href={"/"} passHref>
                                    <LinkOverlay>
                                        {item.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>)}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
