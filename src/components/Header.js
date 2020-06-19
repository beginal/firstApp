import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .header-bb {
    position: relative;
    background: none;
    &:after {
      background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1206/city_night_fantasy-Dreamy_and_Fantasy_wallpaper_1366x768.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size:cover;
      top:0;
      left:0;
      position:absolute;
      opacity:0.5!important;
      filter:alpha(opacity=50);
      z-index:-1;
      content:"";
      width:100%;
      height:100%;
      }
  } 
`

const I_header = styled.div`
  background: #bae7f5;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition:background 2s;
  h1 {
    text-align: center;
    font-size: 6vw;
  }
  p {
    font-size: 1.5rem;
  }
`



const Header = () => {

  const [header_bb, setHeader_bb] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeader_bb(true)
    },3000)
  }, [header_bb])
  return (
    <>
    <GlobalStyle />
      <I_header className={`${header_bb ? 'header-bb' : ''}`}>
        <Typical
          loop={1}
          wrapper="h1"
          steps={[
            'Frontend', 200,
            'Frontend Developer'
          ]}
        />
        <p>Junho-Ham</p>
      </I_header>
      </>
  )
}

export default Header;
