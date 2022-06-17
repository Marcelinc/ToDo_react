import React, { Component } from 'react';

class Zegar extends Component{
    constructor(){
        super();
        this.state={
            data: new Date(),
            czasomierz:()=>{}
        }
    }

    componentDidMount(){
        this.setState({czasomierz:setInterval(() => this.odmierzCzas(),1000)});
    }

    componentWillUnmount(){
        clearInterval(this.state.czasomierz);
    }

    odmierzCzas(){
        this.setState({
            data:new Date()
        })
    }

    render(){
        return(
            <p>{this.state.data.toLocaleTimeString()}</p>
        )
    }
}

export default Zegar;


