import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

export default function Expenses() {
    return (
        <ExpenseStyled>
            <InnerLayout>Expenses</InnerLayout>
        </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div``;