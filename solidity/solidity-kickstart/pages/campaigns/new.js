import Layout from "../../components/Layout";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CampaignNew() {
    return (
        <Layout>
            <Typography
                variant="h3"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Create a Campaign
            </Typography>
            <Box component="form">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Minimum Contribution
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="coin"
                    label="coin"
                    name="coin"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                   Create!
                </Button>
            </Box>
        </Layout>
    );
}