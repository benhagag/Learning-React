import React from "react";
/*
    REACT LIFRCYCLE : 
     https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
     https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

*/

class LifecycleMethodsPart1 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //   return the new, updated state based upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  /*
    // removed from React

   componentWillMount(){

   }
*/
  componentDidMount() {
    // get API call and GET thd data I need to correctly display
  }

  /*
  // removed from react
  // exmaple of getting props from parent componenet

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something importnat here
    }
  }
  */

  shouldComponentUpdate(nextProps, nextState) {
    //   return true if we want to update
    //   return false if we do not want to update
  }
  /*
    // removed from react
    
    componentWillUpdate() {}
  */

  // when component disappears
  componentWillUnmount() {
    // place to taredown or cleanup your code before the component disappears
  }

  render() {
    return <div>Code goed here.</div>;
  }
}

export default LifecycleMethodsPart1;
