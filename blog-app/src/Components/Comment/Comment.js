import React, { Component } from 'react';

class Comment extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>   
                <h5>
                    {this.props.comment.name}
                </h5>
                {this.props.comment.comment}
            </div>
        );
    }
}

export default Comment;