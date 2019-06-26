import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Image, Text } from 'react-native';
import { verticalDishesStyle } from '../styles/VerticalDishesStyle';
import StarRating from 'react-native-star-rating';

const { wrapper, circleImage, outerWrapper, titleText, valueText, starStyle, circleImageShaddow } = verticalDishesStyle;
const rand = Math.floor(Math.random() * 10 + 1);

// import { Container } from './styles';
const VerticalDishes = ({ title, value }) => {
	const [ rating, setRating ] = useState(2);

	const onStarRatingPress = (rating) => {
		setRating(rating);
	};

	return (
		<View style={outerWrapper}>
			<Image style={circleImage} source={{ uri: `https://source.unsplash.com/900x900/?food/${rand}` }} />
			<View style={wrapper}>
				<Text style={titleText}>{title}</Text>
				<StarRating
					disabled={false}
					maxStars={5}
					rating={rating}
					starSize={18}
					emptyStar={'star'}
					containerStyle={starStyle}
					fullStarColor={'#f28f04'}
					emptyStarColor={'#c3c3c3'}
					starStyle={{ marginHorizontal: 2 }}
					selectedStar={(rating) => onStarRatingPress(rating)}
				/>
				<Text style={valueText}>{value}$</Text>
			</View>
		</View>
	);
};

export default VerticalDishes;
