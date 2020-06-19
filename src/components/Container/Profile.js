import React from 'react';
import useScrollFadeIn from '../../utils/useScrollFadeIn';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

`
const Container = styled.div`
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  .profile_h2 > h2 {
    color: pink;
    margin-top: 2rem;
    font-size: 5vw;
  }
  `

const P_About = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  .intro {
    width: 600px;
    margin: 2rem 0;
    background:gray;
    border-radius: 5px;
    margin-top: 3px;
    padding: 2rem;
    display: flex;
    align-items: center;
    ul {
      padding: 0 20px;
      li {
        text-align:left;
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 5px;
      }
      p {
        margin-bottom: 0;
        text-align: left;
      }
    }
    img {
      width: 150px;
      height:200px;
    }
  @media (max-width: 700px) {
    width: 300px;
    flex-direction:column;
    padding: 1rem;
    ul {
      padding: 0px;
      li {
        text-align:center;
        font-size: 1rem;
        font-weight: 500;
      }
      p {
        text-align: center;
        font-size: 0.8rem
      }
    }
    img {
      margin:10px 0;
      width: 100px;
      height: 130px;
    }
  }
  }

  
`

const Profile = () => {

  const animatedItem = useScrollFadeIn();
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="profile_h2">
          <h2>Who's this guy?</h2>
        </div>
        <P_About {...animatedItem}>
          <div className="intro">
            <img src="http://placehold.it/150x200" alt=""></img>
            <ul>
              <li>Ham Jun Ho</li>
              <li>1995-10-26</li>
              <p>나는 너의 다운타운 베이비야</p>
            </ul>
          </div>
        </P_About>
      </Container>
    </>
  )
}

export default Profile;
