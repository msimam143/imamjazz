import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as React from 'react';

function Home() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Selamat Datang Di Settings</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingTop : 300,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color : 'white',
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,    
  
    },
});

export default Home;

