import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Menu/>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
  background-color: blue;
  display: flex;
  justify-content: space-between;
`
