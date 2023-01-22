import { Component } from "react";
import styles from './Header.module.scss'
import PropTypes from 'prop-types'
import { Title, Span } from "./Header.styled";
import { BsFillMoonFill } from 'react-icons/bs'
import { CiLight } from 'react-icons/ci'


class Header extends Component {

    render() {

        let { dark, onChangeTheme } = this.props

        return (
            <div className={styles.header}>
                <Title colorTheme={dark}>devfinder</Title>
                <div className={styles.theme} onClick={() => onChangeTheme()}>
                    <Span colorTheme={dark}>{dark ? 'light' : 'dark'}</Span>
                    {dark ? <CiLight color="white" size='20px' /> : <BsFillMoonFill size='20px' />}
                </div>
            </div>
        )
    }



}

Header.propTypes = {
    dark: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}



export default Header



