import React from 'react';
import { IonContent } from 'reactionic';

var About = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <h2>About React-Ionic</h2>
        <p>React-Ionic is an open source library for implementing hybrid mobile apps (iOS and Android).</p>
        <p>For more information go to <a href="http://pors.github.io/reactionic/">pors.github.io/reactionic</a></p>
      </IonContent>
    );
  }
});

export default About;
