import React ,{Component} from 'react'
import axios from 'axios'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            book: [],
         }
    }

    componentDidMount() {
        const { match: { params } } = this.props
        axios.get(`https://5c9c1ea85ee0830014b71918.mockapi.io/books/${params.id}`).then((response) => {
          this.setState({ book: response.data })
        })
      }

  render() {
    let info = this.state.book
    return (
      <div>
          <Card>
                <CardHeader>
                  <strong>ID = </strong>{info.id}
                </CardHeader>
              <ListGroup>
                  <ListGroupItem><strong>Kitap Adı = </strong>{info.bookName}</ListGroupItem>
                  <ListGroupItem><strong>Yazar = </strong>{info.authorName}</ListGroupItem>
                  <ListGroupItem><strong>Yayin Evi = </strong>{info.publisherName}</ListGroupItem>
              </ListGroup>
          </Card>
      </div>
    )
  }
}
