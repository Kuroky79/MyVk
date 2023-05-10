import React, { FC } from 'react'
import User from "../../layout/sidebar/User";
import UserItems from "../../layout/sidebar/UserItems";

const Friends: FC = () => {
	return (
		<div>
			<h1>Friends</h1>
			<User />
			<UserItems />
		</div>
	)}

export default Friends
