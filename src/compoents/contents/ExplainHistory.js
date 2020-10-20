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

// .bgAlpha{
//     position:absolute;
//     width:100%;
//     height:100%;
//     z-order:10;
// }
// .bgImg{
//   position:absolute;
//     width:100%;
//     height:100%;
//     z-order:5;
// }
.contents{
    position:relative;
    color: white;   
    padding-left:10px;
    padding-right:10px;
    margin-left:10px;
    margin-right:10px;
    line-height: 2;
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
.footerImg{

  display:flex;
  justify-content:center;

}

`
const HeaderTitleW = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;


margin-left: 5px;
margin-right:5px;
margin-top:5px;
&:hover{
  color: ${oc.gray[2]}
}
&:active{
  color:${oc.gray[5]}
}
img{
  width:90px;
  height:90px;
}
`



function ExplainHistory({imgPath,contents,audioHandle}){
    const [muted, setMuted] = useState(false)
    const dispatch = useDispatch()
    const audioState=()=>{
        setMuted(props=>!props);
        muted ? audioHandle.pause(): audioHandle.play();
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
          
            {muted? <img  src={require('../../assets/imgs/unmuted_ex.png')} /> : <img src={require('../../assets/imgs/muted_ex.png')} />}
          
          
          
        </HeaderTitleW>
        <HeaderTitleW onClick={soicalShare} style={{padding:'15px'}}>
          <img src={require('../../assets/imgs/share_white.png')} style={{width:'40px',height:'40px'}} />
        </HeaderTitleW>    
    </Header>
    <ContentWrapper>
        
            <h2 className='contents' style={{textAlign:'center',marginTop:'35px', fontSize:24}}>
                {title}
            </h2>
            <p className='contents' style={{textAlign:'center'}}>        
                {content}
            </p>
        
    </ContentWrapper>
    <FooterWrapper>
      <div className='footerImg'>
      <img src={require('../../assets/imgs/footer_white.png')} style={{width:'30%',height:'50%'}}/>
      </div>
        
    </FooterWrapper>
    </Wrapper>  
)
}
export default ExplainHistory;