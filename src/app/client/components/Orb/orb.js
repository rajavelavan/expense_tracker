import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

export default function Orb() {

  const {width, height} = useWindowSize();

  const moveOrb = keyframes`
    0%{
        transform: translate(0, 0);
      }
      50%{
        transform: translate(${width/1.2}px, ${height/2}px);
      }
      100%{
        transform: translate(0,0);
      }`;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    margin-left: -37vh;
    margin-top: -37vh;
    border-radius: 50%;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);  
    filter: blur(100px);
    animation: ${moveOrb} 15s alternate linear infinite;
  `;

  return <OrbStyled></OrbStyled>;
}
