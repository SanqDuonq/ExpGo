import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
            />
            <Stack.Screen
                name="login-screen"
            />
            <Stack.Screen
                name="register-screen"
            />
        </Stack>
    )
}

export const unstable_settings = {
    initialRouteName: 'index',
};
