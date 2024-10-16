import { HeaderMain, HeaderNavLink, HeaderWrapper } from './Header.styled';

export const Header = () => {
    return (
        <HeaderMain>
            <HeaderWrapper>
                <HeaderNavLink to="/" end>ToDo</HeaderNavLink>
                <HeaderNavLink to="/list">List</HeaderNavLink>
            </HeaderWrapper>
        </HeaderMain>
    )
}