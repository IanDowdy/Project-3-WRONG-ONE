import React, { Component } from "react";
//import Jumbotron from "../Jumbotron/Jumbotron";
import API from '../../utils/API';
//import DeleteBtn from "../components/DeleteBtn";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../List/List";
import { Input, TextArea, FormBtn } from "../Form/Form";
import './Resources.css'

class Resources extends Component {
  state = {
    comments: [],
    title: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadComments();
    console.log('comments loading...')
  }

  loadComments = () => {
    API.getComments()
      .then(res => this.setState({ comments: res.data, title: "", synopsis: "" }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.synopsis) {
      API.saveComment({
        title: this.state.title,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadComments())
        .catch(err => console.log(err));
    }
  };
//ToDo if there's time: add a thumbs-up icon and display # of likes
  render() {
    return (
<div className="box">
<div className="header">
<h3>We'd love to hear from you!</h3>
<h5>Do you have any resources that have helped you, or suggestions for new tutorials?</h5>
<h5>Please feel free to share below!</h5>
</div>
<div className="feedback">
            <form>
              <Input value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Your Name" />
              <TextArea value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Message" />
              <FormBtn onClick={this.handleFormSubmit}>Submit Comment</FormBtn>
            </form>
</div>
            {this.state.comments.length ? (
              <List>
                {this.state.comments.map(comment => (
                  <ListItem key={comment._id}>
                      <h4>
                        {comment.title} says:
                      </h4>
                      <h5>
                        {comment.synopsis}
                        </h5>                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
</div>
    );
  }
}

export default Resources;