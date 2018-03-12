
import React, { Component } from 'react';
import './App.sass';
import { Header } from './Components/header/Header';
import Description from './Components/description/Description';
import Ingredients from './Components/ingredients/Ingredients';
import Options from './Components/options/Options';
import Glasses from './Components/glasses/Glasses';

class App extends Component {
    static defaultProps = {
        activeTab: 'description',
    }
    state = {
        description: {
            cocktailname: '',
            alternativename: '',
            cocktaildescription: '',
            instructions: '',
        },
    }
    getInputValue(e, name, stateName) {
        e.preventDefault();
        this.setState({
            [stateName]: {
                [name]: e.target.value,
            },
        });
    }
    componentDidMount() {
        this.props.fetchData('./uiData.json');
    }
    render() {
        const { hasErrored, loading, data } = this.props.getData;
        if (hasErrored) {
            return <div>Учись общению с сервером!!!</div>;
        }
        if (loading) {
            return <p>Loading…</p>;
        }
        let bodyTemplite;

        switch (this.props.activeTab) {
            case 'description':
                bodyTemplite = (<Description
                    data={data}
                    val={this.state.description}
                    getInputValue={this.getInputValue.bind(this)}
                    {...this.props} />);
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
                <Header
                    appState={this.state}
                    tabsName={data.tabsName}
                    activeTab={this.props.activeTab}
                    changeCurrentTab={this.props.changeCurrentTab} />
                <div className="App-main">
                    {bodyTemplite}
                </div>
            </div>
        );
    }
}

export default App;
