import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
  padding: 97px 0;
  position: relative;
`

const Skill = styled.div`
  width: 380px;
  flex-grow: 1;
  padding: 42px 20px 19px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;

  }
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    width: 80px;
    height: 80px;
    display: inline-block;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;`

export const S = {
    Skills,
    Skill,
    SkillText,
    SkillTitle,
    IconWrapper,

}