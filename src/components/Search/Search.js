import { Component } from "react";
import PropTypes from 'prop-types'
import './Search.scss';
import classnames from 'classnames';
import { FiSearch } from 'react-icons/fi';
import { Input, Button } from './Search.styled';

class Search extends Component {

    render() {

        let { dark } = this.props

        return (
            <div className={classnames('search', {
                dark: dark
            })}>
                <span>
                    <FiSearch color="#0079FF" size={24} />
                </span>
                <Input background={dark} placeholder='Search GitHub username…' />
                <Button>Search</Button>
            </div>
        )
    }
}

Search.propTypes = {
    dark: PropTypes.bool,
}

export default Search