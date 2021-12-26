import axios from 'axios'
import React, { Component } from 'react'
import AppURL from '../../api/AppURL'

class MegaMenuAll extends Component {
  constructor() {
    super()
    this.state = {
      MenuData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((resp) => {
        this.setState({ MenuData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  MenuItemClick = (event) => {
    event.target.classList.toggle('active')
    var panel = event.target.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  }

  render() {
    const CatList = this.state.MenuData
    const MyView = CatList.map((CatList, i) => (
      <div key={i.toString()}>
        <button onClick={this.MenuItemClick} className="accordionAll">
          <img className="accordionMenuIconAll" src={CatList.category_image} />
          &nbsp; {CatList.category_name}
        </button>
        <div className="panelAll">
          <ul>
            {CatList.subcategory_name.map((SubList, i) => (
              <li>
                <a href="#" className="accordionItemAll">
                  {SubList.subcategory_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">{MyView}</div>
      </div>
    )
  }
}

export default MegaMenuAll
