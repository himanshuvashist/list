import { Text, View } from "react-native";

const Card = ({ heading, subtitle, category }) => (
    <View >
    {category ? (
        <View style={{ height: 200, backgroundColor: 'pink' }}>
            <Text>
                {category}
            </Text>
        </View>
    ) : (
        <View style={{ height: 1000, backgroundColor: 'grey' }}>
            <Text>
                {heading}
            </Text>
            <Text>
                {subtitle}
            </Text>
        </View>
    )}
    </View>
)

export default Card;