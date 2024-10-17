import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListItemLink = styled(Link)<{data: string}>`
    text-decoration: none;
    padding: 10px;
    color: ${(props) => props.data === 'notDone' ? 'red' : 'green'}
`