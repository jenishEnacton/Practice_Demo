import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ExStyle from '../styles/CStyle';
import CTextInput from '../constant/CTextInput';
import CButton from '../constant/CButton';
import {StackNav} from '../navigation/StackNavigationKeys';
import CModal from '../constant/CModal';

export default function Screen1({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const onChangeName = text => setName(text);
  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);
  const onPressnext = () => navigation.navigate(StackNav.Screen2);

  const onPressBtn = () => console.warn('You tapped the button!');
  const onLongPressBtn = () => console.warn('You long-pressed the button!');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onPressSubmit = () => {
    if (!name) {
      Alert.alert('Please enter your name');
    } else if (!email) {
      Alert.alert('Please enter your email');
    } else if (!password || password.length < 8) {
      Alert.alert('Please enter password and password must be in 8 characters');
    } else {
      Alert.alert('Successfully Submitted');
      resetForm();
    }
  };
  const onPressApiData = () => {
    navigation.navigate(StackNav.User);
  };

  const onPressopenmodal = () => setIsVisible(true);
  const onPressclosemodal = () => setIsVisible(false);

  return (
    <View style={ExStyle.container}>
      <Text style={styles.title}>Demo App</Text>
      <View
        style={{
          flex: 1,
          gap: 10,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.hometxt}>Home</Text>
        <Button title="Press Here" onPress={onPressBtn} />
        <TouchableHighlight
          onPress={onPressBtn}
          onLongPress={onLongPressBtn}
          style={styles.button}
          underlayColor="white">
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </TouchableHighlight>
        <View style={styles.formview}>
          <Text style={styles.formtitle}>User Form</Text>
          <CTextInput
            title={'Name'}
            placeholder={'Enter Name'}
            value={name}
            onChangeText={onChangeName}
          />
          <CTextInput
            title={'Email'}
            placeholder={'Enter Email'}
            value={email}
            onChangeText={onChangeEmail}
          />
          <CTextInput
            title={'Password'}
            placeholder={'Enter Password'}
            secureTextEntry={true}
            value={password}
            onChangeText={onChangePassword}
          />
          <CButton title={'Submit'} onPress={onPressSubmit} />
        </View>
        <View style={styles.dialogview}>
          <CButton
            title={'Api Data'}
            extrasty={styles.dialogbtn}
            onPress={onPressApiData}
          />
          <CButton
            title={'Open Dialog'}
            extrasty={styles.dialogbtn}
            onPress={onPressopenmodal}
          />
        </View>
        <CModal visible={isVisible} onPressClose={onPressclosemodal} />
        <CButton
          title={'Next'}
          extrasty={styles.nextbtn}
          onPress={onPressnext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },
  hometxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
    alignSelf: 'center',
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: 'salmon',
    alignSelf: 'center',
  },
  buttonText: {
    padding: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  formtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#000',
  },
  nextbtn: {
    backgroundColor: '#EF5A6F',
  },
  formview: {flex: 1, justifyContent: 'center'},
  dialogbtn: {
    backgroundColor: '#6C946F',
    width: 150,
    alignSelf: 'center',
  },
  dialogview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
