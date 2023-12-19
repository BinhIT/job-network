import React from 'react';
import { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
class TestComponents extends React.Component {
    //key:value
    state = {
        user: "Data name",
        age: "22",
        color: "red",
        backgroundColor: "blue"
    }


    handleOnChangeName = (event) => {
        this.setState({
            user: event.target.value
        })
    }
    handleOnClick = () => {
        this.setState({
            color: 'white',
            backgroundColor: "black"

        })
    }
    render() {
        return (
            <>

                <input value={this.state.user} type='text' onChange={(event) => this.handleOnChangeName(event)} />

                <div> Xin chào {this.state['user']}</div>
                <div className='btn' style={{ 'color': this.state['color'], 'backgroundColor': this.state['backgroundColor'] }}>
                    <button onClick={() => this.handleOnClick()}>Click me</button>
                </div>
            </>
        )
    }
}
export default TestComponents; // khai báo để sử dụng ở file khác 