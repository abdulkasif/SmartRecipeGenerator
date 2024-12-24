import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10        
    },

      overlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        justifyContent: 'flex-end',
        paddingHorizontal: width * 0.05,
        paddingBottom: height * 0.05,
      },
      textContainer: {
        marginBottom: height * 0.04,
        alignItems: 'flex-start',
      },
      title: {
        fontSize: width * 0.12,
        fontWeight: 'bold',
        color: '#0F4A68',
        marginBottom: height * 0.01,
        textAlign: 'left',
      },
      subtitle: {
        marginTop: 10,
        fontSize: width * 0.05,
        color: '#0F4A68',
        textAlign: 'left',
      },
      tabsContainer: {
        position: 'absolute', 
        top: height * 0.1, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: 10, 
      },
      button: {
        backgroundColor: 'rgb(15, 74, 104)', 
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.05,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: width * 0.05,
        fontWeight: 'bold',
      },
})

export default styles;