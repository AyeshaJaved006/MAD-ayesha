import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Contact />
      <Education />
      <TopSkills />
      <Certifications />
      <Experience />
    </ScrollView>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.name}>Ayesha Javed</Text>
      <Text style={styles.title}>Software Engineer</Text>
       <Text style={styles.title}>Project Manager</Text>
    <Text style={styles.subTitle}>Graphic Designer</Text>
      
    </View>
  );
};

const Contact = () => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactText}>Barotha Cantt HO.No j2/2</Text>
      <Text style={styles.contactText}>Phone: 923446189326</Text>
      <Text
        style={styles.contactText}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/ayesha-javed-2b4755203/')}
      >
        LinkedIn:https://www.linkedin.com/in/ayesha-javed-2b4755203/
      </Text>
      
    </View>
  );
};

const TopSkills = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}> Skills</Text>
      <Text style={styles.skill}>Problem Solving</Text>
      <Text style={styles.skill}>Microsoft l</Text>
      <Text style={styles.skill}>Leadership Skills</Text>
    </View>
  );
};

const Certifications = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Certicified</Text>
      <Text style={styles.certification}>Microsoft</Text>
      <Text style={styles.certification}>Html</Text>
       <Text style={styles.certification}>Css</Text>

    </View>
  );
};


const Experience = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Experience</Text>
      <Text style={styles.experienceTitle}>Intag Pvt. Ltd.</Text>
      <Text style={styles.experienceText}>Project Manager Islamabad, Pakistan</Text>
      <Text style={styles.experienceText}>Sep 2021 - February 2022 </Text>
    </View>
  );
};

const Education = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.educationText}>Comsats Institute of Information and Technology, Attock City, Pakistan</Text>
      <Text style={styles.educationText}>BS Software Engineering</Text>
      <Text style={styles.educationText}>2020 - 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'darkgreen',
   fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
  },
  location: {
    fontSize: 16,
    color: 'black',
  },
  contactContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  contactText: {
    fontSize: 16,
    color: 'black',
  },
  sectionContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  skill: {
    fontSize: 16,
    color: 'black',
  },
  certification: {
    fontSize: 16,
    color: 'black',
  },
  summaryText: {
    fontSize: 16,
    color: 'black',
  },
  experienceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  experienceText: {
    fontSize: 16,
    color: 'black',
  },
  educationText: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;
