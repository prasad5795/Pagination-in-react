import React, { Component } from 'react';

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state={
            currentPage:this.props.currentPage
        };
        console.log(props)
    }


    handleClick=(e)=>{
        let id = e.target.id
        if(id!=='next'&&id!=='prev'){
            this.setState({
                currentPage:id
            })
        } else{
            if(id==='next'){
                this.setState({
                    currentPage:this.state.currentPage===this.props.totalPages?this.state.currentPage:parseInt(this.state.currentPage)+1
                })
            } else if(id==='prev'){
                this.setState({
                    currentPage:this.state.currentPage===1?this.state.currentPage:parseInt(this.state.currentPage)-1
                })
            }
        }
    }

    render() {
        console.log("current page is",this.state.currentPage)
        return (
            <div>
                this is pagination component
                <div onClick={(e)=>{this.handleClick(e)}}>
                    <button id="prev">prev</button>
                    <button id="1">1</button>
                    <button id="2">2</button>
                    <button id="3">3</button>
                    {
                        this.state.currentPage<=3 || this.state.currentPage>this.props.totalPages-3?
                            <label>...</label>
                            :this.state.currentPage>4&&this.state.currentPage<=this.props.totalPages-3?
                            <React.Fragment>
                                <label>...</label>
                                <button id={this.state.currentPage}>{this.state.currentPage}</button>
                                <label>...</label>
                            </React.Fragment>:''
                    }
                    <button id={this.props.totalPages-2}>{this.props.totalPages-2}</button>
                    <button id={this.props.totalPages-1}>{this.props.totalPages-1}</button>
                    <button id={this.props.totalPages}>{this.props.totalPages}</button>
                    <button id="next">next</button>
                </div>
            </div>
        );
    }
}

export default Pagination;