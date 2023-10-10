import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
}


export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyleMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link as={'button'} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</Link>
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



