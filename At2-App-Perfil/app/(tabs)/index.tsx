import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
<View style={styles.card}>
<Image
source={require('@/assets/images/image.png')}
style={styles.profileImage}
/>
<Text style={styles.name}>Kaio Silva</Text>
<Text style={styles.phrase}>“Brasileiro, 17y, DS 3/3, nerd em pokémon”</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#121212',
alignItems: 'center',
justifyContent: 'center',
padding: 16,
},
card: {
backgroundColor: '#1f1f1f',
borderRadius: 20,
padding: 24,
alignItems: 'center',
shadowColor: '#000',
shadowOpacity: 0.3,
shadowRadius: 10,
elevation: 10,
width: '100%',
maxWidth: 320,
},
profileImage: {
width: 120,
height: 120,

borderRadius: 70,
marginBottom: 16,
borderWidth: 2,
borderColor: '#ffffff',
},
name: {
fontSize: 24,
fontWeight: 'bold',
color: '#800080',
marginBottom: 8,
},
phrase: {
fontSize: 16,
fontStyle: 'italic',
color: '#ccccc0',
textAlign: 'center',
},
});