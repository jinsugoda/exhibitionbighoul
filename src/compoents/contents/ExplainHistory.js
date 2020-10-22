import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'
import '../../css/meyongjo.css'

import {AiOutlineRightCircle} from 'react-icons/ai'
import {modalShow} from '../../reducer/varient'

const Wrapper = styled.div`
position: relative;
display: flex;
flex:1;
height:100%;
width:100%;
flex-direction: column;
background:${oc.blue[6]};
overflow:auto;
`
const Header = styled.div`
position: relative;
display: flex;
// flex: 1;
justify-content:space-between;
align-items:flex-start;


`
const ContentWrapper = styled.div`
position:relative;
display: flex;
flex: 1;
flex-direction:column;
justify-content:flex-start;
overflow: auto;
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
    font-size: 18px;
}
.title{
  position:relative;
    color: white;   
    
    margin-left:50px;
    
    
    
}
}

`
const FooterWrapper = styled.div`
position:relative;
display:flex;
// flex:1;
justify-content:center;
align-items:center;
margin-bottom: 30px;
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
.pause{
  width:50px;
  height:50px;
  
}
`

const HeaderArmBlack = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
border:3px solid ${oc.gray[3]};
padding:5px;
background:white;
margin-right:5px;
`
const ContentFontApply = styled.p`

    font-family:'KBIZWINDOW';
    position:relative;
    color: white;   
    padding-left:10px;
    padding-right:10px;
    margin-left:10px;
    margin-right:10px;
    line-height: 2;
    font-size: 20px;
    text-align:left;
`
const CardArrowWrapper = styled.div`
position: relative;
display:flex;
flex:1;
width:100%;
justify-content:flex-end;

`
const CardItems = styled.div`
position: relative;
display:flex;
justify-content:flex-end;
align-items:center;
margin-top:10px;
margin-right:10px;
.title{
  color:white;
  font-size:24px;
}

`
const Card = styled.div`
position: relative;
display:flex;
margin-left:10px;
justify-content:flex-end;
font-size:48px;
border-radius:50%;
border:0px solid ${oc.gray[0]};
color:${oc.gray[5]};
background:white;

`
function ExplainHistory({imgPath,contents,audioHandle,swipeHandler,audioStateArr}){
    const [muted, setMuted] = useState(false)
    const dispatch = useDispatch()
    const audioState=()=>{
        setMuted(props=>!props);
        !muted ? audioHandle.pause(): audioHandle.play();
        
        audioStateArr[0] = !muted;
      }
      const {title,content,author} = contents;
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    // useEffect(()=>{
    //   // audioHandle.play();
    // },[audioHandle])
return(
    <Wrapper >
        
    <Header >
        
        <HeaderTitleW onClick={audioState} style={{padding:'15px'}}>
          
            {!muted? <img className="pause" src={require('../../assets/imgs/audio_pause.gif')} alt="unmuted" /> : <img className="pause" src={require('../../assets/imgs/audio_play1.png')} alt="muted"/>}
          
            
          
        </HeaderTitleW>
        <HeaderTitleW onClick={soicalShare} style={{padding:'15px'}}>
        <HeaderArmBlack>
        <img src={require('../../assets/imgs/amplack.png')} style={{width:'35px',height:'35px'}} alt="shareButton" />
        </HeaderArmBlack>
          
        </HeaderTitleW>    
    </Header>
    <ContentWrapper>
        
            <h2 className='title' style={{textAlign:'left',marginTop:'35px', fontSize:36,marginBottom:15}}>
                {title}
            </h2>
              <h3 className='title' style={{textAlign:'left', fontSize:24,marginTop:0}}>{author}</h3>
            <ContentFontApply >        
                {content}                
            </ContentFontApply>
            <CardItems onClick={()=>swipeHandler.current.next()}>
        <p className="title">카드뉴스 감상하기</p>
        <Card>
          <AiOutlineRightCircle />
        </Card>
      </CardItems>
    </ContentWrapper>
    {/* <CardArrowWrapper>
      
    </CardArrowWrapper> */}
    <FooterWrapper>
      <div className='footerImg'>
      <img src={require('../../assets/imgs/footer_white.png')} style={{width:'30%',height:'50%'}} alt="footImg" />
      </div>
        
    </FooterWrapper>
    </Wrapper>  
)
}
export default ExplainHistory;