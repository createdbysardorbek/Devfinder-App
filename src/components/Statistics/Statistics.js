import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import { PartTwo, Section, Header, Span, Info, Links } from './Statistics.styled';
import { MdLocationPin } from 'react-icons/md';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

class Statistics extends Component {

    render() {

        let { darkTheme, repos, followers, following, location, blog, twitter, company  } = this.props

        if (blog.startsWith('https://')){
            blog = blog.replace('https://', '')
        }if (blog.endsWith('.netlify.app')) {
            blog = blog.replace('.netlify.app', '')
        }if (blog.length > 20) {
            blog = blog.slice(0, 20)
        }else {
            blog = blog
        }

        return (
            <div className={styles.statistics}>
                <PartTwo>
                    <Section dark={darkTheme}>
                        <div>
                            <Header dark={darkTheme}>Repos</Header>
                            <Span dark={darkTheme}>{repos ? repos : 0}</Span>
                        </div>
                        <div>
                            <Header dark={darkTheme}>Followers</Header>
                            <Span dark={darkTheme}>{followers ? followers : 0}</Span>
                        </div>
                        <div>
                            <Header dark={darkTheme}>Following</Header>
                            <Span dark={darkTheme}>{following ? following : 0}</Span>
                        </div>
                    </Section>
                    <Links>

                        <div className={styles.top}>
                            <div>
                                <MdLocationPin color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>{location ? location : 'Not available'}</Info>
                            </div>
                            <div>
                                <FaTwitter color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>{twitter ? twitter : 'Not available'}</Info>
                            </div>
                        </div>

                        <div className={styles.top}>
                            <div>
                                <FaLink color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>{blog ? blog : 'Not available'}</Info>
                            </div>
                            <div>
                                <HiOutlineBuildingOffice2 color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>{company ? company : 'Not available'}</Info>
                            </div>
                        </div>
                    </Links>
                </PartTwo>
            </div>
        )
    }
}

Statistics.propTypes = {
    darkTheme: PropTypes.bool.isRequired,
}

export default Statistics