import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import Ingredients from "@/components/ingredients";
import { useState } from "react";
import Ingredient from "@/components/ingredient";
import Selected from "@/components/selected";
import { router } from "expo-router";

export default function AppIndex() {
  const [selected, setSelected] = useState<string[]>([]);
  function handleToogleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  }
  
  function handleSearch(){
    router.navigate('/recipes/')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subTitle}> os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ingredients}
      >
        {Array.from({ length: 100 }).map((item, index) => (
          <Ingredient
            key={index}
            name="tomate"
            image=""
            selected={selected.includes(String(index))}
            onPress={() => {
              handleToogleSelected(String(index));
            }}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
          key={selected.length}
        />
      )}
    </View>
  );
}
