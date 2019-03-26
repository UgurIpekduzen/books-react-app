import React, { Component } from 'react'
import axios from 'axios';
export default class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
        kitapAdi: '',
        yazar: '',
        yayinEvi: ''
    }
  }
  onChangeKitapAdi = (e) => {
      this.setState({
          kitapAdi: e.target.value
      });
  }

  onChangeYazar = (e) => {
      this.setState({
          yazar: e.target.value
      });
  }

  onChangeYayinEvi = (e) => {
    this.setState({
        yayinEvi: e.target.value
    });
  }

  onSubmit = (e) => {
      e.preventDefault();
      const yeniKitap = {
        kitapAdi: this.state.kitapAdi,
        yazar: this.state.yazar,
        yayinEvi: this.state.yayinEvi
      }
      axios.post('https://5c96924f939ad600149a9534.mockapi.io/books', yeniKitap)
      .then(res => console.log(res.data));
      
      this.setState({
        kitapAdi: '',
        yazar: '',
        yayinEvi: ''
      });
  }

  render() {
    return (
      <div className = "card">
        <div className = "card-header">
            <h4>Kitap Ekle</h4>
        </div>
        <div className = "card-body">
          <form onSubmit = {this.onSubmit}>
            <div className = "form-group">
              <label htmlFor = "kitapAdi">Kitap Adı</label>
              <input type ="text" 
              name = "kitapAdi"
              placeholder = "Kitap Adı Giriniz"
              className = "form-control"
              onChange = {this.onChangeKitapAdi}
              />
            </div>
            <div className = "form-group">
              <label htmlFor = "yazar">Yazar</label>
              <input type = "text" 
              name = "yazar"
              placeholder = "Yazar Giriniz"
              className = "form-control"
              onChange = {this.onChangeYazar}
              />
            </div>
            <div className = "form-group">
              <label htmlFor = "yayinevi">Yayınevi</label>
              <input type = "text" 
              name = "yayinevi"
              placeholder = "Yayınevi Giriniz"
              className = "form-control"
              onChange = {this.onChangeYayinEvi}
              />
            </div>
            <button className = "btn btn-primary btn-block" type="submit">Ekle</button>
          </form>
        </div>
      </div>
    )
  }
}
