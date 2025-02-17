import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { signInAPI } from '@/api/auth.api'
import ButtonComponent from '@/components/button'
import InputComponent from '@/components/input'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router'

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
        router.push('/')
        setIsLoading(false);
    }
    
    return (
        <View className='flex-1 bg-white px-6 pt-10'>
            <View className='items-center gap-y-2'>
                <View className='flex-row items-center'>
                    <Image
                        source={require('../assets/images/adaptive-icon.png')}
                        style={{ width: 80, height: 100 }}
                    />
                    <Text className='text-4xl font-bold text-emerald-700'>ExpGo</Text>
                </View>
                <Text className='text-gray-600 text-3xl font-bold mt-2'>Welcome to ExpGo</Text>
                <Text className='text-gray-400 text-sm text-center mt-1 font-semibold'>Sign up or login below to manage your project, task, and productivity</Text>
            </View>
            <View className='flex-row mt-6 border-b border-gray-300'>
                <TouchableOpacity className='flex-1 pb-2 border-b-2 border-emerald-700'>
                    <Text className='text-center text-emerald-700 font-bold'>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='flex-1 pb-2' 
                    onPress={() => router.push('/register-screen')}
                >
                    <Text className='text-center text-emerald-700 font-bold'>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View className='mt-6 gap-4'>
                <TouchableOpacity className='flex-row items-center justify-center bg-gray-200 py-3 rounded-lg px-4'>
                    <AntDesign name='google' size={20} className='mr-2' />
                    <Text className='text-center font-semibold text-black'>Login with Google</Text>
                </TouchableOpacity>
            </View>

            <Text className='text-gray-400 text-center my-4'>Or with continue with email</Text>

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
                    <Text className='text-gray-500 underline mb-2'>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonComponent
                    onPress={handleLogin}
                    name='Login'
                    isLoading={isLoading}
                />
            </View>
        </View>
    )
}

export default LoginScreen;