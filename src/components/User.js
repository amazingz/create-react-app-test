import React, {Component} from 'react';

export default class User extends Component {
    render() {
        return(
            <div className="usercard">
                {/* <img src={this.props.src} alt={this.props.alt}> </img> */}

                <div className="user__name">
                    <div>UserCard</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNbDi-0nqUAYQlVYj6e4YVxQ5cORbmT3gruyc7_1KFtx6DzknX" alt="user"></img>
                </div>
            </div>
        )
    }
}