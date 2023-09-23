import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"code"}
                       title={"html5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente, tempore veniam?"}/>
                <Skill iconId={"css"}
                       title={"css"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente, tempore veniam? "}/>
                <Skill iconId={"react"}
                       title={"react"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente, tempore veniam? "}/>
                <Skill iconId={"typescript"}
                       title={"typescript"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente, tempore veniam?"}/>
                <Skill iconId={"styledID"}
                       title={"styled components"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente, tempore veniam? "}/>
                <Skill iconId={"figma"}
                       title={"WEB DESIgN  "}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente, tempore veniam?"}/>

            </FlexWrapper>

        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  background-color: black;
  min-height: 100vh;

`