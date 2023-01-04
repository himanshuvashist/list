import { useId } from 'react'
import { Text, View } from "react-native"
import Card from "./Card";

const RenderItem = ({ item, onCardLayout, onHeadingLayout, ...props }) => {
    const { heading, cards } = item;

    return (
        <View style={{ backgroundColor: '#ddffcf', padding: 5, margin: 5 }}>
            <Text onLayout={(e) => { if (props.index === 0) { onHeadingLayout(props.index, e) } }}>{heading}</Text>
            {cards.map((item, i) =>
                <Card {...item} key={i} onCardLayout={(e) => { if (props.index === 0 && i === 0) { onCardLayout(props.index, e) } }} />)}
        </View>
    )
}

export default RenderItem;