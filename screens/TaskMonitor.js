import 'react-native-gesture-handler';
import React, { Component } from 'react';  
import { StyleSheet,Text,View,TouchableOpacity,Image } from 'react-native';  
import { Table, Row, Rows } from 'react-native-table-component';

export default class TaskMonitor extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Project/Dept./Task', 'Status', 'Due in Days'],
          tableData: [
            ['2141S - Bhimashankar Distilleries\nDesign - Abhishek Mhatre\nC-1411 - Analyzer Column', 'In Progress', '3'],
            ['2141S - Bhimashankar Distilleries\nDesign - Ankit Rane\nC-1412 - Evaporator Column', 'Ready', '3'],
            ['2141S - Bhimashankar Distilleries\nDesign - Abhishek Mhatre\nC-1411 - wheel Trolley', 'Approved', '3'],
            ['2141S - Bhimashankar Distilleries\nDesign - Abhishek Mhatre\nC-1411 - wheel Trolley', 'Approved', '3'],
          ]
        }
      }

    render() {  
        const state = this.state;
        return (  
            <View>  
                <View style={styles.TopBox}>
                    <Text style={{ marginLeft:20,color:'white', fontSize:25}}>Task Monitor</Text>
                    <Text style={{ marginLeft:20,color:'white', fontSize:20}}>All Task</Text>
                </View> 
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FilterScreen')}  
                    style={{position: 'absolute', right: 0, top: 0}}>
                    <Image source={require('../images/filter.png')} style={styles.logo} /> 
                </TouchableOpacity>

                <View style={styles.container}>
                  <Table border Style={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles.head} style={styles.text}/>
                    <Rows data={state.tableData} textStyle={styles.text}/>
                  </Table>
                </View>
            </View>  
          );  
    }  
}   

const styles = StyleSheet.create({  
 
    TopBox:{  
        width: 340,  
        height: 60,  
        backgroundColor: '#4A6572',
    },  

    FilterButton:{  
        width: 75,  
        height: 60,
    },

    logo:{
        width: 75,  
        height: 60, 
    },

    SecondBox:{  
        marginStart:100,
        width: 340,  
        height: 80,  
        backgroundColor: '#344955'
    }, 

    container: { 
       backgroundColor: '#fff' 
    },

    head: {
      height: 50, 
      backgroundColor: '#f1f8ff' 
    },
    
    text: {
     margin: 15 
    }
})  
