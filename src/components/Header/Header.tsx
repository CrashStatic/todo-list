import { HeaderMain, HeaderNavLink, HeaderWrapper } from './Header.styled';

export const Header = () => {
    // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    //     return isActive ? "page" : "";
    // }

    return (
        <HeaderMain>
            <HeaderWrapper>
                <HeaderNavLink to="/">ToDo</HeaderNavLink>
                <HeaderNavLink to="/list" aria-current="page">List</HeaderNavLink>
            </HeaderWrapper>
        </HeaderMain>
    )
}

// aria-current={getActiveClass}
// aria-current="page"