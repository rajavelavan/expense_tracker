import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

export default function Dashboard() {
  return (
    <DashboardStyled><InnerLayout>Dashboard</InnerLayout></DashboardStyled>
  )
}

const DashboardStyled = styled.div``;