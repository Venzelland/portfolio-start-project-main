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
  //margin-bottom: 40px;
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;    
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`


`



