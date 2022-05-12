import React from "react";
import styled from "@emotion/styled";

const Header = styled.div`
background-color:blue;
color:red;
`

export default function item1({ children }) {
    return (
        <Header>
            <h2>Item1</h2>
        </Header>
    )
}