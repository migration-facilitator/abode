'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapFrame = styled.div`
  height: 100%;
`

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
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
      <Map google={this.props.google}
        onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
          name="Current location" />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyCR8D8tfRpfoBIHSw_kW00LUHcRdWEfmsU' })(MapContainer)
