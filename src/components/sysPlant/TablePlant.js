import React, { Component } from "react";
import axios from "axios";
import "./Plant.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export class TablePlant extends Component {
  // state = {
  //   // technologies: [
  //   //   {
  //   //     id: 1,
  //   //     plant_name: "32A3",
  //   //     plant_code: "32A3",
  //   //     plant_desc: "test",
  //   //     plant_remark: "test"
  //   //   }
  //   // ]
  //   technologies: [],
  //   // friends: [],
  //   // plant_name: '',
  //   // id: '',
  //   // plant_code: '',
  //   // plant_desc:''
  // };
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  //  componentDidMount() {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/Plant`).then((resp) =>
  //     this.setState({
  //       technologies: resp.data
  //     })
  //   );
  // }
  delete(e) {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/api/Plant/` + this.props.obj.id)
        .then(console.log("Deleted"))
        .catch((err) => console.log(err));
  }

  render() {
    // const body = this.state.technologies.map(function (technology, i) {
    //   return (
    //     <tbody>
    //       <tr>
    //         <td>{technology.id}</td>
    //         <td>{technology.plant_name}</td>
    //         <td>{technology.plant_code}</td>
    //         <td>{technology.plant_desc}</td>
    //         <td>{technology.plant_remark}</td>
    //         <td>
    //           <Link to={"/edit/" + technology.id} className="btn btn-primary">
    //             Edit
    //           </Link>
    //         </td>
    //         <td>
    //
    //         </td>
    //       </tr>
    //     </tbody>
    //   );
    // });
    // return (
    //   <div style={{ marginTop: 50 }}>
    //     <Table striped bordered hover>
    //
    //       <thead>
    //         <th>#</th>
    //         <th>Name</th>
    //         <th>Code</th>
    //         <th>Desc</th>
    //         <th>Remark</th>
    //         <th>Edit</th>
    //         <th>Delete</th>
    //       </thead>
    //       {body}
    //     </Table>
    //   </div>
    // );

    return(
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.plant_name}
          </td>
          <td>
            {this.props.obj.plant_code}
          </td>
          <td>
            {this.props.obj.plant_desc}
          </td>
          <td>
            {this.props.obj.plant_remark}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={(e) => this.delete(e)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    )
  }
}
