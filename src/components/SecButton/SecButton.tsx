import React, {useState} from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';

import { styles } from "./SecButtonStyles";

import { InputPassword } from "../InputPassword/InputPassword";

import { passwordService } from "../../services/passswordService";



export function SecButton(){
    const [ pass, setPass ] = useState('')

    function handleGenPassword(){
        let token = passwordService()
        setPass(token)
    }

    function handleCopy(){
        Clipboard.setStringAsync(pass);
    }

    return(
        <>
            {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

            <InputPassword pass={pass}/>

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={handleGenPassword}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={handleCopy}>COPIAR 🗒️</Text>
            </Pressable>
        </>


    )
}