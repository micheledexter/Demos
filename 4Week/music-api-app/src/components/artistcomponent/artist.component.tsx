import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { Artist } from '../../assets/models/artist';

export class ArtistComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      artistList: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/artists'
    }).then((response: AxiosResponse<Artist[]>) => {
      console.log(response.data);
      this.setState({
        artistList: response.data
      });
    }).catch((err) => {
      console.log(`Something went wrong: ${err}`);
    });
  }

  render() {

    return (
      <div className="artists">
        {this.state.artistList.map((artist: Artist, key: number) => {
          return <div>
            <span>Name: </span>{artist.name}&nbsp;
            <span># of members: </span>{artist.numberOfMembers}&nbsp;
            <span>Genre: </span>{artist.genre}&nbsp;
            <span>Albums: </span>{artist.albums.map((album, key: number) => {
              return <span>{album}&nbsp;</span>
            })}<br />
          </div>
        })}
      </div>
    )
  }
}