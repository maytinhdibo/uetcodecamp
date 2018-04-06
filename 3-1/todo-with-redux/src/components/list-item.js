import React, { Component } from 'react';
import { connect } from 'react-redux'
function mapStatetoProps(state) {
    return { data: state }
  }
class ListItem extends Component {
    removeItem=(item)=>{
        this.props.dispatch({
            type:"REMOVE"
        });
        console.log(this);
    }
    doneItem = (e) =>{
        if(e.target.tagName=="BUTTON") return false;
        if(e.target.tagName!="LI"){
            e.target=e.target.parentElement;
        }
        this.props.doneItem(e.target.id);
    }
    constructor(props){
        super(props);
        this.state={
            text:this.props.data.length
        }
    }
    componentWillReceiveProps(){
        console.log("change props");
        this.state={
            text:this.props.data.length
        }
        this.setState(this.state);
    }
    render() {
        return <li onClick={this.doneItem} id={this.props.id} className={this.props.status == 0 ? "none" : "done"}><span>{this.props.data.length}{this.props.a}</span><button onClick={this.removeItem} className="remove">&#x2715;</button></li>;
    }
}

export default connect(mapStatetoProps)(ListItem);