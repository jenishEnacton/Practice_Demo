import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {get} from './apiConstant';
import {CLoader} from '../constant/CLoader';
import {StackNav} from '../navigation/StackNavigationKeys';

export default function User({navigation}) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchdataUser();
  }, []);

  const fetchdataUser = async () => {
    setIsLoading(true);
    const response = await get('/users');
    setUserData(response);
    setIsLoading(false);
  };

  const onPressUserDetail = item => {
    navigation.navigate(StackNav.UserDetail, {item});
  };

  const renderUserdata = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPressUserDetail(item)}>
        <Text style={[styles.username, {fontWeight: '600', fontSize: 20}]}>
          Name: {item.name}
        </Text>
        <Text style={styles.username}>Phone: {item.phone}</Text>
        <Text style={styles.username}>Phone: {item.website}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Users</Text>
      {userData && (
        <View style={styles.innerview}>
          <FlatList
            data={userData}
            renderItem={renderUserdata}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {isLoading && <CLoader />}
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  innerview: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    marginTop: 10,
    padding: 15,
    width: '100%',
    backgroundColor: '#DFD3C3',
    borderRadius: 10,
  },
  username: {
    fontSize: 17,
    color: '#8D493A',
  },
});
