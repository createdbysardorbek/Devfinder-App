import { Component } from "react";
import classname from 'classnames';
import PropTypes from 'prop-types';
import './Main.scss';
import { Image, Paragraph, Paragraph2, Bio } from './Main.styled';
import githubImg from './img/github.jpg'
import Statistics from "../Statistics/Statistics";


class Main extends Component {

    render() {

        let { dark } = this.props

        return (
            <div className={classname('main', { dark: dark })}>
                <div className="profile">
                    <Image src={githubImg} />
                    <div className="info">
                        <div>
                            <Paragraph colorTheme={dark}>The Octocat </Paragraph>
                            <Paragraph2 colorTheme={dark}>@octocat</Paragraph2>
                            <Bio colorTheme={dark}>This profile has no bio</Bio>
                        </div>
                        <div>
                            <Bio colorTheme={dark}>Joined 25 Jan 2011</Bio>
                        </div>
                    </div>
                </div>
                <Statistics darkTheme={dark} />
            </div>
        )
    }
}

Main.propTypes = {
    dark: PropTypes.bool.isRequired,
}

export default Main