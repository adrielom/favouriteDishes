import React, { useEffect, useState } from 'react';
import { horizontalDishesStyle } from '../styles/HorizontalDishesStyle';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HorizontalDishes = ({ title, subTitle, value, discount, discountValue }) => {
	const {
		wrapper,
		circle,
		imgContainer,
		img,
		contentStyle,
		infoStyle,
		priceValue,
		contentWrapper,
		infoStyleSubTitle,
		infoStyleTitle,
		priceStyle,
		discountStyle,
	} = horizontalDishesStyle;
	const rand = Math.floor(Math.random() * 10 + 1);

	const discountHandler = (value) => {
		if (discount === true) {
			return <Text style={discountStyle}>{value}$</Text>;
		}
	};

	return (
		<View style={wrapper}>
			<View style={contentStyle}>
				<View style={imgContainer}>
					<Image style={img} source={{ uri: `https://source.unsplash.com/900x900/?food/${rand}` }} />
				</View>
				<View style={contentWrapper}>
					<View style={infoStyle}>
						<Text style={infoStyleTitle}>{title}</Text>
						<Text style={infoStyleSubTitle}>{subTitle}</Text>
					</View>
					<View style={priceValue}>
						<Text style={priceStyle}>{value}</Text>
						{discountHandler(discountValue)}
					</View>
				</View>
			</View>
			<View style={circle}>
				<Icon light name='arrow-right' size={12} color='white' />
			</View>
		</View>
	);
};
export default HorizontalDishes;
