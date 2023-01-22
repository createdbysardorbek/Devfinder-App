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
            dark: false
        }
    }

    onChangeTheme = () => {
        this.setState({ dark: !this.state.dark })
    }

    render() {
        return (
            <div className={classNames('body', {
                dark: this.state.dark
            })}>
                <Header onChangeTheme={this.onChangeTheme} dark={this.state.dark} />
                <Search dark={this.state.dark} />
                <Main dark={this.state.dark} />
            </div>
        )
    }
}

export default App