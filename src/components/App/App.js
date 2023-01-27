import { Component } from "react";
import Header from "../Header/Header";
import './App.scss'
import classNames from "classnames";
import Search from "../Search/Search";
import Main from "../Main/Main";


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dark: false,
            name: 'The Octocat',
            joinedTime: '2015-02-03',
            link: 'theoctocat',
            bio: 'This profile has no bio',
            repos: 8,
            followers: 3938,
            following: 9,
            location: 'San Francisco',
            blog: 'https://github.blog',
            twitter: 'Not Available',
            company: '@github',
            avatar: 'https://avatars.githubusercontent.com/u/583231?v=4'
        }
    }

    // https://api.github.com/users

    onChangeInfo = (value) => {
        fetch(`https://api.github.com/users/${value}`)
            .then(res => res.json())
            .then(data => {
                let { name, login, bio, public_repos, followers, following, location, blog, twitter, company, avatar_url, created_at } = data
                this.setState({ name: name, link: login, bio: bio, repos: public_repos, followers: followers, following: following, location: location, blog: blog, twitter: twitter, company: company, avatar: avatar_url, joinedTime: created_at })
            })

    }

    onChangeTheme = () => {
        this.setState({ dark: !this.state.dark })
    }

    render() {

        let { name, joinedTime, link, bio, repos, followers, following, location, blog, twitter, company, avatar } = this.state

        return (
            <div className={classNames('body', {
                dark: this.state.dark
            })}>
                <Header onChangeTheme={this.onChangeTheme} dark={this.state.dark} />
                <Search onChangeInfo={this.onChangeInfo} dark={this.state.dark} />
                <Main
                    dark={this.state.dark}
                    name={name}
                    joinedTime={joinedTime}
                    link={link}
                    bio={bio}
                    repos={repos}
                    followers={followers}
                    following={following}
                    location={location}
                    blog={blog}
                    twitter={twitter}
                    company={company}
                    avatar={avatar}
                />
            </div>
        )
    }
}

export default App