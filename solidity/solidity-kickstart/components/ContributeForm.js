import { useState } from "react";
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import web3 from "../ethereum/web3";
import Campaign from '../ethereum/compaign';

export default function ContributeForm({ address }) {
    const [value, setValue] = useState('');
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(address);

        // setLoading(true);
        // setErrormessage('');

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .contribute()
                .send({
                    from: accounts[0],
                    value: web3.utils.toWei(value, 'ether')
                });

            router.replace(`/campaigns/${address}`);
        } catch (err) {
            // setErrormessage(err.message);
        }

        // setLoading(false);
    };

    return (
        <>
            <Typography
                variant="h5"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Contrubute
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
                    label="Amount to Contrubute"
                    name="coin"
                    autoFocus
                    InputProps={{
                        endAdornment: <InputAdornment position="start">wei</InputAdornment>,
                    }}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                {/* <Collapse in={!!errormessage}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errormessage}
                    </Alert>
                </Collapse> */}
                <LoadingButton
                    type="submit"
                    // loading={loading}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Contribute!
                </LoadingButton>
            </Box>
        </>
    );
}