import React from 'react';
import styled from 'styled-components';

const Footers = styled.div`
  background: black;
  display: flex;
  margin-top: 6rem;
  padding: 2rem 0rem 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  p {
    margin-bottom: 2px;
  }
  h2 {
    font-size:1.5rem;
    padding-bottom: 3px;
    border-bottom : 2px solid white;
  }
  * {
    color: white;
  }
  .links {
    display: flex;
    .moveit {
      margin: 0.5rem;
      background: white;
      width: 64px;
      height: 64px;
      border-radius:50px;
      display: flex;
      align-items:center;
      justify-content: center;
      transition: background 2s;
       &:hover {
         background: #454545;
         cursor:pointer;
       }
    }
  }
`;

const Footer = () => {

  return (
    <Footers>
      <h2>CONTANT</h2>
      <p><span>Phone : </span>010-1234-5678</p>
      <p><span>Mail : </span>MyMail@gmail.com</p>
      <div className="links">
        <a href="https://github.com/beginal" target="blank">
          <div className="moveit">
            <img src="http://placehold.it/30x30" alt="github" ></img>
          </div>
        </a>
        <a href="/">
          <div className="moveit">
            <img src="http://placehold.it/30x30" alt="" ></img>
          </div>
        </a>
      </div>
    </Footers>
  )
}

export default Footer
