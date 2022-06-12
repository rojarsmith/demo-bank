import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';

export default () => {
    const router = useRouter();

    return (
        <AppBar position="static" sx={{ marginTop: '20px' }}>
            <Toolbar>
                <Button variant="text" sx={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
                    <NextLink href='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <a>CrowdCoin</a>
                        </Typography>
                    </NextLink>
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <NextLink href='/' passHref>
                    <Button variant="outlined" color="inherit" sx={{ color: '#FFFFFF', borderColor: '#FFFFFF' }} >
                        Campaigns
                    </Button>
                </NextLink>
                <IconButton color="inherit" sx={{ marginLeft: '20px' }}>
                    <NextLink href='/campaigns/new'>
                        <Add />
                    </NextLink>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}