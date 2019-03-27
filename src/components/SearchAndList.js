import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Table, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import axios from 'axios';

export default class SearchAndList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            books: [],
            term: '',
            currentPage: 1,
            booksPerPage: 10
         }

        this.handleClick = this.handleClick.bind(this)
        this.searchHandler = this.searchHandler.bind(this)
      }

      handleClick = (e) => {
        this.setState({
          currentPage: Number(e.target.id)
        })
      }

      searchHandler = (e) => {
          this.setState({ term: e.target.value })
      }

      componentDidMount() {
        axios.get('https://5c96924f939ad600149a9534.mockapi.io/books').then((response) => {
          this.setState({ books: response.data })
        })
      }
      
  render() {
    const { term, books, currentPage, booksPerPage } = this.state
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)
    
    const filteredData = currentBooks.filter(book => {
        return book.kitapAdi.toLowerCase().includes(term.toLowerCase()) || 
        book.yazar.toLowerCase().includes(term.toLowerCase()) ||
        book.yayinEvi.toLowerCase().includes(term.toLowerCase() && term !== book.id);
    }).map(book => {
      return (
        <tbody>
          <tr key= {book.id}>
            <td>{book.id}</td>
            <td>{book.kitapAdi}</td>
            <td>{book.yazar}</td>
            <td>{book.yayinEvi}</td>
            <td>
              <a href={`detail/${book.id}`}>
                <button className="btn btn-success"> Detaylar</button>
              </a>
            </td>
          </tr>
        </tbody> 
      )
    })

    const pageNumbers = []
      for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
        pageNumbers.push(i)
      }

    const renderPageNumbers = pageNumbers.map(number => {
    return (
      <Pagination size="lg">
        <PaginationItem key={number}>
          <PaginationLink  id={number} onClick={this.handleClick}>
            {number}
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    )})

    return (
      <Container>
            <Form>
                <FormGroup>
                    <Input type="text" 
                    onChange={this.searchHandler} 
                    value={term} 
                    className = "form-control"
                    placeholder = "Kitap Adı, Yazar, Yayınevi"/>
                </FormGroup>
            </Form>
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Kitap Adı</th>
                    <th>Yazar</th>
                    <th>Yayınevi</th>
                    <th></th>
                </tr>
            </thead>
            {filteredData}
        </Table>
        <Row>
        {renderPageNumbers}
        </Row>
      </Container>
    )
  }
}

