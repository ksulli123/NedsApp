import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Timer from "./Timer";

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime:
        this.props.item.advertised_start.seconds -
        Math.round(new Date().getTime() / 1000),
      timer: null
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    this.setState({
      remainingTime: this.state.remainingTime - 1
    });
    if (this.state.remainingTime < 60) {
      console.log(this.props.index);
      this.props.onDelete(this.props.index, this.props.selected);
    }
  };

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
        <Timer remainingTime={this.state.remainingTime} />
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
    overflow: "hidden"
  },
  itemTop: {
    fontFamily: "Arial",
    paddingLeft: 10
  },
  time: {
    justifyContent: "center"
  }
});

export default Race;
