import React, { Component } from 'react'
import {Form, FormGroup, Button, Input, CardHeader, Card, CardBody, Label} from 'reactstrap'
import axios from 'axios'
export default class Create extends Component {

  constructor(props) {
    super(props)
    this.state = {
        kitapAdi: '',
        yazar: '',
        yayinEvi: ''
    }
  }

  onChangeKitapAdi = (e) => {
      this.setState({
          kitapAdi: e.target.value
      })
  }

  onChangeYazar = (e) => {
      this.setState({
          yazar: e.target.value
      })
  }

  onChangeYayinEvi = (e) => {
    this.setState({
        yayinEvi: e.target.value
    })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const yeniKitap = {
        kitapAdi: this.state.kitapAdi,
        yazar: this.state.yazar,
        yayinEvi: this.state.yayinEvi
      }
      axios.post('https://5c96924f939ad600149a9534.mockapi.io/books', yeniKitap)
      .then(res => console.log(res.data))
      
      this.setState({
        kitapAdi: '',
        yazar: '',
        yayinEvi: ''
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
              <Label htmlFor = "kitapAdi">Kitap Adı</Label>
              <Input type ="text" 
              name = "kitapAdi"
              placeholder = "Kitap Adı Giriniz"
              className = "form-control"
              onChange = {this.onChangeKitapAdi}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor = "yazar">Yazar</Label>
              <Input type = "text" 
              name = "yazar"
              placeholder = "Yazar Giriniz"
              className = "form-control"
              onChange = {this.onChangeYazar}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor = "yayinevi">Yayınevi</Label>
              <Input type = "text" 
              name = "yayinevi"
              placeholder = "Yayınevi Giriniz"
              className = "form-control"
              onChange = {this.onChangeYayinEvi}
              />
            </FormGroup>
            <Button color= "primary" type="submit" block>Ekle</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
