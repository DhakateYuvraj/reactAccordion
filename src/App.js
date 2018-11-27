import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction'


class App extends Component {
 render() {
  return (
   <div className="App">
   <pre>
 {
  JSON.stringify(this.props)
 }
</pre>

    <button onClick={this.simpleAction}>Test redux action</button>
   </div>
  );
 }
 simpleAction = (event) => {
   console.log(12);
   this.props.simpleAction();
  }
}
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);