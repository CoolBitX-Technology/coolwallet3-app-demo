import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import {requestLocationPermission, checkLocationPermission} from '../Utils/PermissionUtil';
// import checkPermission from '../Utils/PermissionUtil';

class Permission extends Component {
  render() {
    const { title, container, defaultBtn, warning, defaultColor } = styles;
    return (
      <View>
        <Text style={title}>Permission</Text>
        <View style={container}>
          <TouchableOpacity style={defaultBtn} onPress={requestLocationPermission}>
            <Text style={defaultColor}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={defaultBtn} onPress={checkLocationPermission}>
            <Text style={defaultColor}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default Permission