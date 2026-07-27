import React from "react";
import useSiteTitle from "../hook/useTitle";

export default function Header() {
    const { title } = useSiteTitle()
    return (
        <header>
            <h1>
                {title}
            </h1>
        </header>
    )
}