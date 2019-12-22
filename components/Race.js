import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Timer from "./Timer";

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime:
        this.props.item.advertised_start.seconds -
        Math.round(new Date().getTime() / 1000),
      timer: setInterval(this.tick, 1000)
    };
  }

  //Remove timer on component unmounting
  componentWillUnmount() {
    console.log("Unmounting index: " + this.props.index);
    clearInterval(this.state.timer);
  }

  //Remove 1 second from the remaining time, check if new time is less than 60 seconds
  tick = () => {
    this.setState({
      remainingTime: this.state.remainingTime - 1
    });
    if (this.state.remainingTime < 420 || this.state.remainingTime < 0) {
      this.props.onDelete(this.props.index, this.props.selected);
    }
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.raceContainer}>
          <Text
            style={{
              fontFamily: Platform.OS === "ios" ? "Arial-BoldMT" : "sans-serif",
              fontSize: 16,
              marginBottom: 10,
              justifyContent: "center"
            }}
            styles={styles.itemTop}
          >
            {item.meeting_name}
          </Text>
          <Text styles={styles.itemTop}>R{item.race_number}</Text>
          <Timer remainingTime={this.state.remainingTime} />
        </View>
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
    shadowColor: "#ccc",
    overflow: "hidden",
    justifyContent: "center",

    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  itemTop: {
    fontFamily: "Arial",
    paddingLeft: 10,
    left: 10
  },
  time: {
    justifyContent: "center",
    display: "none"
  },
  raceContainer: {
    flexWrap: "wrap"
  }
});

export default Race;
