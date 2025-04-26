import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] =useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: false
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Registration data:', formData);
    router.push('/screens/setting');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your</Text>
      <Text style={styles.title}>PopX account</Text>
      
      <View style={styles.formContainer}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => handleChange('fullName', text)}
        />

        {/* Phone Number */}
        <Text style={styles.label}>Phone number*</Text>
        <TextInput
          style={styles.input}
          placeholder="91-XXXXXXXX"
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
          keyboardType="phone-pad"
        />

        {/* Email */}
        <Text style={styles.label}>Email address*</Text>
        <TextInput
          style={styles.input}
          placeholder="email@example.com"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text style={styles.label}>Password*</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
        />

        {/* Company Name */}
        <Text style={styles.label}>Company Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="Company"
          value={formData.company}
          onChangeText={(text) => handleChange('company', text)}
        />

        {/* Agency Selection */}
        <Text style={styles.label}>Are you an agency?*</Text>
        <View style={styles.radioContainer}>
          <TouchableWithoutFeedback onPress={() => handleChange('isAgency', true)}>
            <View style={styles.radioOption}>
              <View style={styles.radioCircle}>
                {formData.isAgency && <View style={styles.radioChecked} />}
              </View>
              <Text style={styles.radioText}>Yes</Text>
            </View>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback onPress={() => handleChange('isAgency', false)}>
            <View style={styles.radioOption}>
              <View style={styles.radioCircle}>
                {!formData.isAgency && <View style={styles.radioChecked} />}
              </View>
              <Text style={styles.radioText}>No</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={styles.registerButton}
          onPress={handleSubmit}
        >
          <Text style={styles.registerButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    width:'auto',
    height:'auto'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    marginTop: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioChecked: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#6C63FF',
  },
  radioText: {
    fontSize: 16,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});