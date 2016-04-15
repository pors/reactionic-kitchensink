import React from 'react';
import { IonContent, IonButton } from 'reactionic';

var Popup = React.createClass({
  contextTypes: {
    ionUpdatePopup: React.PropTypes.func
  },
  render() {
    var ionUpdatePopup = this.context.ionUpdatePopup;
    return (
      <IonContent customClasses="padding" {...this.props}>
        <IonButton color="dark" type="outline" expand="block"
                   onClick={() => ionUpdatePopup({
                            popupType: 'show',
                            title: 'A Popup',
                            template: 'Here\'s a quick popup.',
                            buttons: [{
                              text: 'Close me',
                              type: 'button-positive',
                              onTap: function() {
                                console.log('Closed');
                              }
                            }]
                            })}>Show Popup</IonButton>

        <IonButton color="dark" type="outline" expand="block"
                   onClick={() => ionUpdatePopup({
                            popupType: 'alert',
                            title: 'An Alert',
                            template: 'This is an alert!',
                            okText: 'Got It.',
                            onOk: function() {
                              console.log('Closed alert');
                            }
                            })}>Show Alert</IonButton>
        
        <IonButton color="dark" type="outline" expand="block"
                   onClick={() => ionUpdatePopup({
                            popupType: 'confirm',
                            title: 'Are you sure?',
                            template: <span>Are you <strong>really</strong> sure?</span>,
                            cancelType: 'button-light',
                            onOk: function() {
                              console.log('Confirmed');
                            },
                            onCancel: function() {
                              console.log('Cancelled');
                            }
                            })}>Show Confirm</IonButton>
        
        <IonButton color="dark" type="outline" expand="block"
                   onClick={() => ionUpdatePopup({
                            popupType: 'prompt',
                            title: 'Security Check',
                            template: 'Please enter your password',
                            okText: 'Submit',
                            cancelType: 'button-light',
                            inputType: 'password',
                            inputPlaceholder: 'Your Password',
                            onOk: function(e, value) {
                              console.log('submitted', value);
                            }
                            })}>Show Prompt</IonButton>
      </IonContent>
    )
  }
});

export default Popup;
