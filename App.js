
import { SafeAreaView } from 'react-native';
import { View,Text,StyleSheet,Pressable,TextInput,ScrollView,KeyboardAvoidingView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View >
              <StatusBar backgroundColor='green' style="light"/>
              <Text style={{fontSize:50,marginHorizontal:10,fontWeight:"bold"}}>Register</Text>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>User Name:</Text>
              <TextInput placeholder='User Name'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name:</Text>
              <TextInput placeholder='Last Name'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <TextInput placeholder='Gender'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number:</Text>
              <TextInput placeholder='Phone Number'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>E-mail:</Text>
              <TextInput placeholder='E-mail'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Password:</Text>
              <TextInput placeholder='Password'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password:</Text>
              <TextInput placeholder='Confirm Password'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>House Number:</Text>
              <TextInput placeholder='House Number'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Street:</Text>
              <TextInput placeholder='Street'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>City:</Text>
              <TextInput placeholder='City'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Province:</Text>
              <TextInput placeholder='Province'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <View style={styles.inputContainer}>
              <Text style={styles.label}>Postal Code:</Text>
              <TextInput placeholder='Postal Code'style={styles.Input} placeholderTextColor={"grey"} onChange={(text)=>console.log(text)}/>
              </View>

              <Pressable style={styles.button} onPress={()=>{console.log('button pressed')}}>
                <Text style={{textAlign:'center', color:'white', fontSize:18, textTransform:"uppercase"}}>Submit</Text>
              </Pressable>
            </View>
        </ScrollView>    
      </KeyboardAvoidingView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#B94ACE",
    flex:1,
  },
  button:{
    backgroundColor:"#5BC1C3",
    padding:15,
    textAlign:"center",
    borderRadius:5,
    marginTop:10,
    marginHorizontal:10
  },
  Input:{
    backgroundColor:"white",
    marginHorizontal:10,
    marginVertical:5,
    borderRadius:5,
    padding:6,
    borderColor:"#BDBDBD",
  },
  label:{
    color:"black",
    marginHorizontal:10,
  },
  inputContainer:{
    gap:5
  },
  scrollView:{
     gap:15,
     paddingVertical:20
  }
})





