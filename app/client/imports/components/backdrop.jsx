import React from 'react';
import { IonContent, IonButton, SetTimeoutMixin } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var Backdrop = React.createClass({
  mixins: [SetTimeoutMixin],
  ionShowBackdropForMS: function(ms) {
    this.clearTimeouts();
    this.props.ionShowBackdrop(true);
    this.setTimeout(() => this.props.ionShowBackdrop(false), ms);
  },
  render() {
    return (
      <IonContent customClasses="padding"
                  hasHeader={true}
                  {...this.props}>
        <AbsoluteMiddle>
          <IonButton color="dark" type="outline" onClick={() => this.ionShowBackdropForMS(1000)}>Show backdrop (1 sec)</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

export default Backdrop;
