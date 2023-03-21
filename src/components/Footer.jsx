import React from 'react'
import styled from 'styled-components'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdPayment} from 'react-icons/md'
import { mobile } from '../response'


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"Column"})} // RESPONSIVE

`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column ;
    padding: 20px;
`
const Logo =styled.h1`
    

`

const Desc =styled.p`

margin: 20px 0px;

    
    
`
const SocialContainer =styled.div`
display: flex;
    
    
`

const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;


    
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})} // RESPONSIVE
    
`

const Title = styled.h3`
margin-bottom: 30px;
    

`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
    

`
const ListItem = styled.li`
width: 50%;
    
    
`

const Right= styled.div`
    
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor:"#eee"})} // RESPONSIVE
`

const ContactItem = styled.div`
    margin-bottom: 20px ;
    display: flex;
    align-items: center;
    
`

const Payment = styled.div`
width: 50%;
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Bati evolo</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus fuga tenetur quas saepe expedita accusamus nemo, iure atque vero, labore, consequatur facere est ipsam ad reiciendis placeat eaque quod.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <AiFillFacebook/>
                </SocialIcon >
                <SocialIcon color="E4405F">
                    <AiFillInstagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <AiFillTwitterCircle/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Portes & Fenetres</ListItem>
                <ListItem>Construction</ListItem>
                <ListItem>Quincaillerie</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Terms</ListItem>
               
            
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><FaMapMarkerAlt style={{marginRight:"10px"}}/>1515 Sherbrooke Ouest,Montreal </ContactItem>
            <ContactItem><AiOutlinePhone style={{marginRight:"10px"}}/>+1 514 444 444</ContactItem>
            <ContactItem><AiOutlineMail style={{marginRight:"10px"}}/>contact@batievolo.com</ContactItem>
            <Payment src="https://i0.wp.com/dkmotos.com/wp-content/uploads/2021/06/Orange_Money-Logo.wine_.png?fit=50%2C33&ssl=1">
                <MdPayment style={{marginRight:"10px"}}/>Payment
            </Payment>
        </Right>

    </Container>
  )
}

export default Footer