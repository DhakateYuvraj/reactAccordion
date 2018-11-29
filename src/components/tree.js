import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { simpleAction } from '../actions/simpleAction'



class Tree extends Component {
    constructor (props) {
        super(props)
        //console.log(this.props);
        this.generateTree = this.generateTree.bind(this);
        this.generateNode = this.generateNode.bind(this);
        this.newDom = []
    }

    generateNode(nodeName,nodeData){
        return(<div onClick={() => {this.generateTree(nodeData)}} key={nodeName}>{nodeName}</div>)
    }

    generateTree(param){
        let title=null
        this.newDom.push(param.name ? (this.generateNode(param.name,param.data)) : (
            title = Object.keys(param)[0] ? Object.keys(param)[0] : null,
            //this.generateTree(param[title]),
            this.generateNode(title,param[title])
            )
        )
        // this.newDom.push(param.data ? (
        //     param.data.map((item)=>{this.generateNode(param.name,item);})
        // ) : (
        //      param.url ? (
        //         this.generateNode('param.url','param.url')
        //         ) : 
        //         this.generateNode('yuvi',{data:'data'})
        // ))
        return(
            <div>{this.newDom}</div>
        )
    }

    render() {
        const { treeData } = this.props
        return (
            this.generateTree(treeData)
        );
    }
}

export default connect(null, null)(Tree);