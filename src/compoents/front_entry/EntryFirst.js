import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import {media} from '../../lib/style-utils'

const Wrapper = styled.div`
position: relative;
display: flex;
flex:1;
height:100%;
width:100%;
flex-direction: column;
background:${oc.blue[6]};
`
const BGImg = styled.div`
position: relative;
display: flex;
flex:4;
height:100%;
width:100%;
margin-top:35px;
justify-content:center;
align-items:center;
.bgImg{
    // width:100%;
    ${media.desktopL`
    width: 33%;
    `}
    ${media.mobilePhone`
    width:94%;
    `}
    ${media.tablet`
    width: 55%;
    `}
    height:90%;
    position:absolute;
    
}
`
const Content = styled.div`
position: relative;
display: flex;
flex:1;
flex-direction: column;
justify-content:center;
align-items:center;
`
const VideoButton = styled.div`
position:relative;
display:flex;

border-radius:16px;
justify-content:center;
align-items:center;
margin-bottom:20px;
height:40px;
cursor:pointer;
color: white;
font-weight:bold;
font-size:20px;
background:${oc.orange[5]};
&:hover{
    background:${oc.yellow[6]};
}
&:active{
    background:${oc.yellow[3]};
}

${media.desktopL`
    width: 33%;
    `}
    ${media.mobilePhone`
    width:92%;
    `}
    ${media.tablet`
    width: 60%;
    `}
`

const ExbiButtun = styled.div`
position:relative;
display:flex;



height:40px;
border-radius:16px;
justify-content:center;
align-items:center;
cursor:pointer;
background:white;
color: ${oc.blue[6]};
font-weight:bold;
font-size:20px;
&:hover{
    background:${oc.gray[2]};
}
&:active{
    background:${oc.gray[5]};
}

${media.desktopL`
    width: 33%;
    `}
    ${media.mobilePhone`
    width:92%;
    `}
    ${media.tablet`
    width: 60%;
    `}
`
const Footer =styled.div`
position: relative;
display: flex;
flex:1;

justify-content:center;
align-items:center;
.footerImg{

    display:flex;
    justify-content:center;
  
  }
`
function EntryFirst({history}){
    const GoVideoHandle=()=>{
        history.push('/video');
    }
    const GoConculsion=()=>{
        history.push('/conclusion')
    }
    return(
        <Wrapper>
            <BGImg >
               
                    <img className='bgImg' src={require('../../assets/imgs/entry/entry.png')}  />
               
            </BGImg>
            <Content>
                <VideoButton onClick={GoVideoHandle}>메이킹 영상</VideoButton>
                <ExbiButtun onClick={GoConculsion} >한국근대문학관</ExbiButtun>
            </Content>
            <Footer >
                <div className='footerImg'>
                <img src={require('../../assets/imgs/footer_white.png')} style={{width:'30%',height:'50%'}}/>
                </div>
            </Footer>
        </Wrapper>
    )
}
export default EntryFirst;