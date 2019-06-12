import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Image } from 'react-native';
import { verticalDishesStyle } from '../styles/VerticalDishesStyle';

// import { Container } from './styles';
const VerticalDishes = () => (
	<View style={verticalDishesStyle.wrapper}>
		<View>
			<Image />
			<View />
		</View>
		<View>
			<Icon />
		</View>
	</View>
);

export default VerticalDishes;
