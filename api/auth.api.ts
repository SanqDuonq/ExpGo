import { FIREBASE_AUTH } from "@/config/firebase.config";
import { IError } from "@/interface/error";
import { signInWithEmailAndPassword } from "firebase/auth";
import Toast from 'react-native-toast-message';
const auth = FIREBASE_AUTH;

interface IAuth {
    email: string,
    password: string,
    isLoading?: boolean,
    isError?: string
}

export const signInAPI = async (props: IAuth) => {
    try {
        await signInWithEmailAndPassword(auth,props.email,props.password);
        Toast.show({
            type: 'success',
            text1: 'Login successful!',
            text2: `Welcome back, ${props.email}`
        })
    } catch (error) {
        const err = error as IError
        Toast.show({
            type: 'error',
            text1: 'Login failed',
            text2: err.message
        })
    }
}

