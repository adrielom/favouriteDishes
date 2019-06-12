import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Button, Text } from 'react-native';
import { accentColours } from '../styles/defaultStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';
import { page1Style } from '../styles/page1Style';
import HorizontalDishes from '../components/HorizontalDishes';
import VerticalDishes from '../components/VerticalDishes';

const {
	defaultMarginHorizontal,
	header,
	notificationContainer,
	notificationCircle,
	notificationValue,
	heart,
	favouriteDishes,
	favouriteDishesTitle,
	favouriteDishesContainer,
	manageYour,
	popularDishes,
} = page1Style;

const Page1 = ({ navigation }) => (
	<LinearGradient
		style={{ flex: 1 }}
		locations={[ 0, 0.2, 0.5, 1, 1 ]}
		colors={[ accentColours[0], accentColours[1], accentColours[2], accentColours[3], accentColours[3] ]}>
		<View style={defaultMarginHorizontal}>
			<View style={header}>
				<Icon name='align-left' size={18} color='white' light />
				<View style={notificationContainer}>
					<Icon name='heart' light size={20} color='white' style={heart} />
					<View style={notificationCircle}>
						<Text style={notificationValue}>1</Text>
					</View>
				</View>
			</View>
			<View styles={favouriteDishes}>
				<Text style={manageYour}>Manage Your</Text>
				<Text style={favouriteDishesTitle}>Favourite Dishes</Text>
				<View style={favouriteDishesContainer}>
					<HorizontalDishes />
					<HorizontalDishes />
				</View>
			</View>
			<View styles={popularDishes}>
				<FlatList renderItem={() => <VerticalDishes />} />
			</View>
		</View>
	</LinearGradient>
);

Page1.navigationOptions = {
	title: null,
	header: null,
};
export default Page1;
