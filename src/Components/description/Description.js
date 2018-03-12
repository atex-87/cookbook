
import React, { Component } from 'react';
import './description.sass';
import Pic from './img/pic.png';
import Notepad from './img/notepad.png';
import Input from '../Inputs/input';

export default class Description extends Component {

    state = {
        file: null,
        imagepreviewUrl: null,
    }
    getPhoto(e) {
        e.preventDefault();
        const reader = new FileReader();
        const files = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: files,
                imagePreviewUrl: reader.result,
            });
        };
        reader.readAsDataURL(files);
    }

    render() {
        const { description, tabsName } = this.props.data;
        return (
            <div className="main_wrapper tab_description" id={tabsName.en[0]}>
                <p className="headler"><img alt="" src={Notepad} />{tabsName.ru[0]}</p>
                <div className=" col-3">
                    <div className="img_wrapper"><img alt="" src={this.state.imagePreviewUrl || Pic} width="100" /></div>
                    <label htmlFor="description_file" className="bottom clear"> Загрузить<input type="file" name="description_file" onChange={e => this.getPhoto(e)} /></label>
                </div>
                {Object.keys(description).map((key, i) => {
                    const propClass = i === 3 ? 'col-12' : 'col-9';
                    return (<Input
                        {...description[key]}
                        name={key}
                        stateName={tabsName.en[0]}
                        val={this.props.val[key]}
                        getInputValue={this.props.getInputValue.bind(this)}
                        propClass={propClass} />);
                })}
                <div className="right clear"><a className="bottom next">{tabsName.ru[1]}</a><span className="spanext" /></div>
            </div>
        );
    }
}
