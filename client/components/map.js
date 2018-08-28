'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { GOOGLE_API_KEY } from '../../secrets-client'

const MapFrame = styled.div`
  height: 100%;
`

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    startLocation: { lng: 41.879052, lat: -87.635657 }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <MapFrame>
        <Map google={this.props.google}
          onClick={this.onMapClicked}
          center={this.state.startLocation}
          >
          <Marker onClick={this.onMarkerClick}
            name="Current location" />
          {/* BUG: clicking the 'x' to closee infowindow does not set showingInfoWindow: false */}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </MapFrame>
    )
  }
}

export default GoogleApiWrapper({ apiKey: GOOGLE_API_KEY })(MapContainer)
