import styled from "styled-components";
import { Link } from "react-router-dom"
// import { GlobalStyle } from "../styles/GlobalStyle";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const NotFoundTitle = styled.h1``

export const NotFoundWrapper = styled.div``

export const NotFoundDescription = styled.p`
    font-size: 36px;
    line-height: 42px;
    margin: 0 0 40px;
    color: #8d66da;
    flex-direction: column;
    align-items: center;
`
export const NotFoundLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
`