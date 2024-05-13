import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
type Props = {
  navigation: any;
  route: any;
};
export default function About(props: Props) {
  const { navigation, route } = props;
  return (
    <View>
      <Text>About</Text>
      <Text>{route.params.dataArray[0]}</Text>
      <Text>{route.params.dataArray[1]}</Text>
      <Text>{route.params.dataObj.first}</Text>
      <Text>{route.params.dataObj.last}</Text>
      <Button onPress={() => navigation.goBack()} title="Go to Previous" />
      <Button
        onPress={() =>
          navigation.navigate("Contact", {
            data: { fullname: "Alves Macarthy", phone: "231-908-9989" },
          })
        }
        title="Go to Contact"
      />
    </View>
  );
}

// //
// export default function About() {
//   const navigation = useNavigation();
//   const onGoToContact = () => {
//     navigation.navigate("Contact", { data: { name: "Kai" } });
//   };
//   return (
//     <View>
//       <Text>About</Text>

//       <Button onPress={() => navigation.goBack()} title="Go to Previous" />
//       <Button onPress={onGoToContact} title="Go to Contact" />
//     </View>
//   );
// }
