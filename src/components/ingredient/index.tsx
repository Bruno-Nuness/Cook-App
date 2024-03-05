import { Pressable,PressableProps, Image, Text } from "react-native";
import { styles } from "./styles";

export type IngredientsProps = {
  name:string,
  image:string,
  selected?: boolean
}

export default function Ingredient({name, image, selected= false, ...rest}:IngredientsProps & PressableProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Text style={styles.title}>Maça</Text>
    </Pressable>
  );
}
