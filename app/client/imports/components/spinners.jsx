import React from 'react';
import { IonContent, IonSpinner } from 'reactionic';

var Spinners = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
      {...this.props}>
      <div className="text-center">
        <div className="padding">iOS</div><div><IonSpinner icon="ios" /></div>
        <div className="padding">iOS Small</div><div><IonSpinner icon="ios-small" /></div>
        <div className="padding">Android</div><div><IonSpinner icon="android" /></div>
        <div className="padding">Bubbles</div><div><IonSpinner icon="bubbles" /></div>
        <div className="padding">Circles</div><div><IonSpinner icon="circles" /></div>
        <div className="padding">Crescent</div><div><IonSpinner icon="crescent" /></div>
        <div className="padding">Dots</div><div><IonSpinner icon="dots" /></div>
        <div className="padding">Lines</div><div><IonSpinner icon="lines" /></div>
        <div className="padding">Ripple</div><div><IonSpinner icon="ripple" /></div>
        <div className="padding">Spiral</div><div><IonSpinner icon="spiral" /></div>
      </div>
      </IonContent>
    )
  }
});

export default Spinners;






