import React  from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import oc from 'open-color'

// import {RiVolumeMuteFill,RiVolumeUpFill} from 'react-icons/ri'
import {AiOutlineLeftCircle,AiOutlineCheckCircle,AiOutlineLeft} from 'react-icons/ai'
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
justify-content:center;
// align-items:center;
padding-left:100px;

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
`
const HeaderTitleW = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;


margin-left: 15px;
margin-right:15px;
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
font-size: 24px;

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



  function EndHistory({slide}){
    const dispatch = useDispatch(); 
    const soicalShare = () =>{
      dispatch(modalShow(true))
    }
    const FirstSlide =()=>{
      slide.current.slide(0,1000);
    }
      return(
        <Wrapper >
          <HeaderWrapper>
          <Header >
                {/* <HeaderTitleW>
                    <AiOutlineLeft />
                </HeaderTitleW> */}
                <HeaderTitleW onClick={soicalShare}>
                <img className='imgShare' src={require('../../assets/imgs/share.png')} style={{width:30,height:30}}  />
                </HeaderTitleW>    
            </Header>
            <HeaderEndReading>
              페지를 모두 읽었습니다.
            </HeaderEndReading>
          </HeaderWrapper>
            
            <ContentWrapper>
                
            <ContentItems onClick={FirstSlide}>
                <ItemContent>
                  <AiOutlineLeftCircle color={oc.gray[6]}/>
                </ItemContent>
                
                <StringContent>처음으로 돌아가기</StringContent>
            </ContentItems>
            {/* <ContentItems>
                <ItemContent>
                  <AiOutlineCheckCircle color={oc.gray[6]} />
                </ItemContent>
                
                <StringContent>종료하기</StringContent>
            </ContentItems> */}
            </ContentWrapper>
            <FooterWrapper>
              <img src={require('../../assets/imgs/footer_white.png')}/>
            </FooterWrapper>
    </Wrapper>  
      )
    
  }
  export default EndHistory