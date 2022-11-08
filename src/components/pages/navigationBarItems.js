import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
background: white;
display: flex;
justify-content: flex-end;
padding-right: 20px;
`;

export const NavigationLink = styled(Link)`
color: blue;
display: flex;
padding: 0 1rem;
height: auto;
cursor: pointer;
`;

export const Bars = styled(FaBars)`
display: none;
color: Black;
@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 75%);
font-size: 3rem;
cursor: pointer;
}
`;

export const NavigationItem = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 768px) {
    display: none;
}
`;
