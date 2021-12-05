

// import {StyleSheet} from 'react-native'

// const styles = StyleSheet.create({
 
 
//         TopBox:{  
//             width: 340,  
//             height: 60,  
//             backgroundColor: '#4A6572',
//         },  
//         FilterButton:{  
//             width: 75,  
//             height: 60,
//         },
//         logo:{
//             width: 75,  
//             height: 60, 
//         },
//         SecondBox:{  
//             marginStart:100,
//             width: 340,  
//             height: 80,  
//             backgroundColor: '#344955',
//         }, 
//         container: { 
//            backgroundColor: '#fff' },
//         head: {
//          height: 50, backgroundColor: '#f1f8ff' },
//         text: {
//          margin: 15 }
//     })  
    


// export default styles



import React, { Component } from 'react';
import { 
  Alert, 
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View, TouchableOpacity, Button, 
} from 'react-native';
import PropTypes from 'prop-types';


class SelectedCheckboxes {
  constructor() {
    selectedCheckboxes = [];
  }

  addItem(option) {
    selectedCheckboxes.push(option);
  }

  fetchArray() {
    return selectedCheckboxes;
  }
}

class Checkbox extends Component {

  constructor() {
    super();
    this.state = { 
      checked: null 
    }
  }

  componentDidMount() {
    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.checkedObjArr.addItem({
          'key': this.props.keyValue,
          'value': this.props.value,
          'label': this.props.label
        });
      });
    } else {
      this.setState({ 
        checked: false
      });
    }
  }
 
  stateSwitcher(key, label, value) {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.checkedObjArr.addItem({ 
          'key': key,
          'value': value,
          'label': label
        });
      } else {
        this.props.checkedObjArr.fetchArray().splice(
          this.props.checkedObjArr.fetchArray().findIndex(y => y.key == key), 1
        );
      }
    });
  }

  render() {
    return (
      <View>

      <TouchableHighlight
        onPress={this.stateSwitcher.bind(this, this.props.keyValue, this.props.label, this.props.value)} 
        underlayColor="transparent"
        style={{ marginVertical: 20 }}>

        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center' }}>
            <View style={{
              padding: 4, 
              width: this.props.size, 
              height: this.props.size, 
              backgroundColor: this.props.color
            }}>
              {
                (this.state.checked)
                  ?
                  (<View style={styles.selectedUI}>
                    <Image source={require('./images/tick.png')} style={styles.checkboxTickImg} />
                  </View>)
                  :
                  (<View style={styles.uncheckedCheckbox} />)
              }
          </View>
          <Text style={[styles.checkboxLabel, { color: this.props.labelColor }]}>
            {this.props.label}
          </Text>
        </View>

      </TouchableHighlight>
      </View>
    );
  }
}

export default class App extends Component {
 
  constructor() {
    super();
    CheckedArrObject = new SelectedCheckboxes();
    this.state = { pickedElements: '' }
  }
 
  renderSelectedElements = () => {
    if (CheckedArrObject.fetchArray().length == 0) {
      Alert.alert('No Item Selected');
    } else {
      this.setState(() => {
        return {
          pickedElements: CheckedArrObject.fetchArray().map(res => res.value).join()
        }
      });
    }
  }

  render() {
    return (
      <View>

<View style={styles.TopBox} >
        <Text style={{ marginTop:10, marginLeft:20,color:'#FFF',fontSize: 25}}>Filter</Text>
        </View>

        <View style={styles.CheckboxContainer}>
        <Checkbox size={30}
          keyValue={1}
          checked={true}
          color="#E81E63"
          labelColor="#000000"
          label="Birds of Prey"
          value="birds_of_prey" 
          checkedObjArr={CheckedArrObject} />

        <Checkbox size={30}
          keyValue={2}
          checked={false}
          color="#3F50B5"
          labelColor="#000000"
          label="Little Women"
          value="little_women" 
          checkedObjArr={CheckedArrObject} />

        <Checkbox size={30}
          keyValue={3}
          checked={true}
          color="#009688"
          labelColor="#000000"
          label="Doctor Sleep"
          value="doctor_sleep"
          checkedObjArr={CheckedArrObject} />

        <Checkbox size={30}
          keyValue={4}
          checked={false}
          color="#FF9800"
          labelColor="#000000"
          label="Ford v Ferrari"
          value="ford_v_ferrari"
          checkedObjArr={CheckedArrObject} />        


      </View>
    
        <View style={styles.RectangleShapeView}>
          
        <View style={styles.container}>

          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.navigationbutton}>Project</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.navigationbutton}>Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.navigationbutton}>Resource</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.navigationbutton}>Equipment</Text>
          </TouchableOpacity>
        </View>
        </View> 

        <TouchableOpacity 
          style={styles.ButtonBox}
        onPress={() => Alert.alert('Applied')} >
        <Text style={{ marginLeft:160, marginTop:15, color:'#FFF',fontSize: 25}}>APPLY</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}
 
Checkbox.propTypes = {
    keyValue: PropTypes.number.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    labelColor: PropTypes.string,
    checkedObjArr: PropTypes.object.isRequired
}

Checkbox.defaultProps = {
    size: 32,
    checked: false,
    value: 'Default',
    label: 'Default',
    color: '#cecece',
    labelColor: '000000',    
}

const styles = StyleSheet.create(
  {
    CheckboxContainer: {
      flex: 1,
      paddingLeft:200,
    },

    showSelectedButton: {
      padding: 20,
      marginTop: 20,
      alignSelf: 'stretch',
      backgroundColor: '#5D52FF'
    },

    buttonText: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center',
      alignSelf: 'stretch'
    },

    selectedUI: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    checkboxTickImg: {
      width: '85%',
      height: '85%',
      tintColor: '#ffffff',
      resizeMode: 'contain'
    },

    uncheckedCheckbox: {
      flex: 1,
      backgroundColor: '#ffffff'
    },

    checkboxLabel: {
      fontSize: 18,
      paddingLeft: 15
    },

    TopBox: {
      width: 500,
      height: 50,
      backgroundColor: '#344955'
    },
  
    container: {
      color: "#4A6572",
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
    RectangleShapeView: {
      width: 150,
      height:550,
      backgroundColor: '#4A6572'
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
});