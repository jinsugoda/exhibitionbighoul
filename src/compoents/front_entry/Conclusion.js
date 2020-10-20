import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'
import {AiOutlineLeft} from 'react-icons/ai'

import {modalShow} from '../../reducer/varient'
import {media} from '../../lib/style-utils'

const Wrapper = styled.div`
position: relative;
display:flex;
width:100%;
height:100%;
flex-direction:column;

`
const Header = styled.div`
position:relative;
display:flex;
flex:5;
justify-content:center;
align-items:flex-start;

.bgImg{
    // width:100%;
    ${media.desktopL`
    width: 33%;
    `}
    ${media.mobilePhone`
    width:92%;
    `}
    ${media.tablet`
    width: 60%;
    `}
    height:100%;
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
font-size:32;
margin-left:20px;
color:white;

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
flex:1;
justify-content:center;
align-items:center;
.footerImg{

  display:flex;
  justify-content:center;

}
`

export default function Conclusion({history}){
    const dispatch = useDispatch(); 
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    return(
        <Wrapper>
            <Header>
              <div>
                <img className='bgImg' src={require('../../assets/imgs/entry/modern_bg.png')} />
              </div>
                
                <HeaderItemWrapper>
                <HeaderTitleW >
                    <AiOutlineLeft onClick={()=>history.go(-1)} />
                </HeaderTitleW>
                <Title>한국근대문학관</Title>
                <HeaderTitleW onClick={soicalShare}>
                <img className='imgShare' src={require('../../assets/imgs/share_black.png')} alt="loading..." />
                </HeaderTitleW> 
                </HeaderItemWrapper>
            </Header>
            <FooterWrapper>
            <div className='footerImg'>
                <img src={require('../../assets/imgs/footer_black.png')} style={{width:'30%',height:'50%'}}/>
                </div>
            </FooterWrapper>
        </Wrapper>
    )
}