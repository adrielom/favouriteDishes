import { StyleSheet, Dimensions } from 'react-native';
import { accentColours } from './defaultStyle';
const width = Dimensions.width;

export const horizontalDishesStyle = StyleSheet.create({
	wrapper: {
		flex: 1,
		height: '100%',
		width: '95%',
		backgroundColor: 'white',
		elevation: 3,
		borderRadius: 20,
		justifyContent: 'center',
		marginBottom: 8,
	},
	circle: {
		height: 50,
		width: 50,
		borderRadius: 25,
		position: 'absolute',
		bottom: 20,
		elevation: 10,
		right: -25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: accentColours[0],
	},
	img: {
		height: 74,
		width: 74,
		borderRadius: 18,
	},
	contentStyle: {
		flexDirection: 'row',
	},
	contentWrapper: {
		flex: 1,
		width: '80%',
		marginVertical: 10,
		marginHorizontal: 20,
	},
	infoStyle: { marginBottom: 5 },
	infoStyleTitle: {
		fontSize: 17.5,
		marginBottom: 2,
		color: 'black',
		width: '90%',
		justifyContent: 'flex-start',
		fontWeight: 'bold',
	},
	infoStyleSubTitle: {
		fontSize: 10,
		color: 'grey',
		width: '90%',
		justifyContent: 'flex-start',
	},
	priceValue: {
		width: '100%',
		color: accentColours[1],
		fontWeight: 'bold',
		fontSize: 18,
		flexDirection: 'row',
		alignItems: 'center',
	},
	imgContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginLeft: 10,
	},
	priceStyle: {
		color: accentColours[0],
		marginBottom: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},
	discountStyle: {
		color: 'grey',
		marginLeft: 5,
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
		textDecorationColor: '#ccc',
		marginBottom: 10,
		fontSize: 16,
		fontWeight: 'bold',
	},
});
