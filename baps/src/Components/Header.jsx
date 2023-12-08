import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      
      <Navbar />
      
     
    </MainHeader>
  );
};

const MainHeader = styled.header`
  // padding:0 4.8rem;
  // height: 5.5rem;
  // background-color: #F0EAD6;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // button{
  //   background-color: white;
  //   border-radius: 15px;
  //   padding: 10px;
  //   font-weight: 600;
  //   font-family:san-sarif;
  //   &:hover{
  //       color: white;
  //       background-color: #f9b148;
  //       transition: 0.5s ease;
  //       border: 2px solid #f9b148;
  //   }
  // }
`;
export default Header;
