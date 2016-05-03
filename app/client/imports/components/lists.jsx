import React from 'react';
import { IonContent, IonList, IonItem, IonIcon } from 'reactionic';

var Lists = React.createClass({
  render() {
    return (
      <IonContent customClasses=""
                  {...this.props}>
        <IonList>
          <IonItem divider>List Icons</IonItem>
          <IonItem iconLeft>
            <IonIcon icon="email" />
            Check mail
          </IonItem>
          <IonItem iconLeft iconRight onClick={() => { console.log('Calling Ma...') }}>
            <IonIcon icon="chatbubble-working" />
            Call Ma
            <IonIcon icon="ios-telephone-outline" />
          </IonItem>
          <IonItem iconLeft>
            <IonIcon icon="mic-a" />
            Record album
            <span className="item-note">
              Grammy
            </span>
          </IonItem>
          <IonItem iconLeft>
            <IonIcon icon="person-stalker" />
            Friends
            <span className="badge badge-assertive">0</span>
          </IonItem>
          
          <IonItem divider>List Button</IonItem>
          <IonItem buttonRight>
            Call Ma
            <button className="button button-positive">
              <IonIcon icon="ios-telephone" />
            </button>
          </IonItem>

          <IonItem divider>Item Avatar</IonItem>
          <IonItem avatar>
            <img src="http://lorempixel.com/100/100/people/" />
            <h2>Venkman</h2>
            <p>Back off, man. I'm a scientist.</p>
          </IonItem>

          <IonItem divider>Item Thumbnail</IonItem>
          <IonItem thumbnailLeft>
            <img src="http://lorempixel.com/100/100/nightlife/" />
            <h2>Pretty Hate Machine</h2>
            <p>Nine Inch Nails</p>
          </IonItem>
        </IonList>
        
      </IonContent>
    )
  }
});

export default Lists;
