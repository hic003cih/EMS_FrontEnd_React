import React, { Component } from 'react';
import axios from 'axios';
import {TablePlant} from './TablePlant';

export class IndexPlant extends Component {
    constructor(props){
        super(props);
        this.state = {plants: []};
    }
    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/api/Plant`).then(response => {
            this.setState({
                plants: response.data
                });
            console.log(this.state.plants);
        }).catch(function(error){
            console.log(error);
        })
    }
    tabRow(){
        return this.state.plants.map(function(object,i){
            return <TablePlant obj={object} key={i} />;
        });
    }


    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                                 <th>Code</th>
                                <th>Desc</th>
                                <th>Remark</th>
                                 <th>Edit</th>
                                 <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}