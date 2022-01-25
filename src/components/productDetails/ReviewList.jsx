import axios from 'axios'
import React, { Component } from 'react'
import AppURL from '../../api/AppURL'

class ReviewList extends Component {
  constructor() {
    super()
    this.state = {
      ReviewData: [],
    }
  }

  componentDidMount() {
    let code = this.props.code

    axios
      .get(AppURL.ReviewList(code))
      .then((resp) => {
        // console.log(resp.data)
        this.setState({ ReviewData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const MyList = this.state.ReviewData
    const MyView = MyList.map((ReviewList, i) =>
      ReviewList.reviewer_rating === '1' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : ReviewList.reviewer_rating === '2' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i><i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : ReviewList.reviewer_rating === '3' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : ReviewList.reviewer_rating === '4' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i><i className="fa fa-star"></i>
              <i className="fa fa-star"></i><i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i><i className="fa fa-star"></i>
              <i className="fa fa-star"></i><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ),
    )
    return (
      <div>
        <h6 className="mt-2">REVIEWS</h6>
        {MyList.length > 0 ? <>{MyView}</> : <p>There have no review Yet </p>}
      </div>
    )
  }
}

export default ReviewList
