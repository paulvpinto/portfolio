import React from 'react'
import { useContext } from 'react'
import { WorkContext } from '../context'
import Styled from 'styled-components'

//get all unique values
const getUnique = (items, value) => {
    if (items) {
        return [...new Set(items.map(item => item[value]))];
    }
    else {
        return [];
    }
};

const FilterContainer = Styled.div`
    width: 100%;
`;

const Nav = Styled.nav`
    position: fixed;
    width: 100%;
    height: 4rem;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    padding: 0 4rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat ( 4, 1fr );
    align-items: center;
    background-color: ${props => props.theme.palette.primary.main};
    z-index: 2;

    ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
    }
`;

const Filter = Styled.li`
        color: var(--mainBlack);
        padding: 20px 20px;
        width: 100%;
        text-align: center;
        text-transform: capitalize;
        font-family: Montserrat, sans-serif;
        font-weight: ${props => props.id === props.active ? "500" : "300"};
        font-size: ${props => props.id === props.active ? "110%" : "100%"};

        &:hover {
            color: ${props => props.theme.palette.primary.dark};
        }
`;

export default function WorksFilter({ work }) {
    const context = useContext(WorkContext);
    const {
        handleChange, type
    } = context;

    //get unique types
    let types = getUnique(context.works, 'type');
    //add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item) => {
        return (
            <Filter key={item.toString()} id={item.toString()} active={type} onClick={handleChange}>
                {item}
            </Filter>
        )
    });

    return (
        <FilterContainer activetype={type} >
            <Nav>
                <ul id='filterlist'>
                    {types}
                </ul>
            </Nav>
        </FilterContainer>
    )
}