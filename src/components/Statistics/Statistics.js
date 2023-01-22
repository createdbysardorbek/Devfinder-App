import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import { PartTwo, Section, Header, Span, Info, Links } from './Statistics.styled';
import { MdLocationPin } from 'react-icons/md';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

class Statistics extends Component {

    render() {

        let { darkTheme } = this.props

        return (
            <div className={styles.statistics}>
                <PartTwo>
                    <Section dark={darkTheme}>
                        <div>
                            <Header dark={darkTheme}>Repos</Header>
                            <Span dark={darkTheme}>8</Span>
                        </div>
                        <div>
                            <Header dark={darkTheme}>Followers</Header>
                            <Span dark={darkTheme}>3938</Span>
                        </div>
                        <div>
                            <Header dark={darkTheme}>Following</Header>
                            <Span dark={darkTheme}>9</Span>
                        </div>
                    </Section>
                    <Links>

                        <div className={styles.top}>
                            <div>
                                <MdLocationPin color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>San Francisco</Info>
                            </div>
                            <div>
                                <FaTwitter color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>Not Available</Info>
                            </div>
                        </div>

                        <div className={styles.top}>
                            <div>
                                <FaLink color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>https://github.blog</Info>
                            </div>
                            <div>
                                <HiOutlineBuildingOffice2 color={darkTheme ? 'white' : '#4B6A9B'} size={20} />
                                <Info dark={darkTheme}>@github</Info>
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