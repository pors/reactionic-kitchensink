import React from 'react';
import { IonContent, IonList, IonItem, IonItemCheckBox, IonItemToggle, IonItemRadio } from 'reactionic';

var Forms = React.createClass({
  getInitialState: function () {
    return {
      checkedRadio: 'Button',
      checkedBox: false,
      checkedToggle: false
    }
  },
  radioSelection(name, value) {
    this.setState({ checkedRadio:value });
  },
  render() {
    var boxLabel = 'Checkbox ' + (this.state.checkedBox ? 'checked!' : 'unchecked');
    var toggleLabel = 'Toggle ' + (this.state.checkedToggle ? 'on!' : 'off');
    var radioLabel = 'Radio ' + this.state.checkedRadio;
    return (
      <IonContent customClasses=""
                  hasHeader={true}
                  hasFooter={false}
                  scroll={true}
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
        </IonList>
        
      </IonContent>
    )
  }
});

export default Forms;
