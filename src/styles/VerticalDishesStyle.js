import { StyleSheet, Dimensions } from 'react-native';
import { accentColours } from './defaultStyle';

export const verticalDishesStyle = StyleSheet.create({
	outerWrapper: {
		width: '40%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'flex-end',
		zIndex: 0,
		marginRight: 23,
		position: 'relative',
	},
	circleImage: {
		height: 80,
		width: 80,
		borderRadius: 40,
		position: 'absolute',
		top: 5,
		left: 35,
		elevation: 1,
		zIndex: 3,
	},
	wrapper: {
		backgroundColor: 'white',
		marginBottom: 1,
		borderRadius: 20,
		height: '80%',
		width: '100%',
		bottom: 0,
		justifyContent: 'center',
		zIndex: -1,
		position: 'absolute',
		elevation: 1,
	},
	titleText: {
		fontSize: 16,
		marginBottom: 2,
		marginTop: 30,
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	valueText: {
		color: accentColours[0],
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	starStyle: { marginVertical: 10, justifyContent: 'center', alignSelf: 'center' },
});
