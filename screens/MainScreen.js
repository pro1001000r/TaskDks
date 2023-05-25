import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import GetTask from "../components/GetTask";

export default function MainScreen({ navigation, route }) {
  
  const [vtext, setText] = useState("");
  const [vtext1, setText1] = useState("");
  const [vtext2, setText2] = useState("");

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
       
    }, []);


  useEffect(() => {
    if (route.params != undefined) {
      const { nomenFind } = route.params;
      if (nomenFind != undefined) {
        setText2(nomenFind.name);
      }
    }
  }, [route]);

  const vRenderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => {
          console.log("------------");
          console.log(item);
          //setNomenred(item);
          //setModalVisible(true);
          //navigation.navigate("Main", { nomenFind: item }); //Переносим на главную
          //alert("ok");
          //alarm.(item?.[value]);

        }}
      >
        <Text>{item?.["id"]}</Text>
        <Text>{item?.["name"]}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      
      <GetTask
      setData = {setData}
      strFind = '12'/>
      

      <Text>Задачи ДКС</Text>
      
      <Text>{"\n"}</Text>
      
      <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => vRenderItem({ item })}
          />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
