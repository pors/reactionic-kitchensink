import React from 'react';
import { IonContent, IonList, IonItem, IonIcon } from 'reactionic';

var Index = React.createClass({
  propTypes: {
    ionSetTransitionDirection: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      ionSetTransitionDirection: null
    };
  },
  render() {
    var items = this.props.pageList.map(function(page) {
      if (page.path == '/') return null;
      if (page.dontindex) return null;
      var checkmark = page.done ? "ios-checkmark-outline" : "ios-circle-outline"
      return (
        <IonItem  link={page.path} iconLeft iconRight key={page.path}>
          <IonIcon icon={checkmark} />
          {page.headerTitle}
          <IonIcon icon="ios-arrow-right" />
        </IonItem>        
      );
    });
    return (
      <IonContent customClasses=""
                  {...this.props}>
      <IonList>
        {items}
      </IonList>
      </IonContent>
    );
  }
});

export default Index;
