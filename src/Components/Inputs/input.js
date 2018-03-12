import React from 'react';

const Input = (props) => {
    console.log(props);
    let inputTemp;
    switch (props.type) {
        case 'textarea':
            inputTemp = (<textarea
                onChange={e => props.getInputValue(e, props.name, props.stateName)}
                value={props.val}
                placeholder={props.placeholder} />);
            break;
        default:
            inputTemp = (<input
                type="text"
                onChange={e => props.getInputValue(e, props.name, props.stateName)}
                value={props.val}
                placeholder={props.placeholder} />);
    }
    return (
        <div className={`line ${props.propClass || ''}`}>
            {inputTemp}
        </div>
    );
};

export default Input;
