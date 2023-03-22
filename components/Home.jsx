import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/contoh.jpg")}
        imageStyle={{ resizeMode: "cover" }}
        style={{
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.heading}>
          Selamat Datang di Aplikasi{" "}
          <Text style={{ fontSize: 40, color: "#fbf1c7" }}> Fajarpedia</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Detail")}
          >
            <Text style={styles.buttonText}>Battery Status</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Profil")}
          >
            <Text style={styles.buttonText}>Profil Mahasiswa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Detail Item")}
          >
            <Text style={styles.buttonText}>Detail Item</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    padding: 20,
    margin: 20,
    backgroundColor: "#fbf1c7",
    borderRadius: 15,
  },
  buttonText: { color: "#282828", textAlign: "center", fontSize: 18 },
});

export default Home;
