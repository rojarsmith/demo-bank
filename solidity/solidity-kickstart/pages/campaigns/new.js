import { useState } from "react";
import Layout from "../../components/Layout";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3'


export default function CampaignNew() {
    const [minimumcontribution, setMinimumcontribution] = useState('');
    const [errormessage, setErrormessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(minimumcontribution)
                .send({
                    from: accounts[0]
                });
        } catch (err) {
            setErrormessage(err.message);
        }
    };

    return (
        <Layout>
            <Typography
                variant="h3"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Create a Campaign
            </Typography>
            <Box component="form" onSubmit={onSubmit}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="coin"
                    label="Minimum Contribution"
                    name="coin"
                    autoFocus
                    InputProps={{
                        endAdornment: <InputAdornment position="start">wei</InputAdornment>,
                    }}
                    value={minimumcontribution}
                    onChange={event => setMinimumcontribution(event.target.value)}
                />
                <Collapse in={!!errormessage}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errormessage}
                    </Alert>
                </Collapse>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Create!
                </Button>
            </Box>
        </Layout>
    );
}