import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Question from './components/Question';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewone}>
        <Text style={styles.heading}>New Request</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Cancel clicked')}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linebreak}></View>

      {/*Question Component */}
      <Question/>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="arrow-back" size={20} color="white" />
          <Text style={styles.footerText} onPress={()=>
            Alert.alert('Next Clicked')}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width: '100%',
  },
  linebreak: {
    borderColor: '#000',
    borderBottomWidth: 2,
  },
  viewone: {
    flexDirection: 'row', 
    justifyContent: 'center',  
    alignItems: 'center',  
    width: '100%',
    paddingHorizontal: 10,
    position: 'relative', 
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 10,
    flex: 1,  
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
  },
  button: {
    position: 'absolute', 
    right: 10,  
  },
  footer: {
    height: '6%', 
    backgroundColor: '#808080', 
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',  
    bottom: 0,  
    width: '100%',  
    paddingHorizontal: 20,
  },
  footerButton: {
    flexDirection: 'row',  
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 3,
  },
  footerText: {
    fontSize: 18,
    color: 'white',
  },
});
