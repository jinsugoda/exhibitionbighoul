import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'
import {AiOutlineLeft} from 'react-icons/ai'
import ReactPlayer from 'react-player'
import {modalShow} from '../../reducer/varient'

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
flex:1;
width:100%;
justify-content:space-between;
`

const VideoWrapper = styled.div`
position:relative;
display:flex;
flex:10;
justify-content:center;
align-items:flex-start;
`
const Footer = styled.div`
position:relative;
display:flex;
flex;2;
justify-content:center;
align-items:center;
.bgImg{
    width:200px;
    height:60px;
    position:absolute;
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

`

function MakingVideo({history}){
    const dispatch = useDispatch(); 
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    
    return(
        <Wrapper>
            <Header>
                <HeaderTitleW >
                    <AiOutlineLeft onClick={()=>history.go(-1)} />
                </HeaderTitleW>
                <HeaderTitleW onClick={soicalShare}>
                <img className='imgShare' src={require('../../assets/imgs/share.png')} />
                </HeaderTitleW> 
            </Header>
            <VideoWrapper>
                <ReactPlayer url={require('../../assets/video/background.mp4')} controls={true} light={require('../../assets/imgs/entry/video_light.jpg')} />
            </VideoWrapper>
            <Footer>
                <img  className='bgImg' src={require('../../assets/imgs/my.jpg')} />
            </Footer>
        </Wrapper>
    )
}
export default MakingVideo;

