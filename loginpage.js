import React from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const backgroundImage = { uri: 'https://placekitten.com/640/480' }; 

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.contentContainer}>
          <Image
            source={backgroundImage}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="maroon"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="maroon"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { /* Handle Forgot Password */ }}
            style={styles.forgotPasswordButton}
          >
            <Text style={styles.forgotPasswordButtonText}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createAccountButton}
          >
            <Text style={styles.createAccountButtonText}>Create your account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 60,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: 'maroon',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  forgotPasswordButtonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  createAccountButton: {
    borderRadius: 5,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default App;
