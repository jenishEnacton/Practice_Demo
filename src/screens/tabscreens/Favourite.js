import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Formik, Field} from 'formik';
import CustomeInput from '../../constant/CustomeInput';
import CButton from '../../constant/CButton';
import {signUpValidationSchema} from '../../utils/validation';
import {getAsyncData, setAsyncData} from '../../utils/asyncStorage';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addUser} from '../../reduxScreens/Redux/action';

export default function Favourite() {
  const focused = useIsFocused();
  const formikRef = useRef(null);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   focused &&
  //     getAsyncData('USERDATA').then(val => {
  //       console.log(val);
  //     });
  // }, [focused]);
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Sign Up Form</Text>
      <View style={styles.innerview}>
        <Formik
          innerRef={formikRef}
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={(values, {resetForm}) => {
            dispatch(addUser(values));
            // setAsyncData('USERDATA', dataToStore).then(() => {
            //   Alert.alert('Data set successfully!');
            // });
            resetForm();
          }}>
          {({handleSubmit, isValid}) => (
            <>
              <Field
                component={CustomeInput}
                name="fullName"
                placeholder="Full Name"
              />
              <Field
                component={CustomeInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomeInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={CustomeInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomeInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />

              <CButton
                title={'Submit'}
                onPress={handleSubmit}
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
    backgroundColor: '#F8EDE3',
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F8EDE3',
  },
});
