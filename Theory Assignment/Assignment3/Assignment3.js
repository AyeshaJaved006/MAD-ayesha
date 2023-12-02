import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CVForm" component={CVFormScreen} />
        <Stack.Screen name="CVDisplay" component={CVDisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      if (!username || !password) {
        alert('Please enter both username and password');
        return;
      }

      await AsyncStorage.setItem(username, JSON.stringify({ username, password }));

      setUsername('');
      setPassword('');

      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        alert('Please enter both username and password');
        return;
      }

      const userData = await AsyncStorage.getItem(username);

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        if (parsedUserData.password === password) {
          setUsername('');
          setPassword('');

          navigation.navigate('CVForm', { userData: parsedUserData });
        } else {
          alert('Invalid password');
        }
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Registration")}>
        <Text>Don't have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const CVFormScreen = ({ navigation, route }) => {
  const { userData } = route.params;
  const [personalDetails, setPersonalDetails] = useState('');
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [certificationsAndAwards, setCertificationsAndAwards] = useState('');
  const [publicationsAndPresentations, setPublicationsAndPresentations] = useState('');
  const [professionalMemberships, setProfessionalMemberships] = useState('');
  const [volunteerWork, setVolunteerWork] = useState('');

  useEffect(() => {
    setPersonalDetails(userData.personalDetails || '');
    setProfessionalSummary(userData.professionalSummary || '');
    setWorkExperience(userData.workExperience || '');
    setEducation(userData.education || '');
    setSkills(userData.skills || '');
    setCertificationsAndAwards(userData.certificationsAndAwards || '');
    setPublicationsAndPresentations(userData.publicationsAndPresentations || '');
    setProfessionalMemberships(userData.professionalMemberships || '');
    setVolunteerWork(userData.volunteerWork || '');
  }, [userData]);

  const handleSaveCV = async () => {
    try {
      const updatedUserData = {
        ...userData,
        personalDetails,
        professionalSummary,
        workExperience,
        education,
        skills,
        certificationsAndAwards,
        publicationsAndPresentations,
        professionalMemberships,
        volunteerWork,
      };

      await AsyncStorage.setItem(userData.username, JSON.stringify(updatedUserData));

      navigation.navigate('CVDisplay', { cvData: updatedUserData });
    } catch (error) {
      console.error('Error saving CV data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CV Form Screen</Text>
      <Text style={styles.headerText}>Welcome, {userData.username}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Personal Details"
        value={personalDetails}
        onChangeText={setPersonalDetails}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Professional Summary"
        value={professionalSummary}
        onChangeText={setProfessionalSummary}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Work Experience"
        value={workExperience}
        onChangeText={setWorkExperience}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Education"
        value={education}
        onChangeText={setEducation}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Skills"
        value={skills}
        onChangeText={setSkills}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Certifications and Awards"
        value={certificationsAndAwards}
        onChangeText={setCertificationsAndAwards}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Publications and Presentations"
        value={publicationsAndPresentations}
        onChangeText={setPublicationsAndPresentations}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Professional Memberships and Affiliations"
        value={professionalMemberships}
        onChangeText={setProfessionalMemberships}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Volunteer Work"
        value={volunteerWork}
        onChangeText={setVolunteerWork}
        multiline
      />

      <Button title="Save CV" onPress={handleSaveCV} />
    </ScrollView>
  );
};

const CVDisplayScreen = ({ route }) => {
  const { cvData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CV Display Screen</Text>
      <Text style={styles.headerText}>Welcome, {cvData.username}!</Text>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Personal Details:</Text>
        <Text>{cvData.personalDetails}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Professional Summary:</Text>
        <Text>{cvData.professionalSummary}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Work Experience:</Text>
        <Text>{cvData.workExperience}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Education:</Text>
        <Text>{cvData.education}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Skills:</Text>
        <Text>{cvData.skills}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Certifications and Awards:</Text>
        <Text>{cvData.certificationsAndAwards}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Publications and Presentations:</Text>
        <Text>{cvData.publicationsAndPresentations}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Professional Memberships and Affiliations:</Text>
        <Text>{cvData.professionalMemberships}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Volunteer Work:</Text>
        <Text>{cvData.volunteerWork}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 16,
    color: '#555',
  },
  cvSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#007AFF',
},})