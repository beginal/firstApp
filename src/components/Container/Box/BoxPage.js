import React from 'react'
import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 1.5rem;
  color: ${props => props.color || "black"};
  font-size: 2rem;
  font-weight: 600;
  div {
    border-bottom: 3px solid ${props => props.color || "black"};
  }
`
const P = styled.p`
  color: ${props => props.color || "black"};
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  * {
  flex-wrap: wrap;
  }
`

export const LandingPage = () => {
  return (
    <TextBox>
      <Title>LandingPage</Title>
      <img src="http://localhost:3000/LandingPage.jpg" alt=""/>
      <P>12345</P>

    </TextBox>
  )
}

export const PortFolio = () => {
  return (
    <TextBox>
      <Title>PortFolio</Title>
      <P>12345</P>

    </TextBox>
  )
}