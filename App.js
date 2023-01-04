import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import RenderItem from './RenderItem'
import Chip from './Chip';
import { listData } from './data'
import { useRef, useState } from 'react';

export default function App() {
  const ref = useRef(null)
  const [lay, setLay] = useState(null)
  const [lay2, setLay2] = useState(null)
  const getItemLayout = (data, index) => {
    const length = lay[index - 1]?.height
    const offset = lay[index - 1]?.y
    return { length: length, offset: offset, index }
  }

  const onHeadingLayout = (index, e) => {
    if (!lay) {
      setLay(e.nativeEvent.layout.height)
      console.log('setting heading', e.nativeEvent.layout.height)
    }
  }

  const onCardLayout = (index, e) => {
    if (!lay2) {
      setLay2(e.nativeEvent.layout.height)
      console.log('setting card', e.nativeEvent.layout.height)
    }
  }

  return (
    <View style={{ height: 800, width: 400, padding: 50, background: '#d3fffb' }}>
      <Button
        onPress={() => {
          const scrollToIndex = 17;
          let scrollOffset = 0;

          for (let i = 0; i < scrollToIndex; i += 1) {
            let allCardHeight = 0
            const item = listData[i]
            item.cards.forEach(item => allCardHeight = lay2 + allCardHeight + 20)

            scrollOffset = allCardHeight + lay + scrollOffset + 10
          }
          console.log('scrollOffset', scrollOffset)
          // ===============
          ref.current.scrollToOffset({ animated: true, offset: scrollOffset })
          // ref.current.scrollToEnd({animated});
          // ref.current.scrollToIndex({animated: true, index: 18 })
          // ref.current.scrollToIndex({index: 12, animated: false });
          // ref.current.scrollToIndex({index: 0, animated: false });
          // ref.current.scrollToIndex({index: 12, animated: true });
        }}
        title="Scroll"
        color="#841584"
      />
      <FlashList
        ref={ref}
        data={listData}
        renderItem={(item) => <RenderItem {...item} onHeadingLayout={onHeadingLayout} onCardLayout={onCardLayout} />}
        keyExtractor={item => item.heading}
        getItemLayout={getItemLayout}
        estimatedItemSize={823}
      />
    </View>
  );
}

