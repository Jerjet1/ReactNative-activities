import { Text, View, StyleSheet, Image } from "react-native";
export default function Index() {
  return (
    <View style={styles.containerBackground}>
      <View style={styles.containerTop}>
        <View style={styles.containerImg}>
          <Image
            style={styles.image}
            source={require("../assets/images/CTU logo.png")}
          ></Image>
          <Image
            style={styles.image}
            source={require("../assets/images/asean-seeklogo.png")}
          ></Image>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textSmall}>Republic of the Philippines</Text>
          <Text style={styles.textBig}>CEBU TECHNOLOGICAL UNIVERSITY</Text>
          <Text style={styles.textSmall}>
            Main Campus: M.J. Cuenco Avenue corner R. Palma St, Cebu City,
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.id}
          source={require("../assets/images/id.jpg")}
        ></Image>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          KENT JORJET M. NIEZ
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "semibold",
          }}
        >
          BSIT
        </Text>
        <View style={styles.line}></View>
        <Text>COURSE</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          marginLeft: 60,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "semibold",
          }}
        >
          ID No.:
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          1190716
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    width: "70%",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    marginVertical: 10,
  },
  infoContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  imageContainer: {
    height: "30%",
    alignItems: "center",
    marginTop: 30,
  },
  id: {
    width: "50%",
    height: "100%",
    borderColor: "black",
    alignItems: "center",
    borderWidth: 1,
  },
  containerText: {
    marginTop: 25,
    marginLeft: 5,
    width: "100%",
  },
  textBig: {
    marginLeft: 10,
    width: "70%",
    fontWeight: "bold",
    fontSize: 25,
  },
  textSmall: {
    marginLeft: 10,
    fontSize: 14,
    width: "60%",
  },
  containerTop: {
    flexDirection: "row",
    width: "100%",
  },
  containerImg: {
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 5,
  },
  containerBackground: {
    backgroundColor: "#f4cd56",
    width: "100%",
    height: "100%",
  },
});
