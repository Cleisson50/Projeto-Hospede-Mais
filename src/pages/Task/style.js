import { StyleSheet } from 'react-native'
import { Directions } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  buttonLigar: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4682B4",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: 'row'
  },
  buttonDesligar: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4682B4",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: 'row'
  },
  buttonLogout: {
    width: 60,
    height: 1200,
    position: "absolute",
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButtonLogout: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight:"bold",
  }
});

export default styles