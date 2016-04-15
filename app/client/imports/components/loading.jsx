import React from 'react';
import { IonContent, IonSpinner, IonButton } from 'reactionic';
import { AbsoluteMiddle } from './utils/helpers.jsx';

var Loading = React.createClass({
  contextTypes: {
    ionShowLoading: React.PropTypes.func
  },
  render() {
    var customTemplate = <div><h2><IonSpinner icon="dots" customClasses="inloader spinner-light" /> Loading <IonSpinner icon="dots" customClasses="inloader spinner-light" /></h2><p>Please wait while processing.</p></div>

    return (
      <IonContent customClasses="padding text-center"
                  {...this.props}>
        <AbsoluteMiddle>
          <div className="padding">
            <IonButton color="dark"
                       type="outline"
                       onClick={() => this.context.ionShowLoading(true, {
                               backdrop:false,
                               delay:0,
                               duration: 3000,
                               customTemplate:null
                               })}>Show Loading (3 sec)
            </IonButton>
          </div>
          <div className="padding">
            <IonButton color="dark"
                       type="outline"
                       onClick={() => this.context.ionShowLoading(true, {
                                backdrop:true,
                                delay:0,
                                duration: 3000,
                                customTemplate:null
                                })}>Show Loading with Backdrop (3 sec)
            </IonButton>
          </div>
          <div className="padding">
            <IonButton color="dark"
                       type="outline"
                       onClick={() => this.context.ionShowLoading(true, {
                                backdrop:true,
                                delay:0,
                                duration: 3000,
                                customTemplate:customTemplate
                                })}>Show Loading Custom (3 sec)
            </IonButton>
          </div>
        </AbsoluteMiddle>
      </IonContent>
    )
  }
});

export default Loading;
