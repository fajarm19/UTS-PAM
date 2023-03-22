import React, { Component, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const DetailItem = ({ navigation }) => {
  let [jumlah, setJumlah] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (jumlah === 10) {
            alert("Sebaiknya jangan lebih dari 10,\n dimulai dari 0 ya kak");
            setJumlah(0);
          } else {
            setJumlah(jumlah + 1);
          }
        }}
        style={{
          padding: 80,
          backgroundColor: "grey",
          borderRadius: 40,
        }}
      >
        <Text
          style={{
            color: "gold",
            fontSize: 28,
            textAlign: "center",
            width: 100,
          }}
        >
          {jumlah > 0 ? jumlah : "Press Me!"}
        </Text>
      </TouchableOpacity>
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
});

export default DetailItem;
