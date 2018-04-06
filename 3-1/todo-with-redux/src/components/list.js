import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListItem from './list-item'
function mapStatetoProps(state) {
    return { data: state }
  }
class List extends Component {
    render() {
        var data = this.props.data.map((dataitem, index) => {
            return <ListItem status={dataitem.status} title={dataitem.title} id={index} />
        })
        return (
            <div id="list">
                {data}
                <div id="empty">
                    <br />
                    <img alt="empty icon" src="img/empty.png" />
                    <span>This list is empty!</span>
                </div>
            </div>
        )
    }
}
export default connect(mapStatetoProps)(List);