import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriends } from '../actions';

class PostFriends extends Component {

    handleSubmit(e) {
        e.preventDefault();
        let name = this.refs.name.value;
        let age = this.refs.age.value;
        let email = this.refs.email.value;
        this.props.postFriends(name,age,email);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h2>Add a Friend!</h2>
                <input type="text" placeholder="First Name" ref="name" />
                <input type="text" placeholder="Age" ref="age"/>
                <input type="text" placeholder="Email" ref="email" />
                <button type="submit">
                    Add Friend
                </button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    }

}

export default connect(mapStateToProps, { postFriends })(PostFriends);