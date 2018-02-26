import React, { Component } from 'react';
import './App.sass';
import Header from './Components/header/Header';
import Description from './Components/description/Description';
import Ingredients from './Components/ingredients/Ingredients';
import Options from './Components/options/Options';
import Glasses from './Components/glasses/Glasses';

class App extends Component {
    static defaultProps = {
        tabsName: {
            en: [
                'description',
                'ingredients',
                'options',
                'glasses',
            ],
            ru: [
                'Описание',
                'Ингредиенты',
                'Параметры',
                'Бокалы',
            ],

        },
    }

    state = {
        loading: false,
        activeTab: 'description',
        cocktailName: '',
        alternativeName: '',
        cocktailDescription: '',
        instructions: '',
    };

    componentDidMount() {
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    changeCurrentTab(tab) {
        this.setState({
            activeTab: tab,
        });
    }

    getInputValue(e, name) {
        e.preventDefault();
        this.setState({
            [name]: e.target.value,
        });
    }

    render() {
        const props = {
            activeTab: this.state.activeTab,
            changeCurrentTab: this.changeCurrentTab.bind(this),
            tabsName: this.props.tabsName,
            getInputValue: this.getInputValue.bind(this),
        };
        let bodyTemplite;
        switch (props.activeTab) {
            case 'description':
                bodyTemplite = <Description {...props} />;
                break;
            case 'ingredients':
                bodyTemplite = <Ingredients />;
                break;
            case 'options':
                bodyTemplite = <Options />;
                break;
            case 'glasses':
                bodyTemplite = <Glasses />;
                break;
            default:
                bodyTemplite = <div>Не здоровая херня, однако</div>;
        }

        return (
            <div className="App">
                <Header {...props} />
                <div className="App-main">
                    {bodyTemplite}
                </div>
            </div>
        );
    }
}

export default App;
