import React from 'react';
import { IonContent, IonIcon } from 'reactionic';

var Popover = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding" {...this.props}>
        <p>Click the more info icon in the top right.</p>
      </IonContent>
    );
  }
});

var DemoPopover = React.createClass({
  render() {
    return (
        <div className="content">
          <div className="list">
            <a className="item item-icon-right" href="https://facebook.github.io/react/" target="_blank">
              React
              <IonIcon icon="ios-arrow-right" />
            </a>            
            <a className="item item-icon-right" href="http://ionicframework.com/" target="_blank">
              Ionic
              <IonIcon icon="ios-arrow-right" />
            </a>
            <a className="item item-icon-right" href="http://www.meteor.com/" target="_blank">
              Meteor
              <IonIcon icon="ios-arrow-right" />
            </a>
            <a className="item item-icon-right" href="http://reactionic.github.io/" target="_blank">
              React-Ionic
              <IonIcon icon="ios-arrow-right" />
            </a>
          </div>
        </div>
    );
  }
});


export default Popover;
export { DemoPopover };
