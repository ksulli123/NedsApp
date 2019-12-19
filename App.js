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

const raceCategories = {
  GreyHound: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
  Harness: "161d9be2-e909-4326-8c2c-35ed71fb460b",
  Horse: "4a2788f8-e825-4d36-9894-efd4baf1cfae"
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      races: [],
      GreyHound: [],
      Harness: [],
      Horse: [],
      selected: "GreyHound",
      loading: true
    };
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
            this.setState({ GreyHound }, () => {
              //console.log(this.state.GreyHound);
            });
            this.setState({ Harness }, () => {
              //console.log(this.state.Harness);
            });
            this.setState({ Horse }, () => {
              //console.log(this.state.Horse);
            });
          }
        )
      );
  }

  getItems = selected => {
    if (selected === "GreyHound") return this.state.GreyHound;
    if (selected === "Harness") return this.state.Harness;
    if (selected === "Horse") return this.state.Horse;
  };

  handleDelete = (index, selected) => {
    var temp = this.state[selected].filter((item, j) => j !== index);

    console.log(index);
    this.setState({ [selected]: temp });
  };

  render() {
    const { loading } = this.state;
    const items = this.getItems(this.state.selected);
    const sortedItems = items.sort(
      (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
    );
    return (
      <View>
        <Picker
          selectedValue={this.state.selected}
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
            sortedItems.map((item, index) => (
              <Race
                onDelete={this.handleDelete}
                key={index}
                index={index}
                selected={this.state.selected}
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

export default App;
