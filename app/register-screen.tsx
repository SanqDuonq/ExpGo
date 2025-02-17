import { signUpAPI } from '@/api/auth.api'
import ButtonComponent from '@/components/button'
import InputComponent from '@/components/input'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'
import AntDesign from 'react-native-vector-icons/AntDesign';

const RegisterScreen = () => {
    const router = useRouter();
    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        if (signUp.password !== signUp.confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Password do not match'
            })
        }
        setIsLoading(true);
        await signUpAPI({
            name: signUp.name,
            email: signUp.email,
            password: signUp.password
        })
        router.push('/home-screen')
        setIsLoading(false);
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
                <Text className='text-gray-600 text-4xl font-bold mt-2'>Create an account</Text>
                <Text className='text-gray-400 text-md text-center mt-1 font-semibold'>Please enter your details</Text>
            </View>
            <View className='gap-y-2'>
                <InputComponent
                    name='Name'
                    placeholder='Name'
                    value={signUp.name}
                    onChangeText={(text) => setSignUp({ ...signUp, name: text })}
                />
                <InputComponent
                    name='Email'
                    placeholder='Email'
                    value={signUp.email}
                    onChangeText={(text) => setSignUp({ ...signUp, email: text })}
                />
                <InputComponent
                    name='Password'
                    placeholder='Password'
                    value={signUp.password}
                    onChangeText={(text) => setSignUp({ ...signUp, password: text })}
                    secureTextEntry
                />
                <InputComponent
                    name='Confirm Password'
                    placeholder='Confirm Password'
                    value={signUp.confirmPassword}
                    onChangeText={(text) => setSignUp({ ...signUp, confirmPassword: text })}
                    secureTextEntry
                />
                <ButtonComponent
                    name='Register'
                    isLoading={isLoading}
                    onPress={handleRegister}
                />
            </View>
            <View className='gap-4'>
                <TouchableOpacity className='flex-row items-center justify-center bg-gray-200 py-3 rounded-lg px-4'>
                    <AntDesign name='google' size={20} className='mr-2' />
                    <Text className='text-center font-semibold text-black'>Log in with Google</Text>
                </TouchableOpacity>
            </View>
            <View className='flex-row gap-x-1 justify-center'>
                <Text>
                    You have an account?
                </Text>
                <TouchableOpacity onPress={() => router.push('/login-screen')}>
                    <Text className='underline text-blue-500'>Login</Text>
                </TouchableOpacity>
            </View>
            <Toast />
        </View>
    )
}

export default RegisterScreen