import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const Profil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profil Mahasiswa</Text>
      <Text style={styles.text}>Nama : Fajar Maulana </Text>
      <Text style={styles.text}>NIM : 120140136</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    color: "#fbf1c7",
    fontSize: 24,
  },
});

export default Profil;
