import React ,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'

import {RiVolumeMuteFill,RiVolumeUpFill} from 'react-icons/ri'
import {modalShow} from '../../reducer/varient'

const Wrapper = styled.div`
position: relative;
display: flex;
flex:1;
height:100%;
width:100%;
flex-direction: column;
background:${oc.blue[6]}
`
const Header = styled.div`
position: relative;
display: flex;
flex: 1;
justify-content:space-between;
align-items:flex-start;


`
const ContentWrapper = styled.div`
position:relative;
display: flex;
flex: 4;
flex-direction:column;
justify-content:flex-start;
// align-items:center;

.bgAlpha{
    position:absolute;
    width:100%;
    height:100%;
    z-order:10;
}
.bgImg{
  position:absolute;
    width:100%;
    height:100%;
    z-order:5;
}
.contents{
    position:relative;
    color: white;   
    padding-left:10px;
    padding-right:10px;
    margin-left:10px;
    margin-right:10px;
    line-height: 3;
    font-size: 16px;
}
}

`
const FooterWrapper = styled.div`
position:relative;
display:flex;
flex:1;
justify-content:center;
align-items:center;

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
margin-top:25px;
&:hover{
  color: ${oc.gray[2]}
}
&:active{
  color:${oc.gray[5]}
}
`



function ExplainHistory({imgPath,contents,audioHandle}){
    const [muted, setMuted] = useState(false)
    const dispatch = useDispatch()
    const audioState=()=>{
        setMuted(props=>!props);
        audioHandle.muted = muted  
      }
      const {title,content} = contents;
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    // useEffect(()=>{
    //   // audioHandle.play();
    // },[audioHandle])
return(
    <Wrapper >
        
    <Header >
        
        <HeaderTitleW onClick={audioState}>
          {muted? <RiVolumeUpFill/> : <RiVolumeMuteFill />}
          
        </HeaderTitleW>
        <HeaderTitleW onClick={soicalShare}>
          <img src={require('../../assets/imgs/share.png')} style={{width:30,height:30}} />
        </HeaderTitleW>    
    </Header>
    <ContentWrapper>
        {/* <img className='bgImg' src={require('../../assets/imgs/background.jpg')} /> */}
        {/* <img className='bgAlpha' src={require('../../assets/imgs/alpha.png')} /> */}
            <h2 className='contents' style={{textAlign:'center',marginTop:'70px', fontSize:24}}>
                {title}
            </h2>
            <p className='contents' style={{textAlign:'center'}}>        
                {content}
            </p>
        
    </ContentWrapper>
    <FooterWrapper>
      <div>
      <img src={require('../../assets/imgs/footer.png')}/>
      </div>
        
    </FooterWrapper>
    </Wrapper>  
)
}
export default ExplainHistory;