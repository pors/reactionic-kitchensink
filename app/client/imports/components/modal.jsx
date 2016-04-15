import React from 'react';
import { IonContent, IonModal, IonButton } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var Modal = React.createClass({
  contextTypes: {
    ionShowModal: React.PropTypes.func
  },
  render() {
    var demoModal = <DemoModal {...this.props} />;

    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <AbsoluteMiddle>
          <IonButton color="dark" type="outline" onClick={() => this.context.ionShowModal(demoModal)}>Show modal</IonButton>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

var DemoModal = React.createClass({
  render() {
    return (
      <IonModal {...this.props}
                customTemplate={false}
                title="Some modal"
                barClasses="bar-dark"
                customClasses="">
        <div>Content goes here</div>
      </IonModal>
    );
  }
});


export default Modal;
