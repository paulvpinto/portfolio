import { 
    Button, 
    Typography,
    Grid,
    Paper,
} from '@material-ui/core'

import styled from 'styled-components'
import Theme from '../Constants/Theme'

import React, {Component} from 'react'
import Work from './Work'
import Loading from './Loading'
import { WorkContext } from '../context'

const Heading = styled.div`
    height: 5vh;
    background-color: var(--mainYellow);
    display: grid;
    align-content: center;
    justify-content: center;

`;

const Section = styled.div`
    background-color: var(--mainYellow);
    display: grid;
    padding-top: 2rem;
    padding-bottom: 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;

    ${props => props.theme.breakpoints.down("sm")} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default class FeatureWorks extends Component {
    static contextType = WorkContext;

    render () {
        let { loading, featuredWorks: works } = this.context;

        works = works.map(work => {
            return <Work key={work.id} work={work} />
        })

        return (
            <>
                <Heading>
                    <Typography variant="h6">
                        Check Out My Works Below
                    </Typography>
                </Heading>
                <Section>
                    {loading ? <Loading /> : works}
                </Section>    
            </>
        )
    }  
}