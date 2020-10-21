import React ,{useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import ReactSwipe from "react-swipe";
import {EpisodeOverView,EpisodeContents,ImgPath} from '../lib/data'
import {gIndex,audioSetting} from '../reducer/varient'
import ExplainHistory from './contents/ExplainHistory'
import BranchHistory from './contents/BranchHistory'
import EndHistory from './contents/EndHistory'



const Wrapper = styled.div`
height:100vh;

width:100%;

`

// let audioMuted = false;
const audio = new Audio()

function EpisodContent({ match }){
  
  audio.autoplay = true;
  const { id } = match.params;
  const eIndex = parseInt(id, 10);
  const len = ImgPath[eIndex].length+1;
  var AudioState = new Array(len).fill(false);
  const dispatch = useDispatch();
  dispatch(gIndex(id))
    const reactSwipe = useRef();
    // Scaned Episode Index
    // const eIndex = useSelector(state=>state.selectIndex.indexValue);
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
        return <ExplainHistory imgPath={ImgPath[eIndex][index]} contents={EpisodeOverView[eIndex]} audioHandle={audio} audioStateArr={AudioState} />
      }else if(index === numberOfSlides -1 ){        
        return <EndHistory slide={reactSwipe} contents={EpisodeOverView[eIndex]}/>
      }else{
        
        return <BranchHistory  audioHandle={audio} imgPath={ImgPath[eIndex][index-1]} contents={EpisodeContents[eIndex][index-1]} index length = {ImgPath[eIndex].length} audioStateArr={AudioState}/>
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
        let audioPromise = audio.play();
        if(audioPromise !== undefined){
          audioPromise.then(_ =>{
            audio.pause();
            
          })
        }
        
        
      },
      transitionEnd: function (index, elem) {
        
        if(index === 0 ){
          
          if(AudioState[0] !== true){
            
            audio.src = require(`../assets/music/${EpisodeOverView[eIndex].audio}.wav`);
            audio.load()
          }
          
          
        }else if(index > 0 && index <= EpisodeContents[eIndex].length){
          
          if(AudioState[index] !== true){
            audio.src = require(`../assets/music/${ImgPath[eIndex][index-1]}.wav`)
          audio.load()
          }
          
          
        }else{
          let audioPromise = audio.play();
        if(audioPromise !== undefined){
          audioPromise.then(_ =>{
            audio.pause();
          })
        }
          
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
      // let audioPromise = audio.play();
      //   if(audioPromise !== undefined){
      //     audioPromise.then(_ =>{
      //     //  audio.play();
      //     })
      //   }
      
      // audio.muted = true;
      
      
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