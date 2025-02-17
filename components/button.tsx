import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

interface IButton {
    name: string,
    isLoading?: boolean,
    onPress: () => void
}

const ButtonComponent = (props: IButton) => {
    return (
        <TouchableOpacity
            className={`bg-blue-500 py-2 px-6 rounded-lg items-center justify-center ${props.isLoading ? 'opacity-70' : ''}`}
            onPress={props.isLoading ? undefined : props.onPress}
            disabled = {props.isLoading}
        >
            {props.isLoading ? (
                <View className='flex-row items-center'>
                    <ActivityIndicator size='small' color='#fff'/>
                    <Text className='text-white ml-2 py-1'>Please wait</Text>
                </View>
            ) : (
                <Text
                    className='text-white py-1 font-bold'
                >
                    {props.name}
                </Text>
            )}
        </TouchableOpacity>

    )
}

export default ButtonComponent