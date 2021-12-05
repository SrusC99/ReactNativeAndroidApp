import 'react-native-gesture-handler';
import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';  

 export default class App extends Component  
{  
  
   constructor(){  
     super();  
     this.state={  isVisible : true }  
   }  

  Hide_Splash_Screen=()=>{  
    this.setState({  isVisible : false });  
  }  

  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  that.Hide_Splash_Screen(); }, 5000);  
  }  
  render()  
  {  
        let Splash_Screen = (
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={{uri:'https://mobikul.com/wp-content/uploads/2019/04/ec.jpg'}}  
                          style={{width:'50%', height: '50%', resizeMode: 'contain'}} />  
                 </View>  
             </View> )  

        return(  

            <View style = {styles.MainContainer}>  
                <Image source={{uri:'https://mobikul.com/wp-content/uploads/2019/04/ec.jpg'}}  
                    style={styles.logo} /> 
                <View style = {styles.infoContainer}>  
                  <TextInput placeholder="USERNAME" placeholderTextColor="rgba(255,255,255,0.8)"
                    style={styles.input}/>  
                  <TextInput placeholder="PASSWORD" placeholderTextColor="rgba(255,255,255,0.8)"
                    style={styles.input} />  
                  
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('TaskMonitorScreen')}  
                    style={styles.ButtonContainer}>
                    <Text style={{fontSize: 20, marginLeft:50}}>LOGIN</Text>
                  </TouchableOpacity>
                </View>
                {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
            </View> 
           
        );  
  }  
}  

const styles = StyleSheet.create(  
{  
    MainContainer: {  
        flex: 1,  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0 
    }, 

    logo: {
      marginTop:150,
      width: 100,
      height: 100,
    },

    ButtonContainer:{
      height:30,
      backgroundColor:'#e37827',
      width:170,
      marginLeft:100,
      marginRight:100,
    },

    input:{
      height:40,
      backgroundColor:'#4A6572',
      color:'#FFF',
      marginBottom:10,
      paddingHorizontal:10,
      borderRadius:25,
    },

    infoContainer:{
      marginTop:20,
      left:0,
      right:0,
      bottom:0,
      height:200,
      padding:20,
    },

    SplashScreen_RootView: {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView: {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'white',  
        flex:1,  
    },  
}
);


