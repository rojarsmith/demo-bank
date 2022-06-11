import NextLink from 'next/link'
import Button from '@mui/material/Button';
import Layout from "../../../components/Layout";
import Typography from '@mui/material/Typography';

export default function RequestIndex(props) {
    return (
        <Layout>
            <Typography sx={{ variant: 'h2', fontWeight: 600 }} >
                Requests
            </Typography>
            <NextLink href={`/campaigns/${props.address}/requests/new`} passHref>
                <Button>
                    Add Request
                </Button>
            </NextLink>
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