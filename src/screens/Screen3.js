import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CButton from '../constant/CButton';
import {StackNav} from '../navigation/StackNavigationKeys';

export default function Screen3({navigation}) {
  const [selectedValue, setSelectedValue] = useState('male');
  const [isEnabled, setIsEnabled] = useState(false);
  const [timesPressed, setTimesPressed] = useState(0);

  const handleSelect = value => {
    setSelectedValue(value);
  };

  const onPressIncrement = () => {
    setTimesPressed(timesPressed + 1);
  };

  const onPressHome = () => {
    navigation.navigate(StackNav.TabNavigation);
  };

  const onPressRedux = () => {
    navigation.navigate(StackNav.RScreen1);
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Text style={styles.title}>Grid List</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedValue === 'male' && styles.radioButtonSelected,
          ]}
          onPress={() => handleSelect('male')}>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedValue === 'female' && styles.radioButtonSelected,
          ]}
          onPress={() => handleSelect('female')}>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>
      {/* <ActivityIndicator size={'large'} color={'#6C946F'} /> */}
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={() => setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
      <View style={styles.outercontainer}>
        <View style={styles.innerview}>
          <Text style={styles.itemview}>John</Text>
          <Text style={styles.itemview}>John</Text>
          <Text style={styles.itemview}>John</Text>
          <Text style={styles.itemview}>John</Text>
          <Text style={styles.itemview}>John</Text>
          <Text style={styles.itemview}>John</Text>
          <Text style={styles.itemview}>John</Text>
        </View>
        <Pressable onPress={onPressIncrement} style={styles.pressablebtn}>
          <Text style={styles.presstitle}>Press Me</Text>
        </Pressable>
        <Text style={styles.timepresstext}>{timesPressed}</Text>
      </View>
      <View
        style={[
          styles.container2,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
      <View style={styles.btnview}>
        <CButton
          title={'Redux Screen'}
          extrasty={styles.homebtn}
          onPress={onPressRedux}
        />
        <CButton
          title={'Home'}
          extrasty={styles.homebtn}
          onPress={onPressHome}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
  itemview: {
    backgroundColor: 'blue',
    margin: 10,
    width: 90,
    height: 100,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  innerview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  outercontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: 20,
    width: 150,
    gap: 10,
  },
  radioButton: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: 'red',
  },
  radioText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container2: {
    flex: 1,
    padding: 20,
  },
  pressablebtn: {
    backgroundColor: 'red',
    padding: 10,
    width: 100,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  presstitle: {
    color: '#fff',
    fontSize: 17,
  },
  timepresstext: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  homebtn: {
    width: '40%',
    alignSelf: 'center',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
