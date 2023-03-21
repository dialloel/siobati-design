import React from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import { Badge } from '@mui/material';
import {mobile} from "../response"

const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})} // RESPONSIVE
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({padding:"10px 0"})} // RESPONSIVE
`;

const Left= styled.div`
    flex:1;
    display:flex;
    align-items:center;     

`;

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:"none"})} // RESPONSIVE

`;

const SearchContainer =styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center; 
    margin-left:25px;
    padding:5px;

`;

const Input = styled.input`
  border:none;
  ${mobile({width:"50px"})} // RESPONSIVE

`;

const Center= styled.div`
    flex:1;
    text-align:center;

`;

const Logo= styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})} // RESPONSIVE

`;


const Right= styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:2 , justifyContent:"center"})} // RESPONSIVE 
    

`;


const MenuItem= styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
   
    ${mobile({fontSize:"12px", marginLeft:"10px"})} // RESPONSIVE 

`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <FaSearch style={{color:"gray", fontSize:16}}/>
          </SearchContainer >
        </Left>
        <Center>
          <Logo>Batievolo.com</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary" >
              <AiOutlineShoppingCart style={{fontSize:20}}  />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar