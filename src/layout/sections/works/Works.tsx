import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.png"
import timerImg from "../../../assets/images/proj-2.png"
import {HeaderMenu} from "../../header/headerMenu/HeaderMenu";
import {theme} from "../../../styles/Theme";


const worksItems = ["All", "Landing page", "react", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <HeaderMenu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      src={timerImg}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

                <Work title={"Timer"}
                      src={socialImg}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: cyan;
  color: ${theme.colors.text};
`