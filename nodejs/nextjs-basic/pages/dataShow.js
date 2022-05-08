import { getSortedPostsData } from "../lib/posts";

export default function dataShow({ allPostsData }) {
    return (
        <div>
            {
                allPostsData.map(({ id, title, date }) =>
                (
                    <p>
                        {id}<br />
                        {title}<br />
                        {date}<br />
                    </p>
                ))
            }
        </div>
    )
}

// Import data when building
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}