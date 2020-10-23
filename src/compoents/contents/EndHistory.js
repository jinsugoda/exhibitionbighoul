import React  from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'

// import {RiVolumeMuteFill,RiVolumeUpFill} from 'react-icons/ri'
import {AiOutlineLeftCircle,AiOutlineCheckCircle} from 'react-icons/ai'
import {modalShow} from '../../reducer/varient'


const Wrapper = styled.div`
position: relative;
display: flex;
flex:1;
height:100%;
flex-direction: column;



`
const Header = styled.div`
position: relative;
display: flex;
flex: 1;
justify-content:flex-end;
align-items:center;
`
const HeaderWrapper = styled.div`
position: relative;
display: flex;
flex: 1;
justify-content:center;
// align-items:center;
flex-direction:column;
background:${oc.blue[6]}
`
const HeaderEndReading = styled.div`
position: relative;
display: flex;
flex: 1;
justify-content:space-between;
align-items:center;
font-size:18px;
color:white;
margin-left:20px;
`
const ContentWrapper = styled.div`
position:relative;
display: flex;
flex: 4;
flex-direction:column;
justify-content:flex-start;
// align-items:center;
// padding-left:100px;
.title{
  color:${oc.gray[8]};
}

`

const ContentItems = styled.div`
position:relative;
display:flex;
justify-content:flex-start:
align-items:center;
border-bottom:2px solid ${oc.gray[6]};
margin-bottom:20px;
padding-bottom:20px;
cursor:pointer;
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
.title{
  position:relative;
    color: white;   
    
    margin-left:50px;
`
const HeaderTitleW = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;



&:hover{
  color: ${oc.gray[2]}
}
&:active{
  color:${oc.gray[5]}
}

`
const StringContent= styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
color:${oc.gray[7]};
font-size: 20px;

margin-left: 15px;
margin-right:15px;

&:active{
  color:${oc.gray[8]}
}
`
const ItemContent= styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;

font-size: 36px;

margin-left: 15px;
margin-right:15px;
&:hover{
  color: ${oc.gray[2]}
}
&:active{
  color:${oc.gray[8]}
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


  function EndHistory({slide,contents}){
    const dispatch = useDispatch(); 
    const {title,author} = contents;
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    const FirstSlide =()=>{
      slide.current.slide(0,1000);
    }
    const CloseHandle = ()=>{
      window.close()
    }
      return(
        <Wrapper >
          <HeaderWrapper>
          <Header >
                {/* <HeaderTitleW>
                    <AiOutlineLeft />
                </HeaderTitleW> */}
                <HeaderTitleW onClick={soicalShare} style={{padding:'15px'}}>
                <HeaderArmBlack>
                        <img src={require('../../assets/imgs/amplack.png')} style={{width:35,height:35}} alt="shareButton" />
                    </HeaderArmBlack>
                </HeaderTitleW>    
            </Header>
            <HeaderEndReading>
              페이지를 모두 읽었습니다.
            </HeaderEndReading>
          </HeaderWrapper>
            
            <ContentWrapper>
              <div style={{marginBottom:80}}>
              <h2 className='title' style={{textAlign:'center', fontSize:36,marginBottom:15}}>
                {title}
              </h2>
              <h3 className='title' style={{textAlign:'center', fontSize:24,marginTop:0}}>{author}</h3>
              </div>
            
            <ContentItems onClick={FirstSlide} style={{marginLeft:100}}>
                <ItemContent>
                  <AiOutlineLeftCircle color={oc.gray[6]}/>
                </ItemContent>
                
                <StringContent>처음으로 돌아가기</StringContent>
            </ContentItems>
            <ContentItems onClick={CloseHandle} style={{marginLeft:100}}>
                <ItemContent>
                  <AiOutlineCheckCircle color={oc.gray[6]} />
                </ItemContent>
                
                <StringContent onClick={window.onbeforeunload = ()=>{return ''}}>종료하기</StringContent>
            </ContentItems>
            </ContentWrapper>
            <FooterWrapper>
              <div className='footerImg'>
                <img src={require('../../assets/imgs/footer_black.png')} style={{width:'30%',height:'50%'}} alt="footImg" />
              </div>
              
            </FooterWrapper>
    </Wrapper>  
      )
    
  }
  export default EndHistory