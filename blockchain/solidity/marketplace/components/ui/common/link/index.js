import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"

export default function ActiveLink({ children, activeLinkClass, ...props }) {
    const { pathname } = useRouter()
    let className = children.props.className || "";

    if (pathname === props.href) {
        // Hard code fix color bug
        // .replace('text-gray-500 ', ' ')
        className = `${className} ${activeLinkClass ? activeLinkClass : "text-indigo-600"}`.replace('text-gray-500 ', ' ');
    }

    return (
        <Link {...props}>
            {
                React.cloneElement(children, { className })
            }
        </Link>
    )
}