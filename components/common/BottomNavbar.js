import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

function BottomNavbar({ cartIconNumber }) {
  const navigation = useNavigation();

  const route = useRoute();
  console.log(route.name);

  return (
    <View style={styles.wrapper}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={styles.tabWrapper}
          activeOpacity={0.8}
        >
          <View
            style={[styles.tab, route.name === "home" && styles.tabHighlight]}
          >
            <Feather
              name="home"
              size={20}
              color={route.name === "home" ? "#7A9E7E" : "#fff"}
            />
            <Text
              style={
                route.name === "home" ? styles.tabHighlightText : styles.tabText
              }
            >
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("search")}
          style={styles.tabWrapper}
          activeOpacity={0.8}
        >
          <View
            style={[styles.tab, route.name === "search" && styles.tabHighlight]}
          >
            <Feather
              name="search"
              size={20}
              color={route.name === "search" ? "#7A9E7E" : "#fff"}
            />
            <Text
              style={
                route.name === "search"
                  ? styles.tabHighlightText
                  : styles.tabText
              }
            >
              Search
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("details")}
          style={styles.tabWrapper}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.tab,
              route.name === "profile" && styles.tabHighlight,
            ]}
          >
            <Feather
              name="user"
              size={20}
              color={route.name === "profile" ? "#7A9E7E" : "#fff"}
            />
            <Text
              style={
                route.name === "profile"
                  ? styles.tabHighlightText
                  : styles.tabText
              }
            >
              Details
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("cart")}
          style={styles.tabWrapper}
          activeOpacity={0.8}
        >
          <View
            style={[styles.tab, route.name === "cart" && styles.tabHighlight]}
          >
            <Feather
              name="shopping-cart"
              size={20}
              color={route.name === "cart" ? "#7A9E7E" : "#fff"}
            />
            <Text style={styles.tabText}>Cart</Text>
            {cartIconNumber > 0 && (
              <View style={styles.badge}>
                <Text
                  style={
                    route.name === "cart"
                      ? styles.tabHighlightText
                      : styles.tabText
                  }
                >
                  {cartIconNumber}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomNavbar;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 30,
    left: 15,
    right: 15,
    height: 80,
    borderRadius: 50,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 20,
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(20, 20, 20, 0.5)", // transparent dark background
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  tabWrapper: {
    flex: 1,
    alignItems: "center",
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    position: "relative",
  },
  tabHighlight: {
    backgroundColor: "rgba(122, 158, 126, 0.2)", // transparent green
  },
  tabText: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 3,
  },
  tabHighlightText: {
    fontSize: 12,
    color: "#7A9E7E",
    marginTop: 3,
    fontWeight: "900",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
