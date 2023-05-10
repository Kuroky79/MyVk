import React, { FC, useState } from 'react'
import { Search } from '@mui/icons-material'

import styles from './Header.module.css'

import logoImg from './vk-logo.png'
import {users} from "../sidebar/dataUsers";
import UserItems from "../sidebar/UserItems";

const Header: FC = () => {
	const [isSearchActive, setIsSearchActive] = useState(false)
	const [friend,setFriend] = useState('')


	const filtredFriends = users.filter(user =>{
		return user.name.toLowerCase().includes(friend.toLowerCase())
	})
	return (
		<header className={styles.header}>
			<div className={styles['image-wrapper']}>
				<img src={logoImg} alt='' />
			</div>
			<div className={styles.wrapper}>
				{!isSearchActive && <Search />}
				<input
					type='text'
					placeholder='Поиск'
					onClick={() => setIsSearchActive(true)}
					onChange={(event)=> setFriend(event.target.value)}
				/>
			</div>

		</header>
	)
}

export default Header

