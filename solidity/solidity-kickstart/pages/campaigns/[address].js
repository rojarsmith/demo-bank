import { useRouter } from 'next/router';
import Layout
    from '../../components/Layout';
import Campaign from '../../ethereum/compaign';

export default function show() {
    return (
        <Layout>show</Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = [];

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    console.log(params);
    // Fetch necessary data
    const campaign = Campaign(params.address);

    const summary = await campaign.methods.getSummary().call();

    console.log(summary);

    // const postData = summary;

    return {
        props: {
            postData: {
                ...summary
            }
        }
    }
}