import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Recipe } from "@/components/Recipe";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" onPress={()=>{router.back()}} size={32}/>
        <Text style={styles.title}>Ingredients</Text>

        <FlatList
        data={'1'}
        keyExtractor={item=>item}
        renderItem={()=><Recipe recipe={{name:'omelete', image:'oi', minutes:12}}/>}
        />
      </View>
    </View>
  );
}
