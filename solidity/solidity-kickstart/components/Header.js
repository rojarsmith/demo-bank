import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';

export default () => {
    return (
        <AppBar position="static" sx={{ marginTop: '10px' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    CrowdCoin
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button variant="contained" color="secondary" >
                    Campaigns
                </Button>
                <IconButton color="inherit" >
                    <Add />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}