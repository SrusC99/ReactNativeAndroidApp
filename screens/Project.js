import 'react-native-gesture-handler';
import React, { Component } from "react";
import { CheckBox } from 'react-native-elements'
import {  Alert, Image, Platform,  StyleSheet,  Text, TouchableHighlight, View, TouchableOpacity, Button } from "react-native";

export default class App extends Component{
  constructor(props){
    super(props);
 
    this.state = {
      isChecked1: true,
    }
    this.state={
      isChecked2: true,
    }
    this.state={
      isChecked3: true,
    }
    this.state={
      isChecked4: true,
    }
 }
   toggleChange = () => {
    this.setState({
      isChecked1: !this.state.isChecked1
    })
    this.setState({
      isChecked2:!this.state.isChecked2
    })
    this.setState({
      isChecked3:!this.state.isChecked3
    })
    this.setState({
      isChecked4:!this.state.isChecked4
    })
  }

 
render() {
  return (

    <View >
       {/* <View style={styles.TopBox} >
        <Text style={{ marginTop:10, marginLeft:170,color:'#FFF',fontSize: 25}}>Filter</Text>
        </View> */}
      <View style={{flexDirection:'row', flexWrap:'wrap'}}> 
    
            <View style={styles.RectangleShapeView}>         
                <View style={styles.container}>

                    <TouchableOpacity style={styles.ButtonContainer} 
                    onPress={() => this.props.navigation.navigate('Project')}>
                      <Text style={styles.navigationbutton}>Project</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonContainer}
                    onPress={() => this.props.navigation.navigate('Department')}>
                      <Text style={styles.navigationbutton}>Department</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonContainer}
                    onPress={() => this.props.navigation.navigate('Resource')}>
                      <Text style={styles.navigationbutton}>Resource</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonContainer}
                    onPress={() => this.props.navigation.navigate('Equipment')}>
                      <Text style={styles.navigationbutton}>Equipment</Text>
                    </TouchableOpacity>
                  
              </View>

            </View>
            <View style={{marginHorizontal:150,marginVertical:-525}} >
                <CheckBox
                    title='2141 S'
                    checked={this.state.isChecked1}
                    onPress={() => this.setState({isChecked1: !this.state.isChecked1})}
                        />
                    <View>
                      <CheckBox
                            center
                            title='2151 S'
                            checked={this.state.isChecked2}
                            onPress={() => this.setState({isChecked2: !this.state.isChecked2})}
                            
                          />
                    </View>
                    <View>
                      <CheckBox
                            center
                            title='2161 S'
                            checked={this.state.isChecked3}
                            onPress={() => this.setState({isChecked3: !this.state.isChecked3})}
                            
                          />
                    </View>
                    <View>
                      <CheckBox
                            center
                            title='2171 S'
                            checked={this.state.isChecked4}
                            onPress={() => this.setState({isChecked4: !this.state.isChecked4})}
                            
                          />
                    </View>
                  
              </View>
              
          </View>
          
        <TouchableOpacity 
          style={styles.ButtonBox}
          onPress={() => Alert.alert('Applied')} >
        <Text style={{ marginLeft:160, marginTop:15, color:'#FFF',fontSize: 25}}>APPLY</Text>
        </TouchableOpacity>

    
    </View>
);}}

const styles = StyleSheet.create({
  TopBox: {
    width: 500,
    height: 50,
    backgroundColor: '#344955'

  },

  RectangleShapeView: {
  width: 150,
  height:650,
  backgroundColor: '#4A6572'
  },

  container: {
    color: "black",
  },

  navigationbutton:{
        fontSize: 20, 
        marginLeft:20,
        marginTop:50
      },

  ButtonBox:{
    width: 500,
    height: 70,
    backgroundColor: '#e37827'
  },
  containerone: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 10,
    fontSize: 30,
    
  },
  ButtonContainer:{
    backgroundColor:'#4A6572',
    borderColor:'black',
    borderWidth: 1 ,
    paddingTop: 50,
    paddingBottom: 20,
    paddingRight: 25,
    paddingLeft: 25,
  
    
  },
  navigationbutton:{
    alignItems:'center',
    marginBottom:25,
    color:'black',
    fontSize:18,

  }

  
  
});


