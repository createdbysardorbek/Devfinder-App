import styled from "styled-components";

export const PartTwo = styled.div`
    width: 450px;
    height: 100%;
    background: transparent;
`

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 85px;
    background: ${props => props.dark ? '#141D2F' : '#F6F8FF'};
    border-radius: 10px;
    margin-bottom: 35px;
`

export const Header = styled.h3`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: ${props => props.dark ? '#fff' : '#4B6A9B'};
    margin: 0;
    margin-bottom: 1px;
`

export const Span = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    text-transform: uppercase;
    color: ${props => props.dark ? '#fff' : '#2B3442'};
`

export const Info = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.dark ? '#fff' : '#4B6A9B'};
    margin-left: 19px;
`

export const Links = styled.section`
    display: flex;
    row-gap: 19px;
    column-gap: 63px;
    flex-wrap: wrap;
    width: 100%;
    height: 64px;
`