import React, { Component } from 'react';
import CommentSection from '../Comment/CommentSection';
// import {store} from '../../App';

class Blog extends Component {
    
    constructor(props){
        super(props);
        this.state={
            comments:[{}]
        };

        // store.subscribe(()=>{
            
        //     this.refreshState();
        // })
    }

    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/posts/1")
        .then(data=>data.json())
        .then(response=>{
            console.log(response)
            this.setState({
                title:response.title,
                body:response.body
            })
        })
    }
    
    refreshState =()=>{
        // let currentState = store.getState()
        // this.setState({comments:currentState})
    }

    addComment = (comment) => {
        // this.setState({
        //     comments:[...this.state.comments,comment]
        // })
        // store.dispatch({type:"ADD_COMMENT",payload:{comment:comment}})
    }
    
    render() {
        return (
            <div className="columns">
                <header className="column col-12 text-center"><h3>{this.state.title}</h3></header>
                <hr></hr>
                <section className="column col-12 text-center">{this.state.body}</section>   
                <CommentSection className="column col-12" comments={this.state.comments} addCommentsToState={this.addComment}></CommentSection>
            </div>
        );
    }
}

export default Blog;