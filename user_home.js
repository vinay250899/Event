import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image  } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import create_usr from './create_usr';
import add_part_usr from './add_part_usr';
import Log_out from './Log_out';
import mod_usr from './mod_usr';
import view_part_usr from './view_part_usr';

class NavigationDrawerStructure extends Component {

    toggleDrawer = () => {
       
        this.props.navigationProps.toggleDrawer();
      };

   render() {
     return (
          <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
         
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
      );
    }
  }

  const StackNav1 = createStackNavigator({
   
 
    view_part_usr:  view_part_usr,

    mod_usr : mod_usr,
 
});
  const FirstActivity_StackNavigator = createStackNavigator({
  
    First: {
      screen: add_part_usr,
     
      navigationOptions: ({ navigation }) => ({
        title: 'Add Participant',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: 'white',
      }),
    },
  });
  
  const Screen2_StackNavigator = createStackNavigator({
   
    Second: {
        screen: StackNav1,
     
      navigationOptions: ({ navigation }) => ({
        title: 'Participants List',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: 'white',
      }),
    },
  });


   
    const Screen3_StackNavigator = createStackNavigator({
        //All the screen from the Screen3 will be indexed here
        Third: {
          screen: Log_out,
          navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: "#009387",
            },
            headerTintColor: 'white',
          }),
        },
      });


  



  const DrawerNavigatorExample = createDrawerNavigator({

 
 
    Screen1: {
   
      
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Participant',
        
      },
    },
    Screen2: {
 
      screen: Screen2_StackNavigator,
      
      navigationOptions: {
        drawerLabel: 'View Participants',
      },
    },
    Screen3: {
      
        screen: Screen3_StackNavigator,
        
        navigationOptions: {
          drawerLabel: 'Profile',
        },
      },

      

});


export default createAppContainer(DrawerNavigatorExample);










