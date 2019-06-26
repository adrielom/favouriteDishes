import { StyleSheet, Dimensions } from 'react-native';
import { accentColours } from './defaultStyle';
const width = Dimensions.width;

export const page1Style = StyleSheet.create({
	defaultMarginHorizontal: {
		marginHorizontal: '5%',
		flex: 1,
	},
	header: {
		marginVertical: 10,
		marginBottom: 8,
		width: width,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 50,
	},
	notificationValue: {
		color: accentColours[0],
		fontWeight: '900',
		fontSize: 10,
	},
	notificationContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginRight: 5,
	},
	heart: {},
	notificationCircle: {
		height: 16,
		width: 16,
		position: 'absolute',
		bottom: 10,
		left: 14,
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: 'white',
	},
	manageYour: {
		color: 'white',
		fontSize: 12,
		fontWeight: '100',
		marginBottom: 0,
		fontFamily: 'Roboto',
	},
	favouriteDishes: {},
	favouriteDishesTitle: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		fontFamily: 'Roboto',
	},
	favouriteDishesContainer: {
		width: '105%',
		margin: -10,
		height: 225,
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	popularDishes: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 6,
		justifyContent: 'space-around',
	},
	popularDishesTitle: {
		fontSize: 17.5,
		marginBottom: 2,
		color: '#070403',
		width: '90%',
		justifyContent: 'flex-start',
		fontWeight: 'bold',
	},
	popularDishesSeeMore: {
		fontSize: 15,
		fontWeight: '500',
	},
});
