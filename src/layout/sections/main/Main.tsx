import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <SlyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Pavel Volodko</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </SlyledMain>
    );
};

const SlyledMain = styled.div`
  min-height: 100vh;
  background-color: #ceca9f;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
