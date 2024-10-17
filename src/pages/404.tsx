import { NotFoundContainer, NotFoundDescription, NotFoundLink, NotFoundTitle, NotFoundWrapper } from './404.styled';

export const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle>Not Found</NotFoundTitle>
            <NotFoundWrapper>
                <NotFoundDescription>Осавь надежу всяк сюда входящий... И вернись назад, путник!</NotFoundDescription>
            </NotFoundWrapper>
            <NotFoundLink to='/'>To home</NotFoundLink>
        </NotFoundContainer>
    )
}