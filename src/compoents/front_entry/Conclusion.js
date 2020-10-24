import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'
import {AiOutlineLeft} from 'react-icons/ai'
import '../../css/meyongjo.css'
import {modalShow} from '../../reducer/varient'
import {media} from '../../lib/style-utils'


const headerLetter = "쉽고 재미있게 즐기는\n\모두에게 열린 문학관"
const michael = "/"
const content = "한국근대문학관은 인천광역시와\n\인천문화재단이 힘을 합해\n\인천의 옛도신인 개항장에 있는 창고건물을\n\리모델링하여 만든공간입니다.\n\n\
1980년대 근대계몽기로부터 1948년에\n\이르기까지 우리 근대문학의 역사를\n\상설전시를 통해 만나볼수 있습니다.\n\n\한국근대문학관은 상설전시 외에\n\문학과 인문학을 바탕으로 한 다양한\n\기획전시 및 교육프로그램과,\n\근대문학 자료의 체계적 수집,보존 등\n\
자료 아카이빙 작업 등도 수행하고 있습니다."
const Wrapper = styled.div`
position: relative;
display:flex;
width:100%;
height:100%;
flex-direction:column;
overflow:auto;
`
const Header = styled.div`
position:relative;
display:flex;
flex:1;
margin: 0 auto;
justify-content:center;
align-items:flex-start;
width:100%;
.bgImg{
  
    z-index:0;
    width:100%;
    ${media.desktopL`
    width: 33%;
    `}
    ${media.mobilePhone`
    width:100%;
    `}
    ${media.tablet`
    width: 60%;
    `}
    height:50%;
    position:absolute;
    
}
`
const HeaderItemWrapper = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:5px;
${media.desktopL`
width: 33.33%;
`}
${media.mobilePhone`
width:92%;
`}
${media.tablet`
width: 60%;
`}

`

const Title = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
font-size:24px;
margin-left:20px;
color:white;

`
const ContainerTitleFooter = styled.div`
position:relative;
display:flex;
flex-direction:column;

`

const MainTitle = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
margin: 0 auto;
border-radius:16px;
border:1px solid ${oc.gray[1]};
height:86%;
width:80%;
background:white;
z-index:100;
margin-top:85px;
${media.desktopL`
width: 33.33%;
`}
${media.mobilePhone`
width:85%;
`}
${media.tablet`
width: 55%;
`}

.headTitle{
  font-size:24px;
  line-height:1.4;
  letter-spacing:1px;
  text-align:center;
  color:${oc.gray[6]};
  font-weight:bold;
  margin-bottom:0px;
  // margin-top:14px;
  font-family:RIDIBatang;
}
.headCon{
  font-size:26px;
  line-height:1;
  
  text-align:center;
  margin-bottom:0px;
  color:${oc.gray[6]};
  margin-top:12px;
  font-family:RIDIBatang;
}
.headContent{
  margin-top:12px;
  font-size:15px;
  line-height:1.4;
  // letter-spacing:0px;
  text-align:center;
  // font-family:KBIZWINDOW;
  
}
`
const HeaderTitleW = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
border-radious: 50%;
font-size: 36px;
color: white;
margin-left: 15px;
margin-right:15px;

&:hover{
  color: ${oc.gray[2]}
}
&:active{
  color:${oc.gray[5]}
}

.imgShare{
  width: 60px;
  height:60px;
}
`
const FooterWrapper = styled.div`
position:relative;
display:flex;
// flex:1;
justify-content:center;
align-items:center;
margin-top:10px;
margin-bottom:20px;
.footerImg{

  display:flex;
  justify-content:center;

}
`
const HeaderArmBlack = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
border:2px solid ${oc.gray[2]};
padding:5px;
`

export default function Conclusion({history}){
    const dispatch = useDispatch(); 
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    return(
        <Wrapper>
            <Header>
              {/* <div> */}
                <img className='bgImg' src={require('../../assets/imgs/entry/modern_bg.jpg')} alt="bgImg" />
              {/* </div> */}
                <MainTitle>
                  <pre className="headTitle" >{headerLetter}</pre>
                  <pre className="headCon">{michael}</pre>
                  <pre className="headContent"> {content}</pre>



                 
                </MainTitle>
                <HeaderItemWrapper>
                <HeaderTitleW >
                    <AiOutlineLeft onClick={()=>history.go(-1)} />
                </HeaderTitleW>
                <Title>한국근대문학관</Title>
                <HeaderTitleW onClick={soicalShare}>
                <HeaderArmBlack>
                        <img src={require('../../assets/imgs/amplack.png')} style={{width:'40px',height:'40px'}} alt="shareButton" />
                    </HeaderArmBlack>
                </HeaderTitleW> 
                </HeaderItemWrapper>
                <ContainerTitleFooter>
                  
                </ContainerTitleFooter>
            </Header>
            <FooterWrapper>
            <div className='footerImg'>
                <img src={require('../../assets/imgs/footer_black.png')} style={{width:'30%',height:'50%'}} alt="footerImg"/>
                </div>
            </FooterWrapper>
        </Wrapper>
    )
}