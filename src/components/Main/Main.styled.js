import styled from "styled-components";

export const Image = styled.img`
    width: 117px;
    height: 117px;
    border-radius: 100px;
`

export const Paragraph = styled.p`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: ${props => props.colorTheme ? '#fff' : '#2B3442'};
    margin: 0;
    margin-bottom: 2px;
`

export const Paragraph2 = styled(Paragraph)`
    font-weight: 400;
    font-size: 16px;
    color: #0079FF;
    margin-bottom: 20px;
`

export const Bio = styled(Paragraph2)`
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.colorTheme ? '#fff' : '#4B6A9B'};
    mix-blend-mode: normal;
    opacity: 0.75;
    margin-bottom: 0px;
`

export const Bio2 = styled(Bio)`
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.colorTheme ? '#fff' : '#697C9A'};
`