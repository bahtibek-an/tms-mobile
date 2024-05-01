import {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CustomButton from "../../ui/CustomButton/CustomButton";

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex: 1, paddingHorizontal: 24}}>
                <View style={{marginTop: 85}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Login</Text>
                    <Text style={{fontSize: 12, fontWeight: "normal", marginTop: 12}}>Input the four digit verification
                        code
                        sent to your mail</Text>
                </View>
                <View style={{marginTop: 27}}>
                    <Text style={{fontSize: 12, color: "#B8B8B8"}}>Email</Text>

                    <View style={{
                        width: "100%",
                        borderBottomWidth: 1,
                        borderColor: "#4F4F4F30",
                        marginTop: 10
                    }}>
                        <TextInput
                            keyboardType="email-address"
                            style={{width: "100%"}}
                        />
                    </View>
                </View>
                <View style={{marginTop: 27}}>
                    <Text style={{fontSize: 12, color: "#B8B8B8"}}>Password</Text>

                    <View style={{
                        width: "100%",
                        borderBottomWidth: 1,
                        borderColor: "#4F4F4F30",
                        marginTop: 10,
                    }}>
                        <TextInput
                            secureTextEntry={isPasswordVisible}
                            style={{width: "100%"}}
                        />
                        <TouchableOpacity
                            style={{position: "absolute", right: 0, bottom: 6}}
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? (
                                <Ionicons name="eye-off" size={24} color="#B8B8B8"/>
                            ) : (
                                <Ionicons name="eye" size={24} color="#B8B8B8"/>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton
                    title="Login"
                    // onPress={handleClick}
                    stylesButton={{
                        width: "100%",
                        alignSelf: "center",
                        marginTop: "auto",
                        marginBottom: 80
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Login;