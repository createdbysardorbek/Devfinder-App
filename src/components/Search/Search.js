import React, { useState } from "react";
import PropTypes from 'prop-types'
import './Search.scss';
import classnames from 'classnames';
import { FiSearch } from 'react-icons/fi';
import { Input, Button } from './Search.styled';

function Search(props) {

    let [searchValue, setSearchValue] = useState('')


    let { dark, onChangeInfo } = props

    return (
        <div className={classnames('search', {
            dark: dark
        })}>
            <span>
                <FiSearch color="#0079FF" size={24} />
            </span>
            <Input onChange={(e) => setSearchValue(e.target.value)}
                background={dark} placeholder='Search GitHub username…'
                value={searchValue}
            />
            <Button onClick={() => {
                onChangeInfo(searchValue)
                setSearchValue('')
            }}>Search</Button>
        </div>
    )

}

Search.propTypes = {
    dark: PropTypes.bool,
}

export default Search