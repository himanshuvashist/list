import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { listData } from './data'
import { useRef, useState } from 'react';
import Card from './Card';

export default function App() {
  const ref = useRef(null)

  return (
    <View s>
      <View style={{ paddingTop: 100 }}>
        <Button
          onPress={() => {
            const scrollToIndex = 17;
            // ===============
            ref.current.scrollToOffset({ animated: true, offset: scrollToIndex * 500 })
            // ref.current.scrollToEnd({animated});
            // ref.current.scrollToIndex({ animated: true, index: 18 })
            // ref.current.scrollToIndex({index: 12, animated: false });
            // ref.current.scrollToIndex({index: 0, animated: false });
            // ref.current.scrollToIndex({index: 12, animated: true });
          }}
          title="Scroll"
          color="#841584"
        />
      </View>
      <View style={{ height: 600, width: 200, background: '#d3fffb', }}>

        <FlashList
          ref={ref}
          data={listData}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={item => item.heading}
          estimatedItemSize={500}
        />
      </View>
    </View>
  );
}
