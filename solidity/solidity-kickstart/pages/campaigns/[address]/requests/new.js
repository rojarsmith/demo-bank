import { useState } from "react";
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import compaign from "../../../../ethereum/compaign";
import web3 from "../../../../ethereum/web3";
import Layout from "../../../../components/Layout";
import Campaign from "../../../../ethereum/compaign";

export default function RequestNew({ address }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [recipient, setRecipient] = useState('');
    const [errormessage, setErrormessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    console.log('RequestNew=' + address);

    const onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(address);

        setLoading(true);
        setErrormessage('');

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(
                    description,
                    web3.utils.toWei(value, 'ether'),
                    recipient
                )
                .send({
                    from: accounts[0]
                });

            router.push(`/campaigns/${address}/requests`);
        } catch (err) {
            setErrormessage(err.message);
        }

        setLoading(false);
    };

    return (
        <Layout>
            <NextLink href={`/campaigns/${address}/requests`} passHref>
                Back
            </NextLink>
            <br />
            Create a Request
            <Box component="form" onSubmit={onSubmit}>
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
                <Collapse in={!!errormessage}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errormessage}
                    </Alert>
                </Collapse>
                <LoadingButton
                    type="submit"
                    loading={loading}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Create!
                </LoadingButton>
            </Box>
        </Layout>
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