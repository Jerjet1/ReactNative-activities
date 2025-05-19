import { Fontisto } from '@expo/vector-icons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react'
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

const PhotoPreviewSection = ({
    photo,
    location,
    handleRetakePhoto
}: {
    photo: CameraCapturedPicture;
    location: {latitude: number; longitude: number};
    handleRetakePhoto: () => void;
}) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.box}>
            <Image
                style={styles.previewConatiner}
                source={{uri: photo.uri}}
            >
            </Image>
        </View>
        
        <Text style={styles.locationText}>
            Latitude: {location.latitude.toFixed(5)} | Longitude: {location.longitude.toFixed(5)}
        </Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
                <Fontisto name='trash' size={36} color='black' />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        borderRadius: 15,
        padding: 1,
        width: '95%',
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: "center",
    },
    previewConatiner: {
        width: '95%',
        height: '85%',
        borderRadius: 15
    },
    buttonContainer: {
        marginTop: '4%',
        flexDirection: 'row',
        justifyContent: "center",
        width: '100%',
    },
    button: {
        backgroundColor: 'gray',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
}
});

export default PhotoPreviewSection;