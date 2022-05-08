import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

const API_URL = 'https://extreme-ip-lookup.com/json/'

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export default function Index() {
    const { data, error } = useSWR(API_URL, fetcher);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const { query } = data;

    console.log(data)

    return (
        <div>
            <p>IP: {query} </p>
        </div>
    )
}