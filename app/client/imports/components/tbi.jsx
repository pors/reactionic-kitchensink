import React from 'react';
import { IonContent } from 'reactionic';

var TBI = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <div className="text-center padding">
          <span className="badge badge-assertive">To Be Implemented</span>
        </div>
      </IonContent>
    );
  }
});

export default TBI;
