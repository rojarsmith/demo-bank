import NextLink from 'next/link'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Layout from "../../../components/Layout";
import Typography from '@mui/material/Typography';
import Campaign from '../../../ethereum/compaign';
import RequestRow from '../../../components/RequestRow';
import { Grid } from '@mui/material';

export default function RequestIndex(props) {
    const renderRow = () => {
        // console.log(props);
        if (!props.requests) return <></>;

        return props.requests.map((request, index) => {
            console.log(request);
            console.log(index);

            return <RequestRow
                key={index}
                id={index}
                request={request}
                address={props.address}
                approversCount={props.approversCount}
            />
        });
    }

    return (
        <Layout>
            <Grid container justifyContent="flex-end">
                <Typography sx={{ variant: 'h2', fontWeight: 600, flex: 1 }} >
                    Requests
                </Typography>
                <NextLink href={`/campaigns/${props.address}/requests/new`} passHref>
                    <Button sx={{ marginBottom: 1 }}>
                        Add Request
                    </Button>
                </NextLink>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                ID
                            </TableCell>
                            <TableCell>
                                Description
                            </TableCell>
                            <TableCell>
                                Amout
                            </TableCell>
                            <TableCell>
                                Recipient
                            </TableCell>
                            <TableCell>
                                Approval Count
                            </TableCell>
                            <TableCell>
                                Approve
                            </TableCell>
                            <TableCell>
                                Finalize
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderRow()}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>Found {props.requestCount} requests</div>
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

    const campaign = Campaign(params.address);
    const requestCount = await campaign.methods.numRequests().call();
    const approversCount = await campaign.methods.approversCount().call();
    console.log(requestCount);

    const requests = await Promise.all(
        Array(parseInt(requestCount)).fill().map((element, index) => {
            return campaign.methods.requests(index).call();
        })
    );

    // console.log(requests);

    return {
        props: {
            address: params.address,
            requests: JSON.parse(JSON.stringify(requests)),
            requestCount: requestCount,
            approversCount: approversCount,
        }
    }
}