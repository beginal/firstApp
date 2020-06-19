import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Box1, Box2, Box3 } from './Box/BoxList';

const Component = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 2rem 0;
  height: 600px;
  transform: skewY(-5deg);
  background: ${props => props.background || "#4f2ddf"};
  transition: background 0.3s;
  position: relative;
`
const PostBox = styled.div`
  width:100%;
  height: 500px;
  border-radius: 2px;
  background: ${props => props.background};
  text-align:center;
  margin: 0 3rem;
  transform: skewY(5deg);
  transition: background 0.3s;
  @media (max-width: 700px) {
    margin: 1rem;
  }
    .Buttons {
      position: absolute;
      display: flex;
      top: 1rem;
      left: 9rem;
      transform: skewY(-5deg);
      flex-direction: column;
      transition: top 1s, left 1s; 
      @media (max-width: 700px) {
        top: -1.6rem;
        left: 2rem;
      }
      @media (max-width: 425px) {
        top: -1.3rem;
        left: 2rem;
      }
    }
    .InText {
      padding: 20px;
      overflow:hidden;
    }
`
const Button = styled.button`
  background: ${props => props.background || "white"};
  opacity: 0.5;
  color: white;
  width: 70px;
  outline:none;
  border: none;
  text-align:left;
  border-radius: 2px 0 0 5px;
  margin: 2px;
    &:hover {
      cursor:pointer;
      opacity: 1;
    }
    &:focus {
      z-index: 1;
      opacity: 1;
    }
    & + & {
      margin-top: 5px;
    }
`
const PostBoxs = () => {
  const [boxStyle, setBoxStyle] = useState("#4f2ddf");

  useEffect(() => {
    console.log(boxStyle)
  }, [boxStyle])

  const onChangeBox = (e) => {
    setBoxStyle(e.target.name)
  }
  
  const BoxRender = () => {
    switch(boxStyle) {
      case "red" : return <Box1 />;
      case "#4f2ddf" : return <Box2 />;
      case "green" : return <Box3 />;
      default: return <Box1 />;
    }
  }

  return (
    <Component background={boxStyle}>
      <PostBox>
        <div className="InText">
        <div className="Buttons">
          <Button background="#ffbbbb" name="#ffbbbb" onClick={onChangeBox}>SKILL</Button>
          <Button background="#4f2ddf" name="#4f2ddf" onClick={onChangeBox}>PortFolio</Button>
          <Button background="green" name="green" onClick={onChangeBox}>None</Button>
        </div>
          { BoxRender() }
        </div>
      </PostBox>
    </Component>
  )
}

export default PostBoxs;
