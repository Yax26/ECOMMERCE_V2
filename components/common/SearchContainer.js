import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import server from "../../constants/server";

function SearchContainer() {
  const [searchedWord, setSearchedWord] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    if (!searchedWord.trim()) {
      return Alert.alert("Please enter a product name");
    }

    try {
      const res = await fetch(
        `${server.host}/products/search/?search=${searchedWord}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const json = await res.json();

      // 🔍 Print server response in JSON format
      console.log("Server Response:\n", JSON.stringify(json, null, 2));

      if (json?.status?.code === 200) {
        setSearchedData(json?.data);
        navigation.navigate("searchproducts", {
          data: json?.data,
          keyword: searchedWord,
        });
      } else {
        Alert.alert("Error", json?.status?.message || "Something went wrong");
      }
    } catch (err) {
      Alert.alert("Network error", err.message);
      console.error("Fetch error:", err);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={handleSearch}>
        <Feather name="search" size={20} color="#333" style={styles.icon} />
      </TouchableOpacity>

      <TextInput
        placeholder="Search"
        placeholderTextColor="#333"
        style={styles.input}
        value={searchedWord}
        onChangeText={setSearchedWord}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
}

export default SearchContainer;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d7e6d3",
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
