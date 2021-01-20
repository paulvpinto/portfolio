import React from 'react'
import WorksFilter from './WorksFilter'
import WorksList from './WorksList'
import { withWorkConsumer } from '../context'
import Loading from './Loading'
import Styled from 'styled-components'
import TopContainer from '../Components/TopContainer'

const Container = Styled.div`
    padding: 4rem;
    background-color: ${props => props.theme.palette.secondary.main};
`;

function WorksContainer({ context }) {
    const { loading, sortedWorks, works } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <TopContainer title='My Works'/>

            <Container>
                <WorksFilter works={works} />
                <WorksList works={sortedWorks} />
            </Container>
        </>
    );
}

export default withWorkConsumer(WorksContainer)