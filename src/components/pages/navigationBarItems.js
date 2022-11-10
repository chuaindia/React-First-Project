import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
background: white;
height: 85px;
display: flex;
justify-content: flex-end;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 10;
`;

export const NavigationLink = styled(Link)`
color: blue;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: blue
}
`;

export const Bars = styled(FaBars)`
color: Black;
@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 75%);
font-size: 1.8rem;
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
