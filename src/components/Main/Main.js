import { Component } from "react";
import classname from 'classnames';
import PropTypes from 'prop-types';
import './Main.scss';
import { Image, Paragraph, Paragraph2, Bio } from './Main.styled';
import Statistics from "../Statistics/Statistics";


class Main extends Component {

    render() {

        let { dark, name, joinedTime, link, bio, repos, followers, following, location, blog, twitter, company, avatar } = this.props

        return (
            <div className={classname('main', { dark: dark })}>
                <div className="profile">
                    <Image src={avatar} alt='Not available' />
                    <div className="info">
                        <div>
                            <Paragraph colorTheme={dark}>{name ? name : 'Not available'}</Paragraph>
                            <Paragraph2 colorTheme={dark}>@{link ? link : 'Not available'}</Paragraph2>
                            <Bio colorTheme={dark}>{bio ? bio : 'This profile has no bio'}</Bio>
                        </div>
                        <div>
                            <Bio colorTheme={dark}>{joinedTime ? `Joined ${joinedTime.toString().slice(0, 10)}` : 'Not available'}</Bio>
                        </div>
                    </div>
                </div>
                <Statistics
                    darkTheme={dark}
                    repos={repos}
                    followers={followers}
                    following={following}
                    location={location}
                    blog={blog}
                    twitter={twitter}
                    company={company}
                />
            </div>
        )
    }
}

Main.propTypes = {
    dark: PropTypes.bool.isRequired,
}

export default Main