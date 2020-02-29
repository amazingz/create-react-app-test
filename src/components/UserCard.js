import React, {Component} from 'react';
import User from './User';

export default class UserCard extends Component {
    render() {
        return(
            <div className="left">
                <User/>
            </div>
        )
    }
}