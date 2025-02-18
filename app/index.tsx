import '../global.css';
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import WelcomeHome from '../assets/images/welcome.jpg'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

export default function Index() {
    const router = useRouter();
    const ctx = require.context('./app');
  return (
    <View className="relative w-full h-screen">
            <Image
                source={WelcomeHome}
                className="absolute w-full h-screen object-cover"
            />
            <View className="absolute inset-0 flex items-center mt-10">
                <Text className="z-10 text-4xl text-center">Welcome to ExpGo!</Text>
                <Text className="text-center text-xl  text-gray-50">Discovery more experience from scan app</Text>
            </View>
            <View className="absolute bottom-10 w-full">
                <TouchableOpacity 
                    onPress={() => router.push('/login-screen')}
                    className="mx-auto flex-row items-center bg-black px-6 rounded-[8px] h-[45px]"
                >
                    <Text className="text-white">Get started</Text>
                    <FontAwesome name="chevron-right" size={10} color="#FFF" className="ml-2" />
                </TouchableOpacity>
            </View>
        </View>
  );
}
