import React from 'react';
import { IonBody } from 'reactionic';
import { getPlatform } from './utils/helpers.jsx';

var App = React.createClass({
  getInitialState: function() {
    return {platformOverride: this.props.location.query.platformOverride};
  },
  componentWillReceiveProps: function(newProps) {
    var newPlatformOverride = newProps.location.query.platformOverride;
    if (newPlatformOverride) {
      if (newPlatformOverride !== this.state.platformOverride) {
        this.setState({platformOverride: newPlatformOverride});
      }
    }
  },
  render() {
    var platform = getPlatform(this.state.platformOverride);

    return (
      <IonBody platform={platform} location={this.props.location} >
        { React.cloneElement(this.props.children, {pageList:this.props.route.pageList}) }
      </IonBody>
    );
  }
});

export default App;
