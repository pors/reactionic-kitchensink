import React from 'react';
import { Link } from "react-router";
import _ from 'lodash';
import { IonNavView, IonView, IonContent, IonNavBar, IonNavBackButton, IonFooterBar, IonButton,
         IonIcon, IonSideMenuContainer, IonSideMenus, IonSideMenu, IonSideMenuContent } from 'reactionic';

var Layout = React.createClass({
  childContextTypes:{
    ionSnapper: React.PropTypes.object
  },
  getChildContext(){
    return { ionSnapper: this.props.ionSnapper}
  },
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

    if (path === '/sideMenus') {
      let icon = 'ion-navicon';
      if (this.props.platform.isAndroid) {
        icon = 'ion-android-more-vertical';
      }
      let leftButton = <IonButton type="clear" icon={icon} onClick={ () => { this.props.ionSnapper.toggle('left') } } />
      let rightButton = <IonButton type="clear" icon={icon} onClick={ () => { this.props.ionSnapper.toggle('right') } } />
      pageProps['/sideMenus'].leftHeaderButton = leftButton;
      pageProps['/sideMenus'].rightHeaderButton = rightButton;
    }


    return pageProps[path];
  },
  render() {
    var currentPageProps = this.getPageProps(this.props.location.pathname);

    return (
      <IonSideMenuContainer {...this.props}>
        <IonSideMenus>
          <IonSideMenu customClasses="side-menu">
            <div className="bar bar-header bar-stable">
              <h1 className="title">Left Menu</h1>
            </div>
            <div className="content has-header side-menu">
              <div className="list">
                <div className="item item-icon-right" onClick={ () => { this.props.ionSnapper.close() } }>
                  Close Me <IonIcon icon="ios-arrow-right" />
                </div>
              </div>
            </div>
          </IonSideMenu>
          <IonSideMenu side="right" customClasses="side-menu">
            <div className="bar bar-header bar-stable">
              <h1 className="title">Right Menu</h1>
            </div>
            <div className="content has-header side-menu">
              <div className="list">
                <div className="item item-icon-left" onClick={ () => { this.props.ionSnapper.close() } }>
                  Close Me <IonIcon icon="ios-arrow-back" />
                </div>
              </div>
            </div>
          </IonSideMenu>
        </IonSideMenus>
        <IonSideMenuContent>
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
                ionUpdateActionSheet: this.props.ionUpdateActionSheet,
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
                ionHasSubfooter: this.props.ionHasSubfooter,
                ionSnapper: this.props.ionSnapper
               })}
            </IonView>
          </IonNavView>
        </IonSideMenuContent>
      </IonSideMenuContainer>
    );
  }
});

export default Layout;
