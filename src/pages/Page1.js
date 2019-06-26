import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
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
	popularDishesTitle,
	popularDishesSeeMore,
} = page1Style;

const Page1 = ({ navigation }) => {
	const [ star, setStar ] = useState(1);

	const changeStart = () => {
		setStar(star + 1);
	};

	return (
		<LinearGradient
			style={{ flex: 1 }}
			locations={[ 0, 0.2, 0.5, 1, 1 ]}
			colors={[ accentColours[0], accentColours[1], accentColours[2], accentColours[3], accentColours[3] ]}>
			<View style={defaultMarginHorizontal}>
				<View style={header}>
					<Icon name='align-left' size={18} color='white' light />
					<TouchableOpacity onPress={() => changeStart()} style={notificationContainer}>
						<Icon name='heart' light size={20} color='white' style={heart} />
						<View style={notificationCircle}>
							<Text style={notificationValue}>{star}</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View styles={favouriteDishes}>
					<Text style={manageYour}>Manage Your</Text>
					<Text style={favouriteDishesTitle}>Favourite dishes</Text>
					<View style={favouriteDishesContainer}>
						<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}>
							<HorizontalDishes title='Kachi kocha Pitha' subTitle='Special Crunch Flavor' value='20$' />
							<HorizontalDishes
								title='King Pizza'
								subTitle='Made with Cheese, Beef and Potato'
								value='20$'
								discount={true}
								discountValue={10}
							/>
							<HorizontalDishes title='Kachi kocha Pitha' subTitle='Special Crunch Flavor' value='20$' />
							<HorizontalDishes
								title='King Pizza'
								subTitle='Made with Cheese, Beef and Potato'
								value='20$'
								discount={true}
								discountValue={10}
							/>
							<HorizontalDishes title='Kachi kocha Pitha' subTitle='Special Crunch Flavor' value='20$' />
							<HorizontalDishes
								title='King Pizza'
								subTitle='Made with Cheese, Beef and Potato'
								value='20$'
								discount={true}
								discountValue={10}
							/>
						</ScrollView>
					</View>
				</View>
				<View style={{ flex: 1, marginBottom: 15 }}>
					<View style={popularDishes}>
						<Text style={popularDishesTitle}>Popular Dishes</Text>
						<Text style={popularDishesSeeMore}>View All</Text>
					</View>
					<ScrollView
						contentContainerStyle={{
							flexGrow: 1,
						}}
						horizontal={true}>
						<VerticalDishes value='19' title='Italian Noodles' />
						<VerticalDishes value='21' title='Vegetables' />
						<VerticalDishes value='19' title='Italian Noodles' />
						<VerticalDishes value='19' title='Italian Noodles' />
					</ScrollView>
				</View>
			</View>
		</LinearGradient>
	);
};

Page1.navigationOptions = {
	title: null,
	header: null,
};
export default Page1;
