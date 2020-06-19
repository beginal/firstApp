import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import { LandingPage, PortFolio } from './BoxPage';
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

const WhiteBox = styled.div`
  background: white;
  width: 250px;
`
const BoxList = styled.div`
    img {
      width:24px;
      height:24px;
      margin: 0 6px;
    }
    text-align:left;
    padding: 3px 0;
    color: black;
    margin: 3px 4px;
    & + & {
      border-top: 1px solid #333333

    }`

const GridBox = styled.div`
  display: flex;
  justify-content:center;
  overflow: auto;
  flex-wrap: wrap;
  width: 100vw;
  height: 500px;
  padding-bottom: 1rem;
`

const InnerBox = styled.div`
    width: 170px;
    height: 230px;
    margin: 5px;
    background: ${props => props.background || "none"};
    border: 2px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: border .3s;
    span {
      font-size: 1.3rem;
  }
  &:hover {
    border: 2px solid #dddddd;
    overflow: 1;
  }
  `

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Box1 = () => {
  return (
    <TextBox>
      <Title><div>SKILL</div></Title>
      <P>누르면 바뀌는 내용</P>
      <WhiteBox>
        <BoxList><img src="http://placehold.it/24x24" alt=""/>
        <span>HTML / CSS </span>
        </BoxList>
        <BoxList><img src="http://placehold.it/24x24" alt=""/><span>JavaScript</span></BoxList>
        <BoxList><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt=""/><span>React</span></BoxList>
        <BoxList><img src="http://placehold.it/24x24" alt=""/><span>Node</span></BoxList>
        <BoxList><img src="http://placehold.it/24x24" alt=""/><span>Git</span></BoxList>
      </WhiteBox>
    </TextBox>
  )
}

export const Box2 = () => {

  return (
    <TextBox>
      <Title color="white"><div>PortFolio</div></Title>
      <P color="white">내용내용</P>
    </TextBox>
  )
}


export const Box3 = () => {
  return (
    <TextBox>
      <Title><div>초록색 타이틀</div></Title>
      <P>~~~~~~~~</P>
    </TextBox>
  )
}