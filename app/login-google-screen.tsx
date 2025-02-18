import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { makeRedirectUri, ResponseType, useAuthRequest } from "expo-auth-session";
import { GoogleAuthProvider, signInWithCredential, User } from "firebase/auth";
import { FIREBASE_AUTH } from '@/config/firebase.config';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const DISCOVERY = process.env.DISCOVERY;
const auth = FIREBASE_AUTH;
const LoginGoogleScreen = () => {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [request, response, promptAsync] = useAuthRequest({
        clientId: CLIENT_ID,
        scopes: ['profile', 'email'],
        redirectUri: makeRedirectUri(),
        responseType: ResponseType.IdToken
    },
        {
            authorizationEndpoint: `${DISCOVERY}/auth`
        }
    )

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
                .then(userCredential => {
                    setUserInfo(userCredential.user);
                    console.log("User Info:", userCredential.user);
                })
                .catch(error => console.log('Login fail', error))
        }
    }, [response])
    return (
        <View className='gap-4'>
            <TouchableOpacity 
                className='flex-row items-center justify-center bg-gray-200 py-3 rounded-lg px-4'
                onPress={() => promptAsync()}
            >
                <AntDesign name='google' size={20} className='mr-2' />
                <Text className='text-center font-semibold text-black'>Log in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginGoogleScreen;