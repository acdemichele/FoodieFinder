import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return(
  <SafeAreaView className="flex-1 " style={{backgroundColor: themeColors.bg}}>
    <View className="flex-1 flex justify-around my-4">
      <Text className="mx-2 text-black  text-center font-bold text-4xl">
       Welcome to Food Finder!
      </Text>
    <View className="flex-row justify-center">
    <Image source={require("../assets/images/homepageCartoon.png")}
                    style={{width: 350, height: 350}} />
    </View>
    <View className="space-y-4">
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
          className="py-5 bg-black mx-9 rounded-xl">
            <Text className="text-white text-center text-xl font-bold">Sign up
            </Text>
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-black font-semibold">Already have an account?    </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className=" block font-bold text-rose-600"> 
                        Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}