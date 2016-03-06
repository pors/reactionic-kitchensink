import React from 'react';
import { IonContent, IonHeaderBar, IonButton, IonTabs, IonTab } from 'reactionic';

var Tabs = React.createClass({
  render() {
    var backButton = (
      <IonButton icon="ion-ios-arrow-back"
                 color=""
                 type="clear"
                 link="/"
      />
    );

    return (
      <div>
        <IonHeaderBar customClasses="bar-dark"
                      title="Tabs"
                      leftButton={backButton}
                      rightButton={null}
                      {...this.props}
        /> 
        {this.props.children}
        <IonTabs platform={this.props.platform} customClasses="tabs-light tabs-icon-top">
      	  <IonTab icon="ios-home" to="/tabs/one" label="Tab 1" />
          <IonTab icon="ios-star" to="/tabs/two" label="Tab 2" />
      	  <IonTab icon="ios-heart" to="/tabs/three" label="Tab 3" />
      	  <IonTab icon="ios-gear" to="/tabs/four" label="Tab 4" />
        </IonTabs>
      </div>
    );
  }
});

var TabsOne = React.createClass({
  render() {
    return (
        <IonContent customClasses="padding"
                    hasHeader={true}
                    hasTabs={true}
                    {...this.props}>
          <h3>Tab 1</h3>
        </IonContent>
    );
  }
});

var TabsTwo = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  hasHeader={true}
                  hasTabs={true}
                  {...this.props}>
        <h3>Tab 2</h3>
      </IonContent>
    );
  }
});

var TabsThree = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  hasHeader={true}
                  hasTabs={true}
                  {...this.props}>
        <h3>Tab 3</h3>
      </IonContent>
    );
  }
});

var TabsFour = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  hasHeader={true}
                  hasTabs={true}
                  {...this.props}>
        <h3>Tab 4</h3>
      </IonContent>
    );
  }
});


export { Tabs, TabsOne, TabsTwo, TabsThree, TabsFour };
