import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
class Info extends Component {
    state = {
        auth: false
    }
    render() {
        if (this.state.auth) {
            return <Redirect to="/home" />;
        } else
            return (
                <div className="popup">
                    <div className="popup-content">
                        <h2>App Information</h2>
                        <li>Desgin: Tran Manh Cuong</li>
                        <li>API: UETCodeCamp</li>
                        <li>Github Repo: <a target="_blank" href="https://github.com/maytinhdibo/uetcodecamp">maytinhdibo/uetcodecamp</a></li>
                        <div style={{textAlign:"center",paddingTop:"12px"}}><i>Thanks for Mr. Minh and Mr. Tu</i></div>
                        <Link to="/home"><div class="button">Close</div></Link>
                    </div>
                </div>
            )
    }
}

export default Info;