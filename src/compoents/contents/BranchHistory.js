import React ,{ useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'
import {media} from '../../lib/style-utils'
import {modalShow} from '../../reducer/varient'
import '../../css/meyongjo.css'

const Wrapper = styled.div`
position: relative;
display: flex;

height:100%;
flex-direction: column;
`
const HeaderWrapper = styled.div`
position: relative;
display: flex;
flex: 3;

`
const Header = styled.div`
position: fixed;
display: flex;
flex: 3;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
width:100%;
height:40%;

.share{
    display:flex;
    justify-content:flex-end;
    z-order:100;
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
const Share = styled.div`
position:relative;
display:flex;
justify-content:flex-end;
align-items:flex-end;
padding:15px;
`
const Audio = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;

&:active{
    background:${oc.gray[3]}
}
`
const ProgressTag = styled.div`
position:relative;
display:flex;
width:100%;
justify-content:center;
align-items:center;
margin-bottom:5px;
.imgpro{
    margin:3px;
}
`
const ContentWrapper = styled.div`
position:relative;
display: flex;
flex: 3;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow:auto;
.contents{
    position:relative;
    color: ${oc.gray[8]};   
    padding-left:10px;
    padding-right:10px;
    margin-left:10px;
    margin-right:10px;
    line-height: 2;
    white-space: pre-line;
    font-size:20px;
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
.help{
  position:relative;
  color: ${oc.gray[8]};   
  padding-left:10px;
  padding-right:10px;
  margin-left:10px;
  margin-right:10px;
  line-height: 1.8;
  white-space: pre-line;
  font-size:15px;
  
}
`
const FooterWrapper = styled.div`
position:relative;
margin: 0 auto;
justify-content:center;
align-items:center;
margin-top: 20px;
margin-bottom: 25px;
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
border:2px solid ${oc.gray[3]};
padding:5px;
background:white;
margin-right:5px;
`


const HeaderItemWrapper = styled.div`
  position:relative;
  display:flex;
  justify-content:space-between;
  width:100%;

`
const HeaderBackgroudWrapper = styled.div`
position:absolute;
display:flex;
flex-direction:column;
.bgImg{
    width:100%;
    height:100%;
    position:relative;
    z-order:0;
}
`

function BranchHistory({contents,imgPath,index,length,audioHandle,audioStateArr}){
    const [muted, setMuted] = useState(false)
    const dispatch = useDispatch()
    const soicalShare = () =>{
        dispatch(modalShow(true))
      }
      const {main,help} = contents;
    const audioState=()=>{
        setMuted(props=>!props);
        !muted ? audioHandle.pause(): audioHandle.play();
        audioStateArr[index] = !muted;
        
      } 
       
     const paneProgress =  Array.apply(null, Array(length)).map((_, i) => {
        
        return (
          <div key={i} className="imgpro">            
              <img src={require(`../../assets/imgs/progress_${i !== index-1 ? 'un': ''}check.png`)} alt="SwapeComponent"/>            
          </div>
        );
      });
    return(
        <Wrapper >
        <HeaderWrapper>
        <Header >
            <HeaderBackgroudWrapper>
            <img className="bgImg" src={require(`../../assets/imgs/${imgPath}.jpg`)} alt="InsertImg" />
            <ProgressTag>
                    {
                        paneProgress
                    }
            </ProgressTag>
            </HeaderBackgroudWrapper>
            
                
            <HeaderItemWrapper >
            <HeaderTitleW onClick={audioState}>
               
               {!muted? <img className="pause" src={require('../../assets/imgs/audio_pause.gif')} alt="unmuted" /> : <img className="pause" src={require('../../assets/imgs/audio_play1.png')} alt="muted"/>}
                   
              
           </HeaderTitleW>
               <HeaderTitleW onClick={soicalShare}>
                   <HeaderArmBlack>
                       <img src={require('../../assets/imgs/amplack.png')} style={{width:'35px',height:'35px'}} alt="shareButton" />
                   </HeaderArmBlack>
                   
               </HeaderTitleW>
           
            </HeaderItemWrapper>
            
              
        </Header>
        
        </HeaderWrapper>
       
        <ContentWrapper>
                
                <pre className='contents' style={{textAlign:'left',fontFamily:'KBIZWINDOW'}}>
                    {main} 
                </pre>
                <pre className='help' style={{textAlign:'left'}}>
                  {help}
                </pre>
            
        </ContentWrapper>
        <FooterWrapper>            
            <div className='footerImg'>
            <img src={require('../../assets/imgs/footer_black.png')} style={{width:'30%',height:'50%'}} alt="footerImg"/>
            </div>
          
        </FooterWrapper>
        </Wrapper>  
    )
}
export default BranchHistory;