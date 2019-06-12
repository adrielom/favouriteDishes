import React from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

const Page2 = () => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>About</Text>
	</View>
);

Page2.navigationOptions = {
	title: null,
	headerTransparent: true
};

export default Page2;
