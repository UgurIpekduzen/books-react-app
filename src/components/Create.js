import React, { Component } from 'react'
import {Form, FormGroup, Button, Input, CardHeader, Card, CardBody, Label} from 'reactstrap'
import axios from 'axios'
export default class Create extends Component {

  constructor(props) {
    super(props)
    this.state = {
        bookName: '',
        authorName: '',
        publisherName: ''
    }
  }

  onChangeBookName = (e) => {
      this.setState({
          bookName: e.target.value
      })
  }

  onChangeAuthorName = (e) => {
      this.setState({
          authorName: e.target.value
      })
  }

  onChangePublisherName = (e) => {
    this.setState({
        publisherName: e.target.value
    })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const yeniKitap = {
        bookName: this.state.bookName,
        authorName: this.state.authorName,
        publisherName: this.state.publisherName
      }
      axios.post('https://5c9c1ea85ee0830014b71918.mockapi.io/books', yeniKitap)
      .then(res => console.log(res.data))
      
      this.setState({
        bookName: '',
        authorName: '',
        publisherName: ''
      })
  }

  render() {
    return (
      <Card>
        <CardHeader>
            <h4>Kitap Ekle</h4>
        </CardHeader>
        <CardBody>
          <Form onSubmit = {this.onSubmit}>
            <FormGroup>
              <Label htmlFor = "bookName">Kitap Adı</Label>
              <Input type ="text" 
              name = "bookName"
              placeholder = "Kitap Adı Giriniz"
              className = "form-control"
              onChange = {this.onChangeBookName}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor = "authorName">Yazar</Label>
              <Input type = "text" 
              name = "authorName"
              placeholder = "Yazar Giriniz"
              className = "form-control"
              onChange = {this.onChangeAuthorName}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor = "publisherName">Yayınevi</Label>
              <Input type = "text" 
              name = "publisherName"
              placeholder = "Yayınevi Giriniz"
              className = "form-control"
              onChange = {this.onChangePublisherName}
              />
            </FormGroup>
            <Button color= "primary" type="submit" block>Ekle</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
