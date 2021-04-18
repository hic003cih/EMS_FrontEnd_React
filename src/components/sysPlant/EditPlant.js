import React, { Component } from "react";
import axios from "axios";

export class EditComponent extends Component {
  constructor(props){
    super(props);
    this.onChangeHostName = this.onChangeHostName.bind(this);
    this.onChangePort = this.onChangePort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {name: this.props.name,port: this.props.port};
  }
  componentDidMount(){
    axios.get('${process.env.REACT_APP_API_URL}/api/Plant/'+this.props.match.id).then(
        response =>{
          this.setState({name: response.data.name,port:response.data.port});
        }
    ).catch(function(error){
      console.log("NO" + error);
    })
  }
  onChangeHostName(e){
    this.setState({
      name: e.target.value
    });
  }
  onChangePort(e){
    this.setState({
      port:e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    const serverport = {
      name: this.state.name,
      port: this.state.port
    }
    axios.post('http://localhost:4200/serverport/update/' + this.props.match.params.id, serverport).then(
        res => console.log(res.data));
    this.setState({
      name: '',
      port: ''
    })
    this.props.history.push('/index');
  }
  render() {
    return (
        <div style={{marginTop: 50}}>
          <h3>Edit New Server</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Add Host Name:  </label>
              <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeHostName}/>
            </div>
            <div className="form-group">
              <label>Add Server Port: </label>
              <input type="text" value={this.state.port} className="form-control" onChange={this.onChangePort}></input>
            </div>
            <div className="form-group">
              <input type="submit" value="Update server" className="btn btn-primary"></input>
            </div>
          </form>
        </div>
    )
  }
}