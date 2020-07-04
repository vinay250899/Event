import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class Dashboard extends React.Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
      return {
        headerTitle: 'Dashboard@@',
        headerLeft: <Text>Left</Text>,
        headerRight: (
          <Button onPress = {navigation.toggleDrawer}
          title="Menu"
          color="#fff">
            <Text>Menu</Text>
          </Button>
        ),
        headerTitleStyle: {
          flex: 1,
          color: '#fff',
          textAlign: 'center',
          alignSelf: 'center',
          fontWeight: 'normal',
        },
  
        headerStyle: {
          backgroundColor: '#b5259e',
        },
      }
    }
}