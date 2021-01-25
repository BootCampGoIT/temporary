import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mainRoutes } from '../routes/mainRoutes';

const Nav = styled.nav`
    ul {
        display: flex;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <ul>
                {mainRoutes.map(({ path, name, exact }) => (
                    <li key={path}>
                        <NavLink
                            exact={exact}
                            to={path}
                            className="link"
                            activeClassName="active-link"
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Nav>
    );
};

export default Navigation;
