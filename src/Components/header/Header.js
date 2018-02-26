import React, { Component } from 'react';
import './header.sass';

const numbers = [1, 2, 3, 4, 5];
export default class Header extends Component {
    changeCurrentTab(e) {
        this.props.changeCurrentTab(e);
    }
    render() {
        const bottonTemplite = this.props.tabsName.en.map((self, i) => <div key={numbers.i} onClick={() => this.changeCurrentTab(self)} className={`header-nav-botton  ${this.props.activeTab === self ? `active ${self}` : self}`}><i />{this.props.tabsName.ru[i]}</div>);

        return (
            <div className="header">
                <div className="header-nav">
                    {bottonTemplite}
                </div>
            </div>
        );
    }
}
