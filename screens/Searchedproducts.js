import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchContainer from "../components/common/SearchContainer";
import BottomNavbar from "../components/common/BottomNavbar";
import Feather from "react-native-vector-icons/Feather";
import StarRating from "../components/Searchedproducts/StarRating";

function Searchproducts() {
  const route = useRoute();
  const { data, keyword } = route.params;

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <Text style={styles.logoText}>LOGO</Text>

        <SearchContainer />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
          style={styles.productCategory}
        >
          <TouchableOpacity style={styles.categoryList}>
            <Text style={styles.categoryText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryList}>
            <Text style={styles.categoryText}>Dress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryList}>
            <Text style={styles.categoryText}>Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryList}>
            <Text style={styles.categoryText}>Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryList}>
            <Text style={styles.categoryText}>New</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.productsWrapper}>
          {data.map((product, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <TouchableOpacity style={styles.heartBtn}>
                <Feather name="heart" size={18} color="#40522b" />
              </TouchableOpacity>

              <Image
                source={{ uri: product.product_image }}
                style={styles.productImage}
                resizeMode="cover"
              />

              <Text style={styles.productName}>{product.product_name}</Text>
              <StarRating />
              <Text style={styles.productDetail}>${product.product_price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FFFFF5",
  },
  heartBtn: {
    padding: 6,
    marginLeft: 145,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  logoText: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  productCategory: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 15,
  },
  categoryScroll: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  categoryList: {
    backgroundColor: "#E3E9DC",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontWeight: "500",
    color: "#333",
  },
  productsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingBottom: 30,
    width: "48%",
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  productImage: {
    height: 150,
    width: "100%",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  productName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
    marginTop: 10,
  },
  productDetail: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});

export default Searchproducts;
