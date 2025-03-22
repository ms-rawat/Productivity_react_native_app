import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", paddingHorizontal: 20 }}>
      {/* Instagram Logo */}
      <Image 
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} 
        style={{ width: 100, height: 100, marginBottom: 30 }}
      />

      {/* Email Input */}
      <TextInput 
        placeholder="Phone number, username, or email" 
        value={email} 
        onChangeText={setEmail} 
        style={{
          width: "100%",
          height: 50,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 5,
          paddingHorizontal: 15,
          marginBottom: 10,
          backgroundColor: "#fafafa",
        }} 
      />

      {/* Password Input */}
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={{
          width: "100%",
          height: 50,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 5,
          paddingHorizontal: 15,
          marginBottom: 10,
          backgroundColor: "#fafafa",
        }} 
      />

      {/* Login Button */}
      <TouchableOpacity 
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#3797EF",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <Text style={{ color: "#3797EF", marginBottom: 20 }}>Forgot password?</Text>

      {/* Divider */}
      <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
        <Text style={{ marginHorizontal: 10, color: "#666" }}>OR</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
      </View>

      {/* Sign Up Link */}
      <Text style={{ color: "#666" }}>
        Don't have an account? <Text style={{ color: "#3797EF", fontWeight: "bold" }}>Sign up</Text>
      </Text>
    </View>
  );
}
