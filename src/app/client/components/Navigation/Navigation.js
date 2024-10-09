import React from 'react';
import styled from 'styled-components';
import { menuIetms } from '../../utils/menuItems';
import { signout } from '../../utils/icons';
import avatar from '../../../img/avatar.png'

function Navigation() {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt=''/>
            <div className='text'>
                <h2>Raja</h2>
                <p>Your money</p>
            </div>
        </div>
      <ul className="menu-items">
        {menuIetms.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className='bottom-nav'>
        <li>
            {signout} Sign Out
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radious: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    `;

export default Navigation;
