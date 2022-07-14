import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  title:{
    fontSize: 48,
    color: "#F92E6A",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input:{
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#F92E6A",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4d5156",
  },
  buttonLogin:{
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F92E6A",
    borderRadius: 50,
    marginTop: 30,
  },
  textButtonLogin:{
    color:"#ffffff",
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
    color: "#4d5156",
  },
  linkSubscribe:{
    color: "#1877f2",
    fontSize:16,
  }
});

export default styles