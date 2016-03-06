import React from 'react';
import { IonContent, IonFooterBar, IonSubHeaderBar } from 'reactionic';

var HeadersFooters = React.createClass({
  render() {
    return (
      <div>
        <IonSubHeaderBar><h2 className="title">Subheader</h2></IonSubHeaderBar>
        <IonContent customClasses="padding"
                    hasHeader={true}
                    hasSubheader={true}
                    hasFooter={true}
                    scroll={true}
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
        <IonFooterBar><h1 className="title">Footer</h1></IonFooterBar>
      </div>
    );
  }
});

export default HeadersFooters;
