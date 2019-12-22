import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  TouchableOpacity,
  Platform
} from "react-native";
import Race from "./components/Race";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      races: [],
      GreyHound: [],
      Harness: [],
      Horse: [],
      loading: true
    };
    //Bind functions
    this.getItems = this.getItems.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //Fetch contents
  componentDidMount() {
    const response = fetch(
      "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            races: data.data.race_summaries
          },
          () => {
            this.setState({ loading: false });
            var { GreyHound, Harness, Horse } = this.state;
            for (var key in this.state.races) {
              if (
                this.state.races[key].category_id === raceCategories.GreyHound
              ) {
                GreyHound.push(this.state.races[key]);
              }
              if (
                this.state.races[key].category_id === raceCategories.Harness
              ) {
                Harness.push(this.state.races[key]);
              }
              if (this.state.races[key].category_id === raceCategories.Horse) {
                Horse.push(this.state.races[key]);
              }
            }
            GreyHound = this.sortByTime(GreyHound);
            Harness = this.sortByTime(Harness);
            Horse = this.sortByTime(Horse);
            this.setState({ GreyHound });
            this.setState({ Harness });
            this.setState({ Horse });
          }
        )
      );
  }

  sortByTime(arr) {
    return (arr = arr.sort(
      (a, b) => b.advertised_start.seconds - a.advertised_start.seconds
    ));
  }

  //Retrieve the correct array based on selected category
  getItems = () => {
    if (selected === "Greyhound") return this.state.GreyHound;
    if (selected === "Harness") return this.state.Harness;
    if (selected === "Horse") return this.state.Horse;
  };

  //Dynamically delete array item based on index and selected category
  handleDelete = index => {
    var temp = this.state[selected].filter((item, j) => j !== index);

    this.setState({ [selected]: temp });
  };

  render() {
    const { loading } = this.state;
    const items = this.getItems(selected);
    //Time ascending sort
    return (
      <View>
        <Picker
          selectedValue={selected}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selected: itemValue })
          }
        >
          <Picker.Item label="GreyHound" value="GreyHound" />
          <Picker.Item label="Harness" value="Harness" />
          <Picker.Item label="Horse" value="Horse" />
        </Picker>
        <Text
          style={{
            fontSize: 20,
            marginTop: 300,
            marginLeft: 50,
            marginBottom: 0
          }}
        >
          Upcoming Races:
        </Text>
        <View style={styles.container}>
          {loading ? (
            <Text>Loading Races...</Text>
          ) : (
            this.state[selected].map((item, index) => (
              <Race
                onDelete={this.handleDelete}
                key={index}
                index={index}
                selected={selected}
                item={item}
              />
            ))
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 50,
    width: "100%"
  },
  picker: {
    height: 50,
    width: 180,
    position: "absolute",
    display: "flex",
    fontSize: 14,
    margin: 20
  }
});

const mapDispatchToProps = dispatch => ({
  setSelected: selected => dispatch(setSelected(selected))
});

const mapStateToProps = state => ({
  selected: state.selected
});

export default connect(mapStateToProps)(Home);
