import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { signInAPI } from '@/api/auth.api'
import ButtonComponent from '@/components/button'
import InputComponent from '@/components/input'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router'
import Toast from 'react-native-toast-message'
import LoginGoogleScreen from './login-google-screen'

const LoginScreen = () => {
    const router = useRouter();
    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        setIsLoading(true);
        await signInAPI({
            email: signIn.email,
            password: signIn.password
        })
        setIsLoading(false);
        router.push('/home-screen');
    }

    return (
        <View className='flex-1 bg-white px-6 pt-10 gap-y-6'>
            <View className='items-center gap-y-2'>
                <View className='flex-row items-center'>
                    <Image
                        source={require('../assets/images/adaptive-icon.png')}
                        style={{ width: 80, height: 100 }}
                    />
                    <Text className='text-4xl font-bold text-gray-700'>ExpGo</Text>
                </View>
                <Text className='text-gray-600 text-4xl font-bold mt-2'>Welcome back!</Text>
                <Text className='text-gray-400 text-md text-center mt-1 font-semibold'>Please enter your details</Text>
            </View>

            <View className='gap-y-2'>
                <InputComponent
                    name='Email'
                    placeholder='Email'
                    value={signIn.email}
                    onChangeText={(text) => setSignIn({ ...signIn, email: text })}
                />
                <InputComponent
                    name='Password'
                    placeholder='Password'
                    value={signIn.password}
                    onChangeText={(text) => setSignIn({ ...signIn, password: text })}
                    secureTextEntry
                />
                <TouchableOpacity>
                    <Text className='text-blue-500 underline mb-2'>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonComponent
                    onPress={handleLogin}
                    name='Log In'
                    isLoading={isLoading}
                />
            </View>
            <LoginGoogleScreen/>

            <View className='flex-row gap-x-1 justify-center'>
                <Text>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => router.push('/register-screen')}>
                    <Text className=' underline text-blue-500'>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Toast />
        </View>
       
    )
}

export default LoginScreen;