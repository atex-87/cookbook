import React from 'react';
import './header.sass';

const numbers = [1, 2, 3, 4, 5];
export const Header = (props) => {
    const bottonTemplite = props.tabsName.en.map((self, i) => (<div key={numbers.i} onClick={() => props.changeCurrentTab(self, props.appState.self)} className={`header-nav-botton  ${props.activeTab === self ? `active ${self}` : self}`}>
        <i />{props.tabsName.ru[i]}
    </div>),
    );
    return (
        <div className="header">
            <div className="header-nav">
                {bottonTemplite}
            </div>
        </div>
    );
};

