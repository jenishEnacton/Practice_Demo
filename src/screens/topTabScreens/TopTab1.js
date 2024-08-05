import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActionSheet from 'react-native-actions-sheet';
import CButton from '../../constant/CButton';
import {StackNav} from '../../navigation/StackNavigationKeys';

export default function TopTab1({navigation}) {
  const actionSheetRef = useRef(null);

  const onPressActionsheet = () => actionSheetRef.current.show();
  const onPressClose = () => actionSheetRef.current.hide();

  const onPressScreen1 = () => navigation.navigate(StackNav.Screen1);
  const onPressScreen2 = () => navigation.navigate(StackNav.Screen2);
  const onPressScreen3 = () => navigation.navigate(StackNav.Screen3);

  const Divider = () => {
    return <View style={{height: 1, backgroundColor: '#ccc', width: '100%'}} />;
  };

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Top Tab 1</Text>
      <Entypo
        name="list"
        size={40}
        style={styles.icon}
        onPress={onPressActionsheet}
      />

      <ActionSheet
        ref={actionSheetRef}
        animated={true}
        containerStyle={{
          width: '90%',
        }}>
        <View style={styles.actionsheetcontainer}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.actiontitleview}>
              <View style={{height: 25, width: 25}} />
              <Text style={styles.sheettitle}>Go to the Screens</Text>
              <AntDesign
                name="closecircleo"
                size={25}
                style={{color: '#397848'}}
                onPress={onPressClose}
              />
            </View>
            <CButton
              title={'screen 1'}
              onPress={onPressScreen1}
              extrasty={styles.btnsty}
            />
            <Divider />
            <CButton
              title={'screen 2'}
              onPress={onPressScreen2}
              extrasty={styles.btnsty}
            />
            <Divider />
            <CButton
              title={'screen 3'}
              onPress={onPressScreen3}
              extrasty={styles.btnsty}
            />
            <Divider />
          </View>
        </View>
      </ActionSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCF7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#',
  },
  icon: {
    color: '#397848',
    margin: 20,
  },
  actionsheetcontainer: {
    marginTop: 15,
    marginVertical: 20,
  },
  sheettitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  btnsty: {
    width: '40%',
    backgroundColor: '#397848',
  },
  actiontitleview: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
