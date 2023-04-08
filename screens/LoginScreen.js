import { TextInput, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex-">
      <View className = "flex-row justify-start">
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Welcome')}
            className="py-2 bg-black ml-2 mt-4 rounded-full">
              
            <AntDesign name="arrowleft" size={45} color="white" />
            </TouchableOpacity>
      </View>
      <View className="flex-row justify-center">
        <Image source={require("../assets/images/burgerlogin.png")}
        style={{width: 260, height: 260}} />

      </View>

      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 30, borderTopRightRadius: 30}} 
        className="grow bg-emerald-400 px-12 pt-4">
          <View className="form space-y-3">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl text-bold "
              placeholder="email"
              value="johndoe@gmail.com" 
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              value="test12345" 
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-black rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-white"
                >
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          
          <View 
          style={{top: 20}}
          className="flex-row justify-center space-x-6">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/loginAuth/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/loginAuth/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/loginAuth/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View 
          style={{top: 20, bottom: 20}}
          className="flex-row justify-center mt-7">
              <Text className="text-black font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text className="font-semibold text-red-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </View>
    
  )
}