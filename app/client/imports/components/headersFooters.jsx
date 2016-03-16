import React from 'react';
import { IonContent, IonFooterBar, IonSubHeaderBar, IonSubFooterBar } from 'reactionic';

var HeadersFooters = React.createClass({
  render() {
    return (
      <div>
        <IonSubHeaderBar {...this.props}><h2 className="title">Subheader</h2></IonSubHeaderBar>
        <IonContent customClasses="padding"
                    {...this.props}>
          <div>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
            <p>Content here...</p>
          </div>
        </IonContent>
        <IonSubFooterBar {...this.props}><h2 className="title">Subfooter</h2></IonSubFooterBar>
        <IonFooterBar customClasses="bar-dark" {...this.props}><h1 className="title">Footer</h1></IonFooterBar>
      </div>
    );
  }
});

export default HeadersFooters;
