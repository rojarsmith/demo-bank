import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Header = styled.div`
background-color:blue;
color:red;
`

const fontSize = css`
font-size:50px
`

export default function item1({ children }) {
    return (
        <Header>
            <h2 css={fontSize}>Item1</h2>
        </Header>
    )
}