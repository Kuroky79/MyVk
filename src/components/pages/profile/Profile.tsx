import { Avatar } from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'
import {users} from "../../layout/sidebar/dataUsers";

const Profile: FC = () => {
	const { user } = useAuth()
	const getUserById = (userId: string) => {
		return users.find(user => user._id === userId)
	}
	const userId = user?._id
	const currentUser = userId ? getUserById(userId) : undefined
	return (
		<Card>
			<Avatar src={user?.avatar}></Avatar>
			<h1>{user?.name}</h1>
			<h1>20 лет</h1>
			<h1>Город Москва</h1>
			{/*ВОЗРАСТ,ГОРОД,ВУЗ можно сделать аналогично имени*/}
			<h1>Вуз: РТУ МИРЭА</h1>
		</Card>
	)
}

export default Profile
