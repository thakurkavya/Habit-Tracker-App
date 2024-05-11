import { Stack } from "expo-router";
import {
    ModalPortal
} from "react-native-modals";

export default function Layout(){
    return(
        <>
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="create" options={{headerShown:false}}/>
        </Stack>
        <ModalPortal/>
        </>
    )
}

//Layout component sets up navigation between different screens ("index" and "create")