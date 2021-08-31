import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import FavCards from './FavCards'
import FavModal from './FavModal';
class FavCrypto extends React.Component {


  constructor (props){
    super(props);
    this.state= {
dataCrud: [],
showData: false,
UpdateData: {},
Showmodal:false 
    }
  }

  componentDidMount = async ()=> {
    await axios.get("http://localhost:3333/crypto/fav")
    .then(result => {
      this.setState ({
        dataCrud: result.data,
        showData:true
      })
    }).catch(err=>{
      console.log(err);
    })
  }


  deleteFavorite = async (id) =>{
    await axios.delete(`http://localhost:3333/crypto/fav/${id}`)
    const item = this.state.dataCrud.filter(i=> i._id !== id)
    this.setState ({
      dataCrud: item,
    })
  }

  updateFavorite = (item)=> {
    this.setState({showModal:true, UpdateData:item})
  }


  UpdateFav = async (e) => {
    const id = this.state.UpdateData._id;
    const body = {
      title: e.target.title.value,
      description: e.target.descriptionv.value,
      toUSD: e.target.toUSD.value,
      image_url: e.target.image_url.value
    }
    const req = await axios.put(`http://localhost:3333/crypto/fav/${id}`, body)
    const newItem= this.state.dataCrud.map(obj => {
      if(obj._id === id) {
        obj.title = req.data.title
        obj.description = req.data.description
        obj.toUSD = req.data.toUSD
        obj.image_url = req.data.image_url
        return obj
      }
      return obj
    })
this.setState({
  dataCrud:newItem
});
this.updateFavorite({});
this.setState({Showmodal: false})
  }
  




  render() {
    return(
      <>
        <h1>Fav Crypto List</h1>

        {this.state.showData && 
        <FavCards
        dataCrud= {this.state.dataCrud}
        deleteFavorite= {this.deleteFavorite}
        /> 
        }

        {this.state.Showmodal && 
        
        <FavModal
        UpdateData = {this.state.UpdateData}
        UpdateFav = {this.UpdateFav}
        Showmodal = {this.Showmodal}
        close= {this.close}
        /> 
        }
      </>
    )
  }
}

export default FavCrypto;
