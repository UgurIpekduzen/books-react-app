// import React from 'react'

// const Details = ({match}) => {
//     return (
//     <div>
//         <div className="card">
//             <div className="card-header">
//                 ${match.params.id}
//             </div>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item">${match.params.kitapAdi}</li>
//                 <li className="list-group-item">${match.params.yazar}</li>
//                 <li className="list-group-item">${match.params.yayinEvi}</li>
//             </ul>
//         </div>
//     </div>
//     )
// };

// export default Details;

import React, { Component } from 'react';
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

        axios.get(`https://5c96924f939ad600149a9534.mockapi.io/books/detail/${params.id}`).then((response) => {
          this.setState({ book: response.data })
        });
      };

      handleDelete() {
        const { match: { params } } = this.props;
      
        axios.delete(`https://5c96924f939ad600149a9534.mockapi.io/books/${params.id}`)
          .then(() => {
            console.log('book deleted');
          });
      }

  render() {
    return (
      <div>
          {
            this.state.book.map(info => 
            <div className="card">
                 <div className="card-header" key={info.id}>
                    {info.id}
                 </div>
                <ul className="list-group list-group-flush">
                     <li className="list-group-item">${info.kitapAdi}</li>
                     <li className="list-group-item">${info.yazar}</li>
                    <li className="list-group-item">${info.yayinEvi}</li>
                </ul>
            </div>
            )
          }
      </div>
    )
  }
}
