import React ,{ useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'
import {media} from '../../lib/style-utils'
import {modalShow} from '../../reducer/varient'

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
.contents{
    position:relative;
    color: ${oc.gray[8]};   
    padding-left:10px;
    padding-right:10px;
    margin-left:10px;
    margin-right:10px;
    line-height: 2;
    white-space: pre-line;
    font-size:16px;
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




  

function BranchHistory({contents,imgPath,index,length,audioHandle}){
    const [muted, setMuted] = useState(false)
    const dispatch = useDispatch()
    const soicalShare = () =>{
        dispatch(modalShow(true))
      }
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
            
                
            
            
                <Share onClick={soicalShare}>
                    <img src={require('../../assets/imgs/share_black.png')} style={{width:80,height:80}} />
                </Share>
            
            <div className="share" onClick={audioState}>
                <Audio >
                    <img src={require(`../../assets/imgs/${muted ? "un":""}bmuted.${muted?"gif":"jpg"}`)} style={{width:80,height:80}} />
                    
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
            <div className='footerImg'>
            <img src={require('../../assets/imgs/footer_black.png')} style={{width:'30%',height:'50%'}}/>
            </div>
          
        </FooterWrapper>
        </Wrapper>  
    )
}
export default BranchHistory;