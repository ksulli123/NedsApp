import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime:
        this.props.item.advertised_start.seconds -
        Math.round(new Date().getTime() / 1000)
    };
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item}>
        <Text
          style={{
            fontFamily: Platform.OS === "ios" ? "Arial-BoldMT" : "sans-serif"
          }}
          styles={styles.itemTop}
        >
          {item.meeting_name}
        </Text>
        <Text styles={styles.itemTop}>R{item.race_number}</Text>
        <Text style={styles.time}>{this.state.remainingTime}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    width: 180,
    height: 80,
    backgroundColor: "#ccc",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#ccc"
  },
  itemTop: {
    fontFamily: "Arial",
    justifyContent: "space-between"
  },
  time: {
    justifyContent: "center"
  }
});

export default Race;
