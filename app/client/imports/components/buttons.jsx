import React from 'react';
import { IonContent, IonButton } from 'reactionic';

var Buttons = React.createClass({
  render() {
    return (
      <IonContent customClasses=""
      {...this.props}>
        <div className="text-center">
          <div className="padding"><IonButton >Default</IonButton></div>
          <div className="padding"><IonButton color="stable">Stable</IonButton></div>
          <div className="padding"><IonButton expand="block">Block</IonButton></div>
          <div className=""><IonButton expand="full">Full Width</IonButton></div>
          <div className="padding"><IonButton type="outline">Outline</IonButton></div>
          <div className="padding"><IonButton type="clear">Clear</IonButton></div>
          <div className="padding"><IonButton size="small">Small</IonButton></div>
          <div className="padding"><IonButton size="large">Large</IonButton></div>
          <div className="padding"><IonButton icon="ion-home" iconPosition="left">Home</IonButton></div>
          <div className="padding"><IonButton icon="ion-star" iconPosition="left" color="positive">Favorites</IonButton></div>
          <div className="padding"><IonButton icon="ion-chevron-right" iconPosition="right" color="calm">Learn More</IonButton></div>
          <div className="padding"><IonButton icon="ion-chevron-left" iconPosition="left" color="dark" type="clear">Back</IonButton></div>
          <div className="padding"><IonButton icon="ion-gear-a" /></div>
          <div className="padding"><IonButton icon="ion-settings" type="icon-clear" /></div>
          <div className="padding"><IonButton icon="ion-navicon" iconPosition="right" color="balanced" type="outline">Menu</IonButton></div>
        </div>
      </IonContent>
    )
  }
});

export default Buttons;






