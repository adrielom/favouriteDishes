import React from 'react';
import { horizontalDishesStyle } from '../styles/HorizontalDishesStyle';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import { Container } from './styles';

const { wrapper, circle } = horizontalDishesStyle;

const HorizontalDishes = () => (
	<View style={wrapper}>
		<View>
			<Image style={{ height: 300, width: 300 }} source={{ uri: 'https://source.unsplash.com/300x300/?food' }} />
		</View>
		<View style={circle}>
			<Icon light name='arrow-right' size={12} color='white' />
		</View>
	</View>
);

export default HorizontalDishes;
