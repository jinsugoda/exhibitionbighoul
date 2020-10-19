import React ,{ useState} from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import {media} from '../../lib/style-utils'

const Wrapper = styled.div`
position: relative;
display: flex;

height:100%;
flex-direction: column;
`
const Header = styled.div`
position: relative;
display: flex;
flex: 3;
flex-direction:column;
justify-content:space-between;


.share{
    display:flex;
    justify-content:flex-end;
    z-order:100;
}
.bgImg{
    width:100%;
    height:100%;
    position:absolute;
    z-order:0;
}

`
const Share = styled.div`
position:relative;
display:flex;
justify-content:flex-end;
align-items:flex-end;
border-radius:50%;
margin-right: 10px;
font-size:48px;
z-order:100;
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
justify-content:center;
align-items:center;
margin-bottom:10px;
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
.contents{
    position:relative;
    color: ${oc.gray[8]};   
    padding-left:10px;
    padding-right:10px;
    margin-left:10px;
    margin-right:10px;
    line-height: 2;
    white-space: pre-line;
    font-size:18px;
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

`
const FooterWrapper = styled.div`
position:relative;
display:flex;
flex:1;
justify-content:center;
align-items:baseline;
`




  

function BranchHistory({contents,imgPath,index,length,audioHandle}){
    const [muted, setMuted] = useState(false)
    
    const audioState=()=>{
        setMuted(props=>!props);
        audioHandle.muted = muted;
        
      }    
     const paneProgress =  Array.apply(null, Array(length)).map((_, i) => {
        
        return (
          <div key={i} className="imgpro">            
              <img src={require(`../../assets/imgs/progress_${i !== index ? 'un': ''}check.png`)} />            
          </div>
        );
      });
    return(
        <Wrapper >
        
        <Header >
            
                <img className="bgImg" src={require(`../../assets/imgs/${imgPath}.jpg`)} />
            
            
                <Share>
                    <img src={require('../../assets/imgs/share.png')} />
                </Share>
            
            <div className="share" onClick={audioState}>
                <Audio >
                    <img src={require(`../../assets/imgs/audio_${muted ? "un":""}muted.jpg`)} />
                    
                </Audio>
            </div>
        </Header>
        <ContentWrapper>
                <ProgressTag>
                    {
                        paneProgress
                    }
                </ProgressTag>
                <pre className='contents' style={{textAlign:'left'}}>
                    {contents}
                </pre>
            
        </ContentWrapper>
        <FooterWrapper>
            <div>
            <img src={require('../../assets/imgs/footer_white.png')}/>
            </div>
          
        </FooterWrapper>
        </Wrapper>  
    )
}
export default BranchHistory;