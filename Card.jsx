import { Text, View } from "react-native";

const Card = ({ heading, desc }) => {
    return <View style={{ backgroundColor: '#faa', borderRadius: 15, height: 500 }} >
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