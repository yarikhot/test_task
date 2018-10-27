import React from 'react';
import {GoogleApiWrapper, Map, Marker, Polyline} from 'google-maps-react';

class MapInit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            markers:[{
                position:{
                    lat: 50.204945,
                    lng: 30.315205
                }
            }]
        }
    }

    onMapClicked () {
        return (
            <Marker onClick={this.handleMarkerClick}
                    name={'Current location'}/>
        )
    }


    render() {


        const triangleCoords = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757},
            {lat: 25.774, lng: -80.190}
        ];


        console.log(triangleCoords);

        return (
            <div className="map">
                <Map google={this.props.google}
                     zoom={6}
                     onClick={this.onMapClicked}
                     initialCenter={{
                         lat: 50.204945,
                         lng: 30.315205
                     }}
                     markers={this.state.markers}>{console.log(this.props.google)}
                    <button className="ui button map__btn" onClick={this.onMapClicked} >Add marker</button>
                    {this.state.markers.map(marker => (
                        <Marker
                            {...marker}
                            onRightClick={() => this.state.onMarkerRightClick(marker)}
                        />
                    ))}
                    <Polyline
                        paths={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={1}
                        strokeWeight={10} />
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAZghc4__Twfh6ebkO8FowaQ5_i5RPn0lI")
})(MapInit)
