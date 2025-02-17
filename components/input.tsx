import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface IInput {
    name: string,
    placeholder: string,
    value: string,
    onChangeText: (text:string) => void;
    secureTextEntry?: boolean;
}

const InputComponent = (props: IInput) => {
    return (
        <View className='mb-4'>
            <Text className='text-sm font-bold text-gray-700 mb-1'>{props.name}</Text>
            <TextInput
                className='border border-gray-300 rounded-lg px-4 py-2 text-base bg-white'
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor='#999'
            />
        </View>
    )
}

export default InputComponent;