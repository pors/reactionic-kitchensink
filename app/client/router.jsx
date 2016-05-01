import ReactDOM from 'react-dom';
import React from 'react';
import _ from 'lodash';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './imports/components/app.jsx';
import Layout from './imports/components/layouts/main.jsx';
import NoMatch from './imports/components/nomatch.jsx';
import TBI from './imports/components/tbi.jsx';
import Index from './imports/components/index.jsx';
import About from './imports/components/about.jsx';
import ActionSheet from './imports/components/actionSheet.jsx';
import Buttons from './imports/components/buttons.jsx';
import Backdrop from './imports/components/backdrop.jsx';
import Forms from './imports/components/forms.jsx';
import HeadersFooters from './imports/components/headersFooters.jsx';
import Lists from './imports/components/lists.jsx';
import Loading from './imports/components/loading.jsx';
import Modal from './imports/components/modal.jsx';
import { Navigation, NavigationOne, NavigationTwo, NavigationThree } from './imports/components/navigation.jsx';
import Popup from './imports/components/popup.jsx';
import Popover from './imports/components/popover.jsx';
import SideMenus from './imports/components/sidemenus.jsx';
import Slidebox from './imports/components/slidebox.jsx';
import Spinners from './imports/components/spinners.jsx';
import { Tabs, TabsOne, TabsTwo, TabsThree, TabsFour } from './imports/components/tabs.jsx';

var main = function () {
  var pageList = [
    { path:'/', component:Index, title:'React Ionic', done:true},
    { path:'/about', component:About, title:'About', done:true},
    { path:'/actionSheet', component:ActionSheet, title:'Action Sheet', done:true},
    { path:'/backdrop', component:Backdrop, title:'Backdrop', done:true},
    { path:'/buttons', component:Buttons, title:'Buttons', done:true},
    { path:'/forms', component:Forms, title:'Form Elements', done:true},
    { path:'/headersFooters', component:HeadersFooters, title:'Headers & Footers', done:true},
    { path:'/lists', component:Lists, title:'Lists', done:true},
    { path:'/loading', component:Loading, title:'Loading', done:true},
    { path:'/modal', component:Modal, title:'Modal', done:true},
    { path:'/navigation', component:Navigation, title:'Navigation', done:true},
    { path:'/navigation/one', component:NavigationOne, title:'Level 1', dontindex:true},
    { path:'/navigation/two', component:NavigationTwo, title:'Level 2', dontindex:true},
    { path:'/navigation/three', component:NavigationThree, title:'Level 3', dontindex:true},
    { path:'/popover', component:Popover, title:'Popover', done:true},
    { path:'/popup', component:Popup, title:'Popup', done:true},
    { path:'/sideMenus', component:SideMenus, title:'Side Menus', done:true},
    { path:'/slideBox', component:Slidebox, title:'Slide Box', done:true},
    { path:'/spinners', component:Spinners, title:'Spinner', done:true},
    { path:'/tabs/one', component:TabsOne, title:'Tabs', done:true, childRoutes:
      [
        { path:'/tabs/one', component:TabsOne, title:'Tab 1', done:false, indexRoute:true},
        { path:'/tabs/two', component:TabsTwo, title:'Tab 2', done:false},
        { path:'/tabs/three', component:TabsThree, title:'Tab 3', done:false},
        { path:'/tabs/four', component:TabsFour, title:'Tab 4', done:false}
      ]
    },
  ];

  var tabRoutes;
  const pageRoutes = pageList.map(function(page) {
    if(page.childRoutes) {
      tabRoutes = page.childRoutes.map(function(cpage) {
        return <Route path={cpage.path} component={cpage.component} key={cpage.path} />;
      });
    } else {
      return <Route path={page.path} component={page.component} key={page.path} />;
    }
  });

  var PageList = pageList.map(function(page, idx, pageArray) {
    // strip the page components
    delete page.component;
    return page;
  });

  let mainRoute = (
    <Route component={Layout}>
      <IndexRoute component={Index} />
      {pageRoutes}
    </Route>
  );

  let tabRoute = (
    <Route path="/tabs" component={Tabs}>
      <IndexRoute component={TabsOne} />
      {tabRoutes}
    </Route>
  );

  var routes = (
    <Route path="/" component={App} pageList={PageList}>
      { mainRoute }
      { tabRoute }
      <Route path="*" component={NoMatch}/>
    </Route>
  );
  
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app')) ;
};

if (typeof Meteor !== 'undefined') {
  Meteor.startup(main);
} else {
  main();
}
