import { Text, View } from "react-native";

const Card = ({ heading, desc, onCardLayout }) => {
    return <View style={{ backgroundColor: '#fff', borderRadius: 5, padding: 5, margin: 10 }} onLayout={onCardLayout}>
        <View style={{ height: 50 }}>
            <Text>
                {heading}
            </Text>
        </View>
        <View style={{ height: 100 }}>
            <Text>
                {desc}
            </Text>
        </View>
    </View>
}

export default Card;