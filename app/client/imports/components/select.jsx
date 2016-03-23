import React from 'react';
import { IonContent } from 'reactionic';
import { IonSelect } from 'reactionic';


var options = ['yellow','blue','red'];

var Select = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <h2>About React-Ionic</h2>
        <IonSelect  label="Color"
                    options={options}
                    defaultValue='blue'
                    customClasses='anotherClass'>
                    </IonSelect>
      </IonContent>
    );
  }
});

export default Select;
