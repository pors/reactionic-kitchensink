import React from 'react';
import { IonContent, IonNavBackButton } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var SideMenus = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding" {...this.props}>
        <AbsoluteMiddle>
          <IonNavBackButton icon="ion-chevron-left"
                            color="dark"
                            type="outline"
          > Back to Index</IonNavBackButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

export default SideMenus;
