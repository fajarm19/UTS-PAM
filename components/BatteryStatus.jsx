import * as React from "react";
import * as Battery from "expo-battery";
import { StyleSheet, Text, View } from "react-native";

export default class BatteryStatus extends React.Component {
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log("batteryLevel changed!", batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "gold", fontSize: 24 }}>
          Battery sekarang bro:{" "}
          {`${Math.round(this.state.batteryLevel * 100)}%`}
        </Text>
      </View>
    );
  }
}
