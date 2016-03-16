import React from 'react';
import { Link } from "react-router";
import _ from 'lodash';
import { IonNavView, IonView, IonContent, IonNavBar, IonNavBackButton, IonFooterBar, IonIcon } from 'reactionic';

var Layout = React.createClass({  
  getPageProps: function(path) {

    var backButton = (
      <IonNavBackButton icon="ion-ios-arrow-back"
                        color=""
                        type="clear"
                        history={this.props.history}
                        ionSetTransitionDirection={this.props.ionSetTransitionDirection}
                        customClasses="button-stage"
      />
    );

    // add defaults to pageListItems
    var pageList = this.props.pageList.map(function(page) {
      page.headerTitle = page.title;
      page.rightHeaderButton = null;
      page.leftHeaderButton = backButton;
      return page
    });
    
    var pageProps = _.keyBy(pageList, 'path');
    // custom pageProps
    pageProps['/'].leftHeaderButton=null;


    return pageProps[path];
  },
  render() {    
    var currentPageProps = this.getPageProps(this.props.location.pathname);

    return (
      <div>
        <IonNavBar customClasses="bar-dark"
                   title={currentPageProps.headerTitle}
                   leftButton={currentPageProps.leftHeaderButton}
                   rightButton={currentPageProps.rightHeaderButton}
                   {...this.props}
        /> 

        <IonNavView customClasses="" {...this.props}>
          <IonView customClasses="" {...this.props}>
            {React.cloneElement(this.props.children, {
              platform: this.props.platform,
              ionSetTransitionDirection: this.props.ionSetTransitionDirection,
              ionShowModal: this.props.ionShowModal,
              ionShowBackdrop: this.props.ionShowBackdrop,
              ionShowLoading: this.props.ionShowLoading,
              ionKeyboardHeight: this.props.ionKeyboardHeight,
              pageList: this.props.pageList,
              ionUpdateHasX: this.props.ionUpdateHasX,
              ionHasTabs: this.props.ionHasTabs,
              ionHasTabsTop: this.props.ionHasTabsTop,
              ionHasHeader: this.props.ionHasHeader,
              ionHasSubheader: this.props.ionHasSubheader,
              ionHasFooter: this.props.ionHasFooter,
              ionHasSubfooter: this.props.ionHasSubfooter
              })}
          </IonView>
        </IonNavView>
      </div>
    );
  }
});
  
export default Layout;

