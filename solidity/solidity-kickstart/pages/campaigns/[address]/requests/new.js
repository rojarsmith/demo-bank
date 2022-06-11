import { useState } from "react";
import NextLink from 'next/link'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import compaign from "../../../../ethereum/compaign";
import web3 from "../../../../ethereum/web3";

export default function RequestNew({ address }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [recipient, setRecipient] = useState('');

    return (
        <Box component="form">
            <TextField
                required
                label="Description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <TextField
                required
                label="Value in Ether"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <TextField
                required
                label="Recipient"
                value={recipient}
                onChange={event => setRecipient(event.target.value)}
            />
            <LoadingButton
                type="submit"
                // loading={loading}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Create!
            </LoadingButton>
        </Box>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for address
    const paths = [];

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    console.log(params);

    return {
        props: {
            address: params.address,
        }
    }
}