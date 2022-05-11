import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap';
  import { Redirect } from 'react-router-dom'

class ReptileEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
          newReptile: {
            name: "",
            age: "",
            enjoys: "",
            image: ""
          },
          submitted: false
        }
    }

    handleChange = (e) => {
        const { newReptile } = this.state
        newReptile[e.target.name] = e.target.value
        this.setState({newReptile: newReptile})
    }

    handleSubmit = () => {
        this.props.updateReptile(this.state.newReptile, this.props.reptile.id)
        this.setState({submitted: true})
    }

    render() {
        return (
            <>
              <h1>Edit an Existing Reptile</h1>
              <Form>
              <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="age">Age</Label>
                  <Input
                  type="text"
                  name="age"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="enjoys">Enjoys</Label>
                  <Input
                  type="text"
                  name="enjoys"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="image">Image URL</Label>
                  <Input
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              </Form>
              <Button name="submit" onClick={this.handleSubmit}>Edit Reptile Profile</Button>
              { this.state.submitted && <Redirect to={`/reptileshow/${this.props.reptile.id}`}/> }
            </>
        );
    }
}

export default ReptileEdit;