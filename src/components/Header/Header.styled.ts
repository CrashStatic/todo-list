import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderMain = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    transparent: background-color 0.2s;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    display: flex;
    align-items: center;
`
export const HeaderWrapper = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeaderNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #ffffff33;

    &.active {
    color: #fff;
    }
`

export const HeaderToggle = styled.button`
    position: absolute;
    top: -50%px;
    right: 30px;
    transform: translateY(50%);
    background-color: #ec8ddf;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`