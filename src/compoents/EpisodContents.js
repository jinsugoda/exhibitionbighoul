import React ,{useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import ReactSwipe from "react-swipe";
import {EpisodeOverView,EpisodeContents,ImgPath} from '../lib/data'

import ExplainHistory from './contents/ExplainHistory'
import BranchHistory from './contents/BranchHistory'
import EndHistory from './contents/EndHistory'



const Wrapper = styled.div`
height:100vh;
width:100%;
`

// let audioMuted = false;
const audio = new Audio()
function EpisodContent(){
  
    const reactSwipe = useRef();
    // Scaned Episode Index
    const eIndex = useSelector(state=>state.selectIndex.indexValue);
    // const muted = useSelector(state=>state.selectIndex.audio);
    // const dispatch = useDispatch()
    const startSlide = 0;

    // sound muted status
    
// const audioHandle=()=>{
//       // setMuted(props=>!props);
//       audioMuted = !audioMuted;
//       audio.muted = audioMuted;
      
//       // dispatch(audioSetting(!muted))
      
//     }

    // Scaned Episode branch content's counter [includin Explain page and End page] ,because +2
    const numberOfSlides = EpisodeContents[eIndex].length +2;

    // Explain Page, Branch Pages, End Page
    const arrayItems = (index)=>{
      if(index === 0){
        return <ExplainHistory imgPath={ImgPath[eIndex][index]} contents={EpisodeOverView[eIndex]} audioHandle={audio}  />
      }else if(index === numberOfSlides -1 ){
        return <EndHistory slide={reactSwipe} />
      }else{
        
        return <BranchHistory  audioHandle={audio} imgPath={ImgPath[eIndex][index-1]} contents={EpisodeContents[eIndex][index-1]} index={index-1} length = {ImgPath[eIndex].length} />
      }
      
    }
    
    // Swipe Contents [Explain Page, Branch Pages, End Page]
    const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) =>{
      
        return(
            <Wrapper key={i}> 
              <Wrapper className="item" >
                 {
                 arrayItems(i)
                }
              </Wrapper>
            </Wrapper>
        )
    })
    
    // Swipe Options
    const swipeOptions = {
        startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
        // widthOfSiblingSlidePreview: 10,
        speed: 1000,
        disableScroll: false,
        continuous: false,
      callback: function (index, elem) {
        audio.pause();
        console.log('callback')
      },
      transitionEnd: function (index, elem) {
        console.log('transition')
        if(index === 0 ){
          audio.src = require(`../assets/music/${EpisodeOverView[eIndex].audio}.wav`);
          audio.load()
          audio.play();  
          audio.muted=true;
        }else if(index > 0 && index <= EpisodeContents[eIndex].length){
          audio.src = require(`../assets/music/${ImgPath[eIndex][index-1]}.wav`)
          audio.load()
          audio.play();
          audio.muted=true;
        }else{
          audio.pause();
        }
        
      }
    }
    
    
    
    // const next=()=>{
    //     reactSwipe.current.next();
    // }
    // const prev = ()=>{
    //     reactSwipe.current.prev();
    // }
    useEffect(()=>{
      
        audio.src = require(`../assets/music/${EpisodeOverView[eIndex].audio}.wav`)
      audio.load()
      
      // audio.play();
      audio.muted = true;
      
      
    },[audio])
    return(
      <Wrapper className="center" >
        <ReactSwipe
          ref={reactSwipe}
          className="mySwipe"
          swipeOptions={swipeOptions}
        >
          {paneNodes}
        </ReactSwipe>       
      </Wrapper>
    )
}
export default EpisodContent