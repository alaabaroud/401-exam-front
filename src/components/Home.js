import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ApiCards from './ApiCards'
class Home extends React.Component {
  constructor (props){
    super(props);
    this.state={
      ApiData : [], 
      showData: false
    }
  }

  componentDidMount = async ()=> {
    const url= await axios.get("http://localhost:3333/crypto")
    this.setState({
      ApiData: url.data,
    showData: true
    })
  }

  addFav = async (idx) => {
    const url = await axios.post ('http://localhost:3333/crypto/fav', idx)

  }



  render() {
    return (
      <>
        <h1>Crypto List</h1>

        {this.state.showData  && 
        <ApiCards
        ApiData = {this.state.ApiData}
        addFav  = {this.addFav}
        /> }
        
      </>
    )
  }
}

export default Home;
