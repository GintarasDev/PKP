import React from 'react';
import './InputField.scss';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        // Firefox 1.0+
        this.isFirefox = typeof InstallTrigger !== 'undefined';
        // Chrome 1 - 79
        this.isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        // Edge (based on chromium) detection
        this.isEdgeChromium = this.isChrome && (navigator.userAgent.indexOf("Edg") != -1);
    }

    render() {
        if(this.props.type === "area")
        {
            return (
                <textarea value={this.props.value} id={this.props.id} onChange={this.props.onChange} className={"o-InputField " + this.props.class} placeholder={this.props.placeholder} style={{width: this.props.width, height: this.props.height, textAlign: "left"}} />
            );
        } else if(this.props.type === "date") {
            return (
                    <span className={this.isEdgeChromium ? " o-EdgeChromium" : (this.isChrome ? " o-Chrome" : (this.isFirefox ? " o-Firefox" : ""))} >
                        <input required={"required"} type={'date'} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} className={"o-InputEmpty " + this.props.class} style={this.isFirefox ? {width: this.props.width + "2rem", height: this.props.height} : {width: this.props.width, height: this.props.height}}/>
                    </span>
            );
        }else if(this.props.type === "date-range") {
            return (
                <div className={'o-DoubleDateInput ' + this.props.class} style={this.isFirefox ? {width: this.props.width + "2rem", height: this.props.height} : {width: this.props.width + "2rem", height: this.props.height}} >
                    <InputField onChange={this.props.onChangeFrom} value={this.props.valueFrom} type={'date'} width={'14rem'}/>
                    <span>{" - "}</span>
                    <InputField onChange={this.props.onChangeTo} value={this.props.valueTo}  type={'date'} width={'14rem'}/>
                </div>
            );
        }
        else if(this.props.type === "time") {
            return (
                <div className={'o-InputEmpty ' + this.props.class} style={{width: this.props.width, height: this.props.height}} >
                    <input required={"required"} type={'time'} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} className={"o-InputField " + this.props.class} style={this.isFirefox ? {width: this.props.width + "2rem", height: this.props.height} : {width: this.props.width, height: this.props.height}}/>
                </div>
            );
        } else if(this.props.type === "checkbox") {
            return (
                <div className={' ' + this.props.class} >
                    <label className="o-Checkbox">
                        <input type="checkbox" />
                        <span className="checkmark" style={{width: this.props.width, height: this.props.width}}>
                            <img style={{width: this.props.width, height: this.props.width}} src={require("../Assets/checkmark.svg")} alt={this.props.title}/>
                        </span>
                        <span className={"o-LabelText"}>
                            {this.props.title}
                        </span>
                    </label>
                </div>
            );
        } else if(this.props.type === "date") {
            return (
                <input type={'date'} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} className={"o-InputEmpty " + this.props.class} style={{width: this.props.width}}/>
            );
        } else {
            return (
                <input value={this.props.value} id={this.props.id} onChange={this.props.onChange} className={"o-InputField " + this.props.class} type={this.props.type} placeholder={this.props.placeholder} style={{width: this.props.width, height: this.props.height}}/>
            );
        }
    }

}

export default InputField;
