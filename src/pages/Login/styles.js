import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EEE9E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 48,
    color: "#000000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input:{
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4d5156",
  },
  buttonLogin:{
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4682B4",
    borderRadius: 50,
    marginTop: 30,
    flexDirection: 'row'
  },
  textButtonLogin:{
    color:"#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textLogin:{
    marginLeft: 10,
    color:"#ffffff",
    fontSize: 16,
    fontWeight: "bold",

  },
  contentAlert:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  warningAlert:{
    paddingLeft:10,
    color: "#bdbdbd",
    fontSize: 16,
  },
  registration:{
    marginTop: 20,
    color: "#000000",
    fontSize: 16,
  },
  linkSubscribe:{
    color: "#0000CD",
    fontSize:16,
    marginLeft: 10,
    fontSize: 16,
  }
});

export default styles