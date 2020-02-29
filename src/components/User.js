import React, {Component} from 'react';

export default class User extends Component {
    render() {
        return(
            <div className="usercard">
                {/* <img src={this.props.src} alt={this.props.alt}> </img> */}

                <div className="post__name">
                    <div>UserCard</div>
                </div>
            </div>
        )
    }
}