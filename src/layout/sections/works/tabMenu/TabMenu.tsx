import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyleMenu>
    );
};


const StyleMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`


`



