
import {Box,Toolbar,AppBar,styled} from '@mui/material'
import codeLogo from './codesavvy.png';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`;

const Header = () => {
   return (
        <Box sx={{ flexGrow: 1 }}>
        <Container position="static">
        <Toolbar>
        <img src={codeLogo} alt="logo" style={{width:40}} />
        </Toolbar>
        </Container>
        </Box>
    );
};

export default Header