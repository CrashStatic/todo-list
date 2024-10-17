import { useDispatch } from 'react-redux';
import { HeaderMain, HeaderNavLink, HeaderToggle, HeaderWrapper } from './Header.styled';
import { toggleThemeAction } from '../../feature/themeList';

export const Header = () => {
    const dispatch = useDispatch();

    return (
        <HeaderMain>
            <HeaderWrapper>
                <HeaderNavLink to='/' end>ToDo</HeaderNavLink>
                <HeaderNavLink to='/list'>List</HeaderNavLink>
            </HeaderWrapper>
            <HeaderToggle onClick={() => dispatch(toggleThemeAction())}>Сменить тему</HeaderToggle>
        </HeaderMain>
    )
}