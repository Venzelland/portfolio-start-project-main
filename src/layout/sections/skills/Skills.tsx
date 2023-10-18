import React from 'react';

import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'


const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente,tempore veniam? "
    },

    {
        iconId: "css",
        title: "css",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente,tempore veniam? "
    },

    {
        iconId: "react",
        title: "react",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente,tempore veniam? "
    },

    {
        iconId: "typescript",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente,tempore veniam? "
    },

    {
        iconId: "styledID",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente,tempore veniam? "
    },

    {
        iconId: "figma",
        title: "WEB DESIgN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque autem consequuntur cum cumque facilis illo ipsam laboriosam laudantium minus officiis pariatur perspiciatis possimus, quae quam sapiente,tempore veniam? "
    }
]
export const Skills = () => {
    return (
        <S.Skills id={ "skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
