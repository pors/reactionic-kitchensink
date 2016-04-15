import React from 'react';
import { IonContent, IonButton, SetTimeoutMixin } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var Backdrop = React.createClass({
  contextTypes: {
    ionShowBackdrop: React.PropTypes.func
  },
  mixins: [SetTimeoutMixin],
  showBackdropForMS: function(ms) {
    this.clearTimeouts();
    this.context.ionShowBackdrop(true);
    this.setTimeout(() => this.context.ionShowBackdrop(false), ms);
  },
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <AbsoluteMiddle>
          <IonButton color="dark" type="outline" onClick={() => this.showBackdropForMS(1000)}>Show backdrop (1 sec)</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

export default Backdrop;
