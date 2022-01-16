import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar'

const PlayerLayout = ({ children }: { children: any }) => {
    return (
        <Box width='100%' height="100vh">
            <Box position="absolute" top="0" width="250px" left="0">
                <Sidebar />
            </Box>
            <Box marginLeft="250px" marginBottom="100px">
                {children}
            </Box>
            <Box position="absolute" left="0" bottom="0">
                player
            </Box>
        </Box>
    )
}

export default PlayerLayout
