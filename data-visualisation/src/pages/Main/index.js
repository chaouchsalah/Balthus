import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { TabWrapper, Tab, ContentWrapper, StyledMain } from './styles';
import { LoginTab, SignupTab } from '../../utils/constants';

export default function Main({ history }) {
	const [tab, setTab] = useState(LoginTab);

	const isLoginSelected = tab === LoginTab;
	const isSignupSelected = tab === SignupTab;
	if (localStorage.getItem('token')) {
		history.push('/');
	}
	return (
		<StyledMain>
			<TabWrapper>
				<Tab onClick={() => setTab(LoginTab)} isSelected={isLoginSelected}>
					<p>{LoginTab}</p>
					<span />
				</Tab>
				<Tab onClick={() => setTab(SignupTab)} isSelected={isSignupSelected}>
					<p>{SignupTab}</p>
					<span />
				</Tab>
			</TabWrapper>
			<ContentWrapper>
				{isLoginSelected && <Login history={history} />}
				{isSignupSelected && <Signup history={history} />}
			</ContentWrapper>
		</StyledMain>
	);
}
