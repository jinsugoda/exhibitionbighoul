import React from 'react'
import styled from 'styled-components'
import {media} from '../lib/style-utils'
import { IoMdHelp } from "react-icons/io";
import { RiQrCodeLine } from "react-icons/ri";
import oc from 'open-color'

const Wrapper = styled.div`
position: relative;
display: flex;
flex:1;
height:100%;
flex-direction: column;
margin: 5px;
    
    padding:5px;
    
`
const Title = styled.div`
position:relative;
flex:5;
display: flex;
flex-direction: column;
width: 100%;
// font-size:24px;
justify-content: flex-end;
align-items: center;
margin-bottom:30px;
.explain {
    
    position: relative;
    
    
    text-align:center;
    font-size: 16px;
    ${media.desktopL`
    width: 33%;
    `}
    ${media.mobilePhone`
    width:92%;
    `}
    ${media.tablet`
    width: 60%;
    `}
}

${media.mobilePhone`
  
  font-size: 18px;
  `}
`
const Scanner = styled.div`

position:relative;
display:flex;
flex:3;
justify-content: space-around;
    align-items: flex-start;
width: 100%;

`
const HeadTitle = styled.h1`

margin-bottom: 10px;
font-weight: bold;
color:${oc.gray[8]};
text-align:center;

`

const ItemButton = styled.div`

position:relative;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background:${oc.gray[5]};
color: white;
width: 150px;
height:150px;
font-size:140px;
margin:0px;
&:hover{
    background:${oc.gray[6]}

}
&:active{
    background:${oc.gray[4]}
}

${media.mobilePhone`
  width:100px;
  height:100px;
  font-size: 90px;
  `}
`
const ItemContainer = styled.div`
position:relative;
display: flex;
flex-direction: column;
align-items: center;
`
const FooterContainer = styled.div`
position:relative;
display:flex;
flex: 1;
justify-content:center;
align-items:center;


`
export default function MainScanScreen({history}){
    // const helpClickEvent = (e)=>{

    // }
    const qrScanClickEvent = (e)=>{
        history.push('/qrscane')
    }
    return(
        <Wrapper>
          <Title>
            <HeadTitle >인천 문학 발견!<br></br>
              떠나자, 문학 속으로
            </HeadTitle>
              <p className='explain' style={{color:oc.gray[8]}} >
              유물과 관련된 타전시관의 전시콘텐츠를 연계한 추가 콘텐츠도 제공</p>
          </Title>
          <Scanner>
            <ItemContainer>
              <ItemButton>
                <IoMdHelp />    
              </ItemButton>
              {/* <h4 style={{color:oc.gray[8]}}>설명</h4>         */}
            </ItemContainer>
            <ItemContainer>
              <ItemButton onClick = {qrScanClickEvent}>
                <RiQrCodeLine />    
              </ItemButton>
              {/* <h4 style={{color:oc.gray[8]}}>큐알 인식</h4>         */}
            </ItemContainer>    
          </Scanner>
          <FooterContainer>
            <div>
            <img className='footer' src={require('../assets/imgs/footer_white.png')} />    
            </div>
            
          </FooterContainer>
        </Wrapper>
    )
}
