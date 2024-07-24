import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Formik} from 'formik';
import CTextInput from '../../constant/CTextInput';
import CButton from '../../constant/CButton';
import {loginValidationSchema} from '../../utils/validation';

export default function Home() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.innerview}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <CTextInput
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <CTextInput
                name="password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <CButton
                extrasty={styles.btn}
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  innerview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    width: '70%',
    marginTop: 30,
  },
  errorText: {
    fontSize: 15,
    color: 'red',
  },
});
