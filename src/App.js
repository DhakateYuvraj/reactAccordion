import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction'
import Tree from './components/tree'


class App extends Component {
  render() {
  let rawData = {"aws": 
    {"name": "AWS", "data":[
      {"name": "Accounts", "data":[
          {"name": "Organization Sales", "url": "https://2f93gx75jk.execute-api.ap-south-1.amazonaws.com/shubham/tenants/1542702537653/accounts/1/cis-report", "compliance_status": "Failed"},
          {"name": "Organization HR", "url": "https://2f93gx75jk.execute-api.ap-south-1.amazonaws.com/shubham/tenants/1542702537653/accounts/2/cis-report", "compliance_status": "Failed"}
        ]}, 
      {"name": "Policies", "url": "https://2f93gx75jk.execute-api.ap-south-1.amazonaws.com/shubham/policies/cis/aws"}
    ]}
  };
    return (
      <div className="App">

      <Tree treeData={rawData}></Tree>

      <br /><br /><hr /><hr /><br /><br />
        <pre>
          {JSON.stringify(this.props)}
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