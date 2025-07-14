import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchContainer from "../components/common/SearchContainer";
import BottomNavbar from "../components/common/BottomNavbar";

function Searchpage() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        style={styles.rootContainer}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <Text style={styles.logoText}>LOGO</Text>

        <SearchContainer />

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.categoryText}>Women</Text>
            </View>

            <Image
              source={require("../images/women.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.categoryText}>Men</Text>
            </View>

            <Image source={require("../images/men.png")} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.categoryText}>Accessories</Text>
            </View>

            <Image
              source={require("../images/accessories.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.categoryText}>Kids</Text>
            </View>

            <Image source={require("../images/kid.png")} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.categoryText}>Electronics</Text>
            </View>

            <Image
              source={require("../images/Electronics.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.categoryText}>Sporting Goods</Text>
            </View>

            <Image
              source={require("../images/sports.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNavbar />
    </SafeAreaView>
  );
}

export default Searchpage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FFFFF5",
  },
  scrollContent: {
    paddingBottom: 80,
  },
  logoText: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF5E1",
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    height: 130,
    alignItems: "center", // center vertically
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  image: {
    height: 130, // fills full card height
    width: 130,
    resizeMode: "cover",
    alignSelf: "flex-end", // bottom aligned
  },
});
