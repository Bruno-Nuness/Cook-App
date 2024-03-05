import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import Ingredient from "../ingredient";

export default function Ingredients({ingredients}:any) {



  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient key={index} name="tomate"  image=""  onPress={()=>{}}/>
      ))}
    </ScrollView>
  );
}
