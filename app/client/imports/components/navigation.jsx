import React from 'react';
import { IonContent, IonButton, IonNavBackButton } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var Navigation = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <AbsoluteMiddle>
          <IonNavBackButton icon="ion-chevron-left"
                            iconPosition="left"
                            color="dark"
                            type="outline">
            Back</IonNavBackButton>
          <span className="padding" />
          <IonButton  icon="ion-chevron-right"
                      iconPosition="right"
                      link="/navigation/one"
                      color="dark"
                      type="outline">
            Forward</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

var NavigationOne = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <AbsoluteMiddle>
          <IonNavBackButton icon="ion-chevron-left"
                            iconPosition="left"
                            color="dark"
                            type="outline">
            Back</IonNavBackButton>
          <span className="padding" />
          <IonButton  icon="ion-chevron-right"
                      iconPosition="right"
                      link="/navigation/two"
                      color="dark"
                      type="outline">
            Forward</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

var NavigationTwo = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <AbsoluteMiddle>
          <IonNavBackButton icon="ion-chevron-left"
                            iconPosition="left"
                            color="dark"
                            type="outline">
            Back</IonNavBackButton>
          <span className="padding" />
          <IonButton  icon="ion-chevron-right"
                      iconPosition="right"
                      link="/navigation/three"
                      color="dark"
                      type="outline">
            Forward</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

var NavigationThree = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <AbsoluteMiddle>
          <IonNavBackButton icon="ion-chevron-left"
                            iconPosition="left"
                            color="dark"
                            type="outline">
            Back</IonNavBackButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

export { Navigation, NavigationOne, NavigationTwo, NavigationThree };
