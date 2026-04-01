import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native"; 
import * as Clipboard from 'expo-clipboard';

import { styles } from "./SecButtonStyles";
import { InputPassword } from "../InputPassword/InputPassword";
import { passwordService } from "../../services/passswordService";

export function SecButton() {
  const [pass, setPass] = useState('');
  const [passwordLength, setPasswordLength] = useState('8'); 

  function handleGenPassword() {
    
    const length = parseInt(passwordLength) || 8;
    let token = passwordService(length); 
    setPass(token);
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
     
      <Text style={{ color: '#fff', marginBottom: 5, fontWeight: 'bold' }}>
        Tamanho da senha:
      </Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#fff', borderRadius: 5, padding: 10, marginBottom: 20, color: '#000' }]}
        keyboardType="numeric"
        value={passwordLength}
        onChangeText={setPasswordLength}
        placeholder="Ex: 12"
      />

      <InputPassword pass={pass} />

      
     <Pressable
    onPress={handleGenPassword}
    style={({ pressed }) => [
        styles.button,
        {
            
            backgroundColor: pressed ? '#00afef' : '#007ab3'
        }
    ]}
>
    <Text style={styles.texto}>GERAR SENHA 🙊</Text>
</Pressable>

<Pressable
    onPress={handleCopy}
    style={({ pressed }) => [
        styles.button,
        {
            backgroundColor: pressed ? '#00afef' : '#007ab3'
        }
    ]}
>
    <Text style={styles.texto}>COPIAR 🗒️</Text>
</Pressable>
    </>
  );
}