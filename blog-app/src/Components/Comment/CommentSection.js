import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css'
class CommentSection extends Component {


    constructor(props) {
        super(props)
        this.state = {
            name: "",
            commentInput: ""
        }
        // this.handleTyping = this.handleTyping.bind(this);
    }


    handleTyping = (e) => {

        if (e.target.id === "name") {
            this.setState({
                name: e.target.value
            })
        }
        else if (e.target.id === "comment") {
            this.setState({
                commentInput: e.target.value
            })
        }


    }

    addComment = (e) => {
        this.props.addCommentsToState({ name: this.state.name, comment: this.state.commentInput });
        this.setState({
            name: "",
            commentInput: ""
        })
    }


    render() {
        return (
            <div className="padding-class">
                <h5>
                    Add Comment
                </h5>
                <div className="columns">
                    <div className="column col-3"><h6>Name</h6></div>
                    <div className="column col-9" style={{marginBottom:"1%"}}><input type="text" size="60" id="name" value={this.state.name} onChange={(e) => { this.handleTyping(e) }}></input></div>
                    <br></br>
                    <div className="column col-12">
                        <textarea type="text" placeholder="Comment" cols="150" rows="5" id="comment" value={this.state.commentInput} onChange={(e) => { this.handleTyping(e) }}></textarea>
                    </div>

                </div>
                <br></br>
                <button type="button" onClick={(e) => { this.addComment(e) }}>Post</button>

                <br></br>
                <br></br>

                <h4 className="text-left">Comments</h4>
                {
                    this.props.comments.map((comment, i) => {
                        return (
                            <Comment key={i} comment={comment}></Comment>
                        );
                    })
                }

            </div>
        );
    }
}

export default CommentSection;