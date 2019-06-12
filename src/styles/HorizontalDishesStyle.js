import { StyleSheet, Dimensions } from 'react-native';
import { accentColours } from './defaultStyle';
const width = Dimensions.width;

export const horizontalDishesStyle = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: '95%',
		backgroundColor: 'white',
		elevation: 3,
		borderRadius: 20,
		justifyContent: 'flex-start',
		marginBottom: 8,
	},
	circle: {
		height: 50,
		width: 50,
		borderRadius: 25,
		position: 'absolute',
		bottom: 32,
		elevation: 10,
		right: -25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: accentColours[0],
	},
});
