import React from "react";
import Link from "next/link";

export default function ActiveLink({ children, ...props }) {
    let className = children.props.className || "";

    return (
        <Link {...props}>
            {
                React.cloneElement(children, { className })
            }
        </Link>
    )
}