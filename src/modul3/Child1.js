import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nama: "MUHAMAD RIZAL DWI CAHYO"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nama === "MUHAMAD RIZAL DWI CAHYO") {
                return {nama : "ANDHIKA FITRA SETYAWAN"}
            } else {
                return { nama: "MUHAMAD RIZAL DWI CAHYO"}                 
            }
        })
    }
    componentWillUnmount() {
        alert('child 1 will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Aku child-1</h4>
                <button onClick={this.ubahNama}>Ubah nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;