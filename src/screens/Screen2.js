import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SectionData, UserData} from '../data/RawData';
import CButton from '../constant/CButton';
import {StackNav} from '../navigation/StackNavigationKeys';

export default function Screen2({navigation}) {
  const [selected, setSelected] = useState(0);

  const renderUserData = ({item}) => {
    return (
      <View style={styles.renderItemview}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.email}</Text>
      </View>
    );
  };

  const onPressFlatlist = () => {
    setSelected(0);
  };

  const onPressSectionList = () => {
    setSelected(1);
  };

  const renderSectionData = ({item}) => {
    return (
      <View style={styles.sectionview}>
        <Text style={styles.seclisitem}>{item}</Text>
      </View>
    );
  };

  const onPressNext = () => navigation.navigate(StackNav.Screen3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Data List</Text>
      <View style={styles.btnview}>
        <CButton
          title={'FlatList'}
          extrasty={[
            styles.btnsty,
            {backgroundColor: selected === 0 ? '#17153B' : 'black'},
          ]}
          onPress={onPressFlatlist}
        />
        <CButton
          title={'SectionList'}
          extrasty={[
            styles.btnsty,
            {backgroundColor: selected === 1 ? '#17153B' : 'black'},
          ]}
          onPress={onPressSectionList}
        />
      </View>
      {selected === 0 ? (
        <ScrollView
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}>
          <FlatList
            data={UserData}
            renderItem={renderUserData}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </ScrollView>
      ) : (
        <View style={styles.listContainer}>
          <SectionList
            style={styles.seclist}
            showsVerticalScrollIndicator={false}
            sections={SectionData}
            keyExtractor={(item, index) => item + index}
            renderItem={renderSectionData}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      )}
      <CButton
        title={'Grid Page'}
        extrasty={styles.gridbtn}
        onPress={onPressNext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  renderItemview: {
    padding: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#000',
  },
  btnsty: {
    width: '30%',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  sectionview: {
    margin: 5,
  },
  seclist: {
    marginHorizontal: 30,
  },
  seclisitem: {
    fontSize: 19,
    marginLeft: 20,
  },
  gridbtn: {
    marginHorizontal: 30,
  },
});
