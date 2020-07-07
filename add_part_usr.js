import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    Picker,
  } from 'react-native';
  
  import Icons from 'react-native-vector-icons/MaterialIcons';

  import Zocial from 'react-native-vector-icons/Zocial';
  
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome1 from 'react-native-vector-icons/FontAwesome5';
 
  import firebase from 'firebase';
    require('firebase')


  

  export default class SignUp extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
          Name : '',
          email: '',
          PhoneNumber : '',
          USN : '',
          Event: '',
          choosenindex: '',
          Amount: '',
        
          hidePassword: true 
        }
      };

      

      Register=(Name,email,PhoneNumber,USN,Event,Amount)=>{


        if(Name){
          if(email){
            if(PhoneNumber){
              if(USN){
                if(Event){
                  if(Amount){

        firebase.database().ref().push({Name,email,PhoneNumber,USN,Event,Amount}); 
        this.setState({
          Name:'',
          email:'',
          PhoneNumber:'',
          USN : '',
          Event:'',
          Amount:'',
      
          
        })

      }else{
        alert('Please select Registration Fee paid/unpaid');
      }
     }else{
      alert('Please select Event-');
       }
       }else{
        alert('Please insert University Seat Number(USN)');
       }
        }else{
         alert('Please insert PhoneNumber');
        }
          }else{
         alert('Please insert Email');
          }
        }else{
      alert('Please insert Name');
        }
    }

    render() {
      
        return (
            <View style = {styles.container}>
              { console.disableYellowBox = true }
                <StatusBar backgroundColor = "#009387" barStyle = "light-content"/>
             <View style = {styles.header}>
               <Text style = {styles.text_header}>Register Here For an Event</Text>
             </View>
             <View 
             
              animation="fadeInUpBig"
             style = {styles.footer}>
                 <ScrollView>
                  <Text style = {styles.text_footer}>Name</Text>
                   <View style = {styles.action}>
                               <FontAwesome
                               name = "user-o"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Full Name"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                              
                               onChangeText={(Name) => this.setState({Name})}
                               value={this.state.Name}
                               />
                      
                   </View>
                   <Text style =  {[styles.text_footer, {marginTop : 30}]}>Email</Text>
                   <View style = {styles.action}>
                               <Zocial
                               name = "email"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Email"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                               keyboardType="email-address"
                               onChangeText={(email) => this.setState({email})}
                               value={this.state.email}
                               />
            
                   </View>
                   <Text style = {[styles.text_footer, {marginTop : 30}]}>Phone Number</Text>
                   <View style = {styles.action}>
                               <FontAwesome
                               name = "phone"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Phone Number"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                               keyboardType='numeric'
                               onChangeText={(PhoneNumber) => this.setState({PhoneNumber})}
                               value={this.state.PhoneNumber}
                               />
                       
                   </View>

                   <Text style = {[styles.text_footer, {marginTop : 30}]}>University Seat Number (USN)</Text>
                   <View style = {styles.action}>
                               <FontAwesome1
                               name = "user-check"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your University Seat Number"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                             
                               onChangeText={(USN) => this.setState({USN})}
                               value={this.state.USN}
                               />
                       
                   </View>

                   
                   
                   <Text style = {[styles.text_footer, {marginTop : 30}]}>Select the Event</Text>   
                   <View style={styles.container6}>
     
        <Text style = {styles.text}>
        <Icons
                               name = "event-seat"
                               color = "#05375a"
                               size = {20}
                               />
               Event : {this.state.Event}</Text>
  
        <Text style = {styles.text}>Code : {this.state.choosenindex}</Text>
        
        
        <Picker   mode="dropdown" selectedValue={this.state.Event}
          onValueChange={
          (itemValue, itemIndex) => this.setState({
               Event: itemValue, 
               choosenindex:itemIndex})
        }>
          <Picker.Item label = "Paper Presentation" value = "Paper Presentation" />
            <Picker.Item label = "Debate" value = "Debate" />
            <Picker.Item label = "Quiz" value = "Quiz" />
  
        </Picker>
      </View>





      <Text style = {[styles.text_footer, {marginTop : 30}]}>Amount</Text>
      <View style={styles.container6}>
      <Text style = {styles.text}>
        <FontAwesome
                               name = "rupee"
                               color = "#05375a"
                               size = {20}
                               />
               Amount : {this.state.Amount}</Text>
  
      
        
        
        <Picker selectedValue={this.state.Amount}
          onValueChange={
          (itemValue) => this.setState({
               Amount: itemValue, 
              })
        }>
          
          <Picker.Item label = "Paid" value = "Paid" />
            <Picker.Item label = "Unpaid" value = "Unpaid" />
  
        </Picker>
      </View>

       
                   <View style = {styles.button}>
                   <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
                     onPress={()=> this.Register(this.state.Name,this.state.email,this.state.PhoneNumber,this.state.USN,this.state.Event,this.state.Amount)}>
                    <Text style={styles. textSign1}>Register</Text>
                    </TouchableOpacity>
       
                   
                    </View>
                    </ScrollView>

                   
             </View>
            </View>
           );

    };
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#009387'
    }, 
    header : {
        flex: 0.5,
        justifyContent : 'flex-end',
        paddingVertical : 20,
        paddingHorizontal : 25,
    },
    footer : {
        flex: 3,
        backgroundColor : "#fff",
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        paddingVertical : 50,
        paddingHorizontal : 30,
    },
    text_header : {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 30,
    },
    text_footer : {
        color : '#05375a',
        fontSize : 18
    },
    action : {
        flexDirection : 'row',
        marginTop : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#f2f2f2',
        paddingBottom : 5
    },
    textInput: {
        flex : 1,
        paddingLeft :10,
        color: '#05375a',
        marginTop : -12
    },
    button : {
        alignItems : 'center',
        marginTop : 30
    },
    signIn : 
    {
        width : '100%',
        height : 50,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 10
    },
    textSign : {
        fontSize : 18,
        fontWeight : 'bold',
    },
    buttonContainer: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:150,
        borderRadius:50,
      },
      loginButton: {
        backgroundColor: '#009387',
      },
    textSign1 : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18
    },
    Icon : {
      color : 'grey',
      height : 20,
      width : 20,
    },
     container6: {
   
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
      fontSize: 20,
      alignSelf: 'center',
      color : '#009387',
      paddingLeft : 10,
   }
});



