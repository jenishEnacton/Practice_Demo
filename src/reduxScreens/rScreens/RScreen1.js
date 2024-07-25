import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CButton from '../../constant/CButton';
import {decrementAsync, incrementAsync} from '../Redux/action';
import {selectCount, selectUserData} from '../Redux/selector';

export default function RScreen1() {
  const dispatch = useDispatch();

  // const count = useSelector(state => state.countreducer.count);
  // const userData = useSelector(state => state.countreducer.userData);

  const count = useSelector(selectCount);
  const userData = useSelector(selectUserData);

  const onPressIncrement = () => {
    dispatch(incrementAsync());
  };

  const onPressDecrement = () => {
    dispatch(decrementAsync());
  };

  const renderUserData = ({item}) => {
    return (
      <View style={styles.renderdataview}>
        <Text style={styles.datatext}>{item.fullName}</Text>
        <Text style={styles.datatext}>{item.email}</Text>
        <Text style={styles.datatext}>{item.phoneNumber}</Text>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.renderdataview}>
        <Text style={[styles.datatext, {textAlign: 'center'}]}>No Data</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>RScreen1</Text>
      <Text style={styles.countertext}>Counter : {count}</Text>
      <View style={styles.btnview}>
        <CButton title={'Increment'} onPress={onPressIncrement} />
        <CButton title={'Decrement'} onPress={onPressDecrement} />
      </View>
      <View style={styles.innerview}>
        <Text style={styles.title}>User Data</Text>
        <FlatList
          data={userData}
          renderItem={renderUserData}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  innerview: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  countertext: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 30,
  },
  renderdataview: {
    backgroundColor: '#F8EDED',
    margin: 10,
    padding: 10,
    paddingLeft: 20,
  },
  datatext: {
    fontSize: 17,
    color: '#000',
  },
});
