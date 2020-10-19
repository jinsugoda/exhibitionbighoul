import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import oc from 'open-color'
import {AiOutlineClose} from 'react-icons/ai'
import {useSelector,useDispatch} from 'react-redux'
import {modalShow} from '../reducer/varient'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')

  const Wrapper = styled.div`
  position:relative;
  display:flex;
  justify-content:space-between;
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
  align-items:flex-start;  
  margin-bottom:10px;
  border-bottom: 1px solid ${oc.gray[3]};
  `
  const HeaderTitle = styled.div`
  position:relative;
  display:flex; 
  font-size:18px;
  font-weight:bold;
  color:${oc.gray[8]}
  `
  const Content = styled.div`
  position:relative;
  display:flex;
  flex:1;
  justify-content:space-around;
  align-items:center;
  
  width:100%;
  `
  const SocialItem = styled.div`
  position:relative;
  display:flex;  
  justify-content:center;
  align-items:center;
  padding-right:10px;
  &:{
      background:${oc.gray[3]}
  }
  `
function ShareModal({history}){
    // var subtitle;
    // const [modalIsOpen,setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const modalIsOpen = useSelector(state=>state.selectIndex.modal);
    // function openModal() {
    //   dispatch(modalShow(true));
    // }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      dispatch(modalShow(false));
    }
    const youtubeShare=()=>{
      window.location.href ='https://www.youtube.com/channel/UCPv3nEFK4zplMW0My6qXWlQ/';
      
        dispatch(modalShow(false));
    }
    const facebookShare=()=>{
      window.location.href ='https://www.facebook.com/ifacmkml/'
        dispatch(modalShow(false));
    }
    const instaShare=()=>{
      window.location.href ='https://www.instagram.com/ifacmkml/'
        dispatch(modalShow(false));
    }
    return (
        <div>
          
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <Wrapper>
                <Header>
                    <HeaderTitle >Sharing</HeaderTitle>
                    <AiOutlineClose color={oc.gray[8]} size={30} onClick={closeModal}/>
                </Header>

                <Content>
                    <SocialItem onClick={youtubeShare}>
                        <img src={require('../assets/imgs/youtub_icon.png')} />
                    </SocialItem>
                    <SocialItem onClick={facebookShare}>
                        <img src={require('../assets/imgs/face_icon.png')} />    
                    </SocialItem>
                    <SocialItem onClick={instaShare}>
                        <img src={require('../assets/imgs/insta_icon.png')} />    
                    </SocialItem>
                </Content>
            </Wrapper>
          </Modal>
        </div>
      );
}
export default ShareModal;