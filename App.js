import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { listData as ld } from './data'
import { useRef, useState } from 'react';
import Card from './Card';

// For long lists with different item types scrollToIndex does not work reliable
// https://github.com/Shopify/flash-list/issues/631

export default function App() {
  const ref = useRef(null);

  const listData = [...ld, ...ld, ...ld];

  const listAllHeadersCnt = listData.filter(item => item.category).length
  const listAvgSize = ((listAllHeadersCnt * 300) + ((listData.length - listAllHeadersCnt) * 500))/listData.length
  // console.log(listData.length - listAllHeadersCnt);

  return (
    <View style={{alignItems: "center"}}>
      <View style={{ paddingTop: 100 }}>
        <Button
          onPress={() => {
            const scrollToIndex = 60;
            const headingsCnt = listData.slice(0,scrollToIndex).filter(item => item.category).length
            const itemCnt = scrollToIndex - headingsCnt;
            let offset = (headingsCnt * 500) + (itemCnt * 1000);

            // ===============
            // ref.current.scrollToOffset({ animated: false, offset: offset })
            // ref.current.scrollToEnd({animated});
            // ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            setTimeout(() => {
              ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
              setTimeout(() => {
                ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
                setTimeout(() => {
                  ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
                }, 300)
              }, 300)
            }, 300)
            // console.log("1");
            // ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            // setTimeout(() => {}, 1000)
            // console.log("2");
            // ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            // setTimeout(() => {}, 1000)
            // console.log("3");
            // ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            // setTimeout(() => {}, 1000)
            // console.log("4");
            // ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            // setTimeout(() => {}, 1000)
            // console.log("5");
            // ref.current.scrollToIndex({ animated: true, index: scrollToIndex });
            // setTimeout(() => {}, 1000)
            // console.log("6");
            // ref.current.scrollToIndex({index: 12, animated: false });
            // ref.current.scrollToIndex({index: 0, animated: false });
            // ref.current.scrollToIndex({index: 12, animated: true });
          }}
          title="Scroll"
          color="#841584"
        />
      </View>
      <View style={{ height: 600, width: 300, background: '#d3fffb', }}>

        <FlashList
          ref={ref}
          data={listData}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={item => item.heading}
          estimatedItemSize={listAvgSize} // 416
          estimatedListSize={{ height: 600, width: 400 }}
        />
      </View>
    </View>
  );
}
