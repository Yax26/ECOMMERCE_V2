import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

function SearchContainer() {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Feather name="search" size={20} color="#333" style={styles.icon} />
      </TouchableOpacity>

      <TextInput
        placeholder="Search"
        placeholderTextColor="#333"
        style={styles.input}
      />
    </View>
  );
}

export default SearchContainer;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d7e6d3", // soft green background
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: "#333",
  },
});
