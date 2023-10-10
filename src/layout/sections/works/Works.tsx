import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.png"
import timerImg from "../../../assets/images/proj-2.png"
import {Container} from "../../../components/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from './Works_Styles'


// const tabsItems = ["All", "Landing page", "React", "spa"]

const tabsItems: Array<{title: string, status: TabsStatusType}>  = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }

]

const workData = [
    {
        title: 'Social Network',
        src: timerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: "spa"
    },

    {
        title: 'Timer',
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus, ] = useState("all")
    let filteredWorks = workData

    if (currentFilterStatus === "landing") {
        filteredWorks = workData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = workData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = workData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType ) {
        setCurrentFilterStatus(value)
    }


    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((w) => {
                        return <Work
                            title={w.title}
                            src={w.src}
                            text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>

    )
        ;
};

