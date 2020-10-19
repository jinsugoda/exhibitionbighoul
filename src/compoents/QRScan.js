import React from 'react'
import QrReader from "react-qr-scanner";
import {  useDispatch } from "react-redux";
import {gIndex} from '../reducer/varient'
import styled from 'styled-components'

const Wrapper = styled.div`
position:relative;
display: flex;
justify-content:center;
align-items:center;
`

function QRScan({history}){
 const dispatch = useDispatch();

    const scanHandler = (data)=>{
        if(data !== null){
            dispatch(gIndex(data))
            history.push('/contents')
        }
        dispatch(gIndex(0))
            history.push('/entry')
        console.log(data)
    }
    const errorHandler = (err)=>{
        console.log(err)
    }
    const previewStyle = { height: '100%', width: '100%' };
    return(
        <Wrapper>
            <QrReader
            delay={1000}
            style={previewStyle}
            onError={errorHandler}
            onScan={scanHandler}
            />
        </Wrapper>
    
    )
}
export default QRScan