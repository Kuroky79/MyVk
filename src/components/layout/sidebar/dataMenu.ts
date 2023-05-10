import * as Icons from '@mui/icons-material'
import { IMenuItem } from '../../../../../../Desktop/vk-copy/src/types'

export const menu: IMenuItem[] = [
	{
		title: 'Моя страница',
		link: '/profile',
		icon: Icons.Home,
	},
	{
		title: 'Друзья',
		link: '/friends',
		icon: Icons.People,
	},
	{
		title: 'Новости',
		link: '/',
		icon: Icons.Article,
	},
]
