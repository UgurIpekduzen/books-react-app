import React ,{Component} from 'react';
import axios from 'axios';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            book: [],
         };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://5c96924f939ad600149a9534.mockapi.io/books/${params.id}`).then((response) => {
          this.setState({ book: response.data });
        })
      };

  render() {
    let info = this.state.book;
    return (
      <div>
            <div className="card">
                 <div className="card-header">
                    <strong>ID = </strong>{info.id}
                 </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Kitap Adı = </strong>{info.kitapAdi}</li>
                    <li className="list-group-item"><strong>Yazar = </strong>{info.yazar}</li>
                    <li className="list-group-item"><strong>Yayin Evi = </strong>{info.yayinEvi}</li>
                </ul>
            </div>
      </div>
    )
  }
}
