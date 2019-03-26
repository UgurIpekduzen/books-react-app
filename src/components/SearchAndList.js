import React, { Component } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios';

export default class SearchAndList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            books: [],
            term: ''
         };

        this.searchHandler = this.searchHandler.bind(this);
      }
      searchHandler = (e) => {
          this.setState({ term: e.target.value });
      }

      componentDidMount() {
        axios.get('https://5c96924f939ad600149a9534.mockapi.io/books').then((response) => {
          this.setState({ books: response.data })
        });
      };
      
  render() {
    const { term, books } = this.state;
    const filteredData = books.filter(book => {
        return book.kitapAdi.toLowerCase().includes(term.toLowerCase()) || 
        book.yazar.toLowerCase().includes(term.toLowerCase()) ||
        book.yayinEvi.toLowerCase().includes(term.toLowerCase() && term !== book.id);
    })
    return (
      <div className = "container">
            <form>
                <div className="form-group">
                    <input type="text" 
                    onChange={this.searchHandler} 
                    value={term} 
                    className = "form-control"
                    placeholder = "Kitap Adı, Yazar, Yayınevi"/>
                </div>
            </form>
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Kitap Adı</th>
                    <th>Yazar</th>
                    <th>Yayınevi</th>
                </tr>
            </thead>
            <tbody>
            {
                filteredData.map(book => 
                <tr key= {book.id}>
                    <td>{book.id}</td>
                    <td>{book.kitapAdi}</td>
                    <td>{book.yazar}</td>
                    <td>{book.yayinEvi}</td>
                </tr>
                ) 
            }
            </tbody>
        </Table>
      </div>
    )
  }
}

