import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CButton from '../../constant/CButton';
import {StackNav} from '../../navigation/StackNavigationKeys';
import {Field, Formik} from 'formik';
import CustomeInput from '../../constant/CustomeInput';
import {blogValidationSchema} from '../../utils/validation';

export default function Profile({navigation}) {
  const onPressDrawerOpen = () => {
    navigation.navigate(StackNav.DrawerNavigation);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Blog Screen</Text>
      <CButton
        title={'Open Drawer'}
        extrasty={styles.btn}
        onPress={onPressDrawerOpen}
      />
      <View style={styles.innerview}>
        <Formik
          validationSchema={blogValidationSchema}
          initialValues={{
            title: '',
            post: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleSubmit, isValid}) => (
            <>
              <Field
                component={CustomeInput}
                name="title"
                placeholder="Title"
              />
              <Field
                component={CustomeInput}
                name="post"
                placeholder="Write post..."
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
              <CButton
                onPress={handleSubmit}
                title="POST"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  innerview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5FCF7',
  },
});
