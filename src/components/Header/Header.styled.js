import styled from "styled-components"
import PropTypes from 'prop-types'

export const Title = styled.h1`
    font-family: 'Space Mono';
    font-weight: 700;
    font-size: 26px;
    color: ${props => props.colorTheme ? '#FFFFFF' : '#222731'};
`

export const Span = styled(Title)`
    font-size: 13px;
    color: ${props => props.colorTheme ? '#FFFFFF' : '#697C9A'};
    text-transform: uppercase;
    margin-right: 16px;
` 

Title.propTypes = {
    colorTheme: PropTypes.bool
}

Span.propTypes = {
    colorTheme: PropTypes.bool
}