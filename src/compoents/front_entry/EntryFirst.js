import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import {media} from '../../lib/style-utils'
import '../../css/meyongjo.css'

const headerMainTitle = "인천\n\문학기행"
const headerRightTop = "2020\n한국근대문학관\n기획전시"
const headerRightBottom = "인천,이야기가 되다"
const hearderBottomRight = "국제항구, 코스모폴리탄\n\n\기회의 땅, 일자리와 일확천금\n\n\전국 최고의 휴시과 여가지\n\n\민족의 상흔, 전쟁과 분단 풍경\n\n\고도성장과 그이면\n\n\해불양수의 도시"
const date = "2020.10.30.-"
const exbition = "한국근대문학관\n\기획전시관"
const Wrapper = styled.div`
position: relative;
display: flex;
flex:1;
height:100%;
width:100%;

flex-direction: column;
background:${oc.blue[6]};
.mainTitle{
    position:fixed;
   font-size:48px;
   writing-mode: vertical-rl;
   color:white;
   font-weight:bold;
   z-index:100;
   left:20px;
   margin-top:5px;
   letter-spacing:3px;
   font-family:Cafe24Dangdanghae;
} 

`
 const HeaderTitleWrapper = styled.div`
 position:relative;
 display:flex;
 flex:4;
 justify-content:center;
 width:100%;
 `
 const HeaderRightTitle = styled.div`
 position:relative;
 display:flex;
 
 flex-direction:column;
 justify-content: space-between;
 align-items:flex-end;
 .htop{
     font-size:12px;
     color:white;
     margin-top:5px;
     font-family:Cafe24Dangdanghae;
     line-height:1.3;
 }
 .hbottom{
    font-size:20px;
    color:white;
    font-weight:bold;
    margin-top:10px;
    margin-bottom:0px;
    font-family:Cafe24Dangdanghae;
 }
 `
const HeaderRight = styled.div`
position:relative;
display:flex;

flex-direction:column;
width:96%;
`
const BGImg = styled.div`
position: relative;
display: flex;
flex:1;
z-index:0;
// margin: 0 auto;
margin-top:0px;
justify-content:center;
align-items:center;
width:100%;
height:100%;
.bgImg{
    width:100%;
    height:100%;
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


justify-content:center;
align-items:center;
margin-top: 20px;
margin-bottom:20px;
.footerImg{

    display:flex;
    justify-content:center;
  
  }
`
const DateWordWrapper = styled.div`
position:relative;
display:flex;
justify-content:space-between;
margin-bottom:5px;
.exp{
    font-size:9px;
    color:white;
    margin-bottom:0px;
    font-weight:bold;
    letter-spacing:1px;
    font-family:Cafe24Dangdanghae;
}
`
const DateWord = styled.div`
position:relative;
display:flex;
flex-direction:column;
.date{
    font-size:22px;
    color:white;
    margin-top:10px;
    margin-bottom:0px;
    font-weight:bold;
    letter-spacing:1px;
    font-family:Cafe24Dangdanghae;
}
.exbi{
    font-size:18px;
    color:white;
    margin-bottom:0px;
    font-weight:bold;
    line-height:1.3;
    letter-spacing:1px;
    font-family:Cafe24Dangdanghae;
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
            <pre className="mainTitle">{headerMainTitle}</pre>
            <HeaderTitleWrapper>
                
                <HeaderRight>
                <HeaderRightTitle>
                    <pre className="htop" >{headerRightTop}</pre>
                    <pre className="hbottom">{headerRightBottom}</pre>
                    
                </HeaderRightTitle>
                <BGImg >
               
                    <img className='bgImg' src={require('../../assets/imgs/entry/entry_background.jpg')} alt="bgImg" />
               
                </BGImg>
                <DateWordWrapper>
                    <DateWord>
                        <pre className='date'>{date}</pre>
                        <pre className='exbi'>{exbition}</pre>
                    </DateWord>
                    <pre className='exp'>{hearderBottomRight}</pre>
                </DateWordWrapper>
                </HeaderRight>
                
            </HeaderTitleWrapper>
            
            <Content>
                <VideoButton onClick={GoVideoHandle}>메이킹 영상</VideoButton>
                <ExbiButtun onClick={GoConculsion} >한국근대문학관</ExbiButtun>
            </Content>
            <Footer >
                <div className='footerImg'>
                <img src={require('../../assets/imgs/footer_white.png')} style={{width:'30%',height:'50%'}} alt="footerImg" />
                </div>
            </Footer>
        </Wrapper>
    )
}
export default EntryFirst;
