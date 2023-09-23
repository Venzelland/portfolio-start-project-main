import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Pavel</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={"21px"} viewBox={'0 0 21px 21px'} iconId={"instagram"}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={"21px"} viewBox={'0 0 21px 21px'} iconId={"telegram"}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={"21px"} viewBox={'0 0 21px 21px'} iconId={"vk"}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={"21px"} viewBox={'0 0 21px 21px'} iconId={"linkedin"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Pavel Volodko, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: coral;
  min-height: 20vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`


const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`