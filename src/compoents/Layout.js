import React from "react";
import styled from "styled-components";
import { media } from "../lib/style-utils";
import oc from 'open-color'

const Wrapper = styled.div`
  position: relative;      
// background: #e9ecef;
  background:${oc.gray[0]};
    margin: 0 auto;
    display: flex;
  flex-direction: column;
    height:100vh;
    
    
    

${media.desktopL`
width: 1200px;
`}
${media.desktopS`
width: 990px;
`}
${media.tablet`
width: 768;
`}
${media.mobileTablet`
// margin-top: 1rem;
width: calc(100%-2rem);
`}
${media.mobilePhone`
// margin-top: 0.5rem;
width: calc(100%-1rem);
`}
`;
const MainLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default MainLayout;
