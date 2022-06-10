import { useRouter } from 'next/router';

export default function show() {
    return (
        <>show</>
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
    // Fetch necessary data for the blog post using params.id
    const postData = params.address;

    return {
        props: {
            postData
        }
    }
}