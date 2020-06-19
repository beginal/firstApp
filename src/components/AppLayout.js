import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.TopPoint {
  position:relative;
}
.fixedMenu {
  position: fixed;
  top: 0px;
  left:0px;
}
`

const T_Menu = styled(Menu)`
  position: absolute;
  top:640px;
  background: rgba(157,191,228,0.8);
  border:none;
  width: 100%;
  z-index:999;
  padding-left: 0;
  margin:0;
  transition:position 2s;
  * {
    float:right;
  }
  .Logo {
    float:left;
    padding: 0;
    img {
      width: 60px;
    }
  }
`;


const AppLayout = ({ children }) => {
  const [topDown,setTopDown] = useState(true)
  const [topShow,setTopShow] = useState(false)
  const [Layoutfixed, setLayoutfixed] = useState(false)

      useEffect(() => {
        window.addEventListener('scroll', onScroll);
        // 스크롤 이벤트가 발생하면 onScroll 함수 실행
        console.log(onScroll.scrollTop)
      }, [])
      
      const onScroll = () => {
        const scrollTop = window.scrollY || document.documentElemen
        // 스크롤 값 구하기
        if(Number(scrollTop) > 640) {
          return setLayoutfixed(true)
        } else {
          return setLayoutfixed(undefined)
        }
      }

  const topDownPoint = useCallback(() => {
    setTopDown(!topDown)
    setTopShow(!topDown)
  },[topDown])

  return (
    <div className="Layout">
      <GlobalStyle />
      <T_Menu className={`AppLayout ${Layoutfixed ? "fixedMenu" : "" }`} mode="horizontal">
        <Menu.Item className="Logo">
            <div>
              <img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_63991F3DE8078AE372A3EF381463C4BC.png" alt=""/>
            </div>
        </Menu.Item>
        <Menu.Item>
          {/* <a onClick={scrollDown}>＝</a> */}
          <div className="TopPoint" onClick={topDownPoint}>＝</div>
        </Menu.Item>
      </T_Menu>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // return 안에 들어갈 수 있는 모든것들이 node
};

export default AppLayout;
