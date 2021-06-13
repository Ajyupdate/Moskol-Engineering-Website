import React, {Component} from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
const mapStyles = {
    width: '100%px',
    height: '400px'
}
export class MapContainer extends Component{
    state={
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
    onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
    onClose = props => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow:false,
                activeMarker:null
            });
        }
    }
    render(){
        return(
            <Map className="map" google={this.props.google} zoom={13} style={mapStyles} initialCenter={{ lat: 6.609191, lng:3.227203}}>
                <Marker onClick={this.onMarkerClick} name={'Moscol engineering'}/>
                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
                <div><h4>{this.state.selectedPlace.name}</h4></div></InfoWindow>

            </Map>
        )
    }
    
}
export default GoogleApiWrapper({ apiKey: 'AIzaSyCziw-ecHy1327X4D9xjOf4gRpckUuHd8Y&'})(MapContainer)
