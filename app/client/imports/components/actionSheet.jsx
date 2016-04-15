import React from 'react';
import { IonContent, IonButton } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var ActionSheet = React.createClass({
  contextTypes: {
    ionUpdateActionSheet: React.PropTypes.func
  },
  render() {
    var actionSheet = {
      titleText: 'ActionSheet Demo',
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      buttons: [
        { text: <span>Share <i className="icon ion-share"></i></span> },
        { text: <span>Move <i className="icon ion-arrow-move"></i></span> },
      ],
      cancel: function() {
        console.log('Cancelled!');
      },
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Shared!');
        }
        if (index === 1) {
          console.log('Moved!');
        }
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('Destructive Action!');
        return true;
      }
    };
    return (
      <IonContent customClasses="padding" {...this.props}>
        <AbsoluteMiddle>
          <IonButton color="dark" type="outline" onClick={() => this.context.ionUpdateActionSheet(actionSheet)}>Show ActionSheet</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

export default ActionSheet;
