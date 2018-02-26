import React, { Component } from 'react';
import './description.sass';
import Pic from './img/pic.png';
import Notepad from './img/notepad.png';

export default class Description extends Component {

    state = {
        file: null,
        imagePreviewUrl: null,
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
        return (
            <div className="main_wrapper tab_description" id={this.props.tabsName.en[0]}>
                <p className="headler"><img alt="" src={Notepad} />{this.props.tabsName.ru[0]}</p>
                <div className=" col-3">
                    <div className="img_wrapper"><img alt="" src={this.state.imagePreviewUrl || Pic} width="100" /></div>
                    <label htmlFor="description_file" className="bottom clear"> Загрузить<input type="file" name="description_file" onChange={e => this.getPhoto(e)} /></label>
                </div>
                <div className="col-9">
                    <div className="line"><input type="text" onChange={e => this.props.getInputValue(e, 'cocktailName')} value={this.state.cocktailName} placeholder="Название коктейля" /></div>
                    <div className="line"><input type="text" onChange={e => this.props.getInputValue(e, 'alternativeName')} value={this.state.alternativeName} placeholder="Альтернативное название через запятую" /></div>
                    <div className="line clear"><textarea onChange={e => this.props.getInputValue(e, 'cocktailDescription')} value={this.state.cocktailDescription} placeholder="Краткое описание" className="line" /></div>
                </div>
                <div className="line"><textarea onChange={e => this.props.getInputValue(e, 'instructions')} placeholder="Инструкция для приготовления" value={this.state.instructions} className="line" /></div>
                <div className="right clear"><a onClick={() => this.props.changeCurrentTab(this.props.tabsName.en[1])} className="bottom next">{this.props.tabsName.ru[1]}</a><span className="spanext" /></div>
            </div>
        );
    }
}
