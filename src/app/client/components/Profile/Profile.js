import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

export default function Profile() {
  return (
    <ProfileStyled>
      <InnerLayout>Profile</InnerLayout>
    </ProfileStyled>
  )
}

export const ProfileStyled = styled.div``;
