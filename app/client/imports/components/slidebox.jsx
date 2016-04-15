import React from 'react';
import { IonContent, IonSlideBox } from 'reactionic';

var Slidebox = React.createClass({
  contextTypes: {
    ionSnapper: React.PropTypes.object
  },
  componentDidMount() {
    if (this.context.ionSnapper && this.context.ionSnapper.disable) {
      this.context.ionSnapper.disable();
    }
  },
  componentWillUnmount() {
    if (this.context.ionSnapper && this.context.ionSnapper.enable) {
      this.context.ionSnapper.enable();
    }
  },
  render() {
    return (
      <IonContent customClasses="slider-content-fix"
                  scroll={false}
                  {...this.props}>
        <IonSlideBox>
          <div className="slide-demo"><h3>Slide 1</h3></div>
          <div className="slide-demo dark"><h3>Slide 2</h3></div>
          <div className="slide-demo blue"><h3>Slide 3</h3></div>
        </IonSlideBox>
      </IonContent>
    )
  }
});

export default Slidebox;
