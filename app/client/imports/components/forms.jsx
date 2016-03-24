import React from 'react';
import { IonContent, IonList, IonItem, IonItemCheckBox, IonItemToggle, IonItemRadio, IonSelect, IonIcon } from 'reactionic';
import IonRange from './ionRange'


var Forms = React.createClass({
  getInitialState: function () {
    return {
      checkedRadio: 'Button',
      checkedBox: false,
      checkedToggle: false,
      options:['blue','yellow','red'],
      selectValue:'',
      rangeValue: ''
    }
  },
  componentDidMount(){
    //get the value of the select by default
    this.setState({
      selectValue: this.refs.select.state.value,
      rangeValue: this.refs.range.state.value
    })
  },
  radioSelection(name, value) {
    this.setState({ checkedRadio:value });
  },
  changeValue(value){
    this.setState({ selectValue: value});
  },
  rangeSelection(value){
    this.setState({ rangeValue: value});
  },
  render() {
    var boxLabel    = 'Checkbox ' + (this.state.checkedBox ? 'checked!' : 'unchecked');
    var toggleLabel = 'Toggle ' + (this.state.checkedToggle ? 'on!' : 'off');
    var radioLabel  = 'Radio ' + this.state.checkedRadio;
    var selectLabel = 'Select ' + this.state.selectValue;
    var rangeLabel  = 'Range '+ this.state.rangeValue;
    return (
      <IonContent customClasses=""
                  {...this.props}>
        <IonList>
          <IonItem divider>Checkbox</IonItem>
          <IonItemCheckBox
              color="positive"
              label={boxLabel}
              checked={false}
              handleChange={ (toggle) => this.setState({ checkedBox:toggle }) }
          />
          <IonItem divider>Toggle</IonItem>
          <IonItemToggle
              color="positive"
              label={toggleLabel}
              checked={false}
              handleChange={ (toggle) => this.setState({ checkedToggle:toggle }) }
          />
          <IonItem divider>{radioLabel}</IonItem>
          <IonItemRadio
              name="group"
              label="Button"
              value="Button"
              icon="checkmark"
              handleChange={this.radioSelection}
              checked={this.state.checkedRadio === "Button"}
          />
          <IonItemRadio
              name="group"
              label="Shack"
              value="Shack"
              icon="checkmark"
              handleChange={this.radioSelection}
              checked={this.state.checkedRadio === "Shack"}
          />
          <IonItemRadio
              name="group"
              label="Gaga"
              value="Gaga"
              icon="checkmark"
              handleChange={this.radioSelection}
              checked={this.state.checkedRadio === "Gaga"}
          />
          <IonItem divider>{selectLabel}</IonItem>
          <IonSelect  ref='select'
                      label="Color"
                      options={this.state.options}
                      defaultValue='yellow'
                      handleChange={this.changeValue}>
          </IonSelect>
          <IonItem divider>{rangeLabel}</IonItem>
          <IonRange ref='range'
                    iconBeforeInput={<IonIcon icon='ios-sunny-outline'/>}
                    iconAfterInput={<IonIcon icon='ios-sunny'/>}
                    defaultValue={33}
                    handleChange={this.rangeSelection}
                    min={0}
                    max={100}>
          </IonRange>
        </IonList>

      </IonContent>
    )
  }
});

export default Forms;
