import { StyleSheet } from 'react-native'
import { Directions } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE9E9",
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
    height: 30,
    position: "absolute",
    bottom: 30,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
  },
  iconButtonLogout: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    right: 40,
  },
  icon: {
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  },
  usuario: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#375E55',
    borderRadius: 60,
    width: 300,
    marginLeft: 40,
    marginTop: 30,
  },
  button2: {
    backgroundColor: '#950919',
    borderRadius: 60,
    width: 300,
    marginLeft: 40,
    marginTop: 30,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  }
});

export default styles