import {Avatar, Button, Link} from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'
import {users} from "../../layout/sidebar/dataUsers";

const Profilee: FC = () => {
    const { user } = useAuth()
    const getUserById = (userId: string) => {
        return users.find(user => user._id === userId)
    }
    const userId = user?._id
    const currentUser = userId ? getUserById(userId) : undefined
    return (
        <Card>
            <Avatar src={'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1843'}></Avatar>
            <h1>Бокач Тимофей</h1>
            <h1>20 лет</h1>
            <h1>Город Москва</h1>
            {/*ВОЗРАСТ,ГОРОД,ВУЗ можно сделать аналогично имени*/}
            <h1>Вуз: РТУ МИРЭА</h1>
            <Button variant="contained" style={{marginRight: 7}}>Добавить в друзья</Button>
            <Button variant="outlined" style={{marginRight: 9}}>Удалить из друзей</Button>
            <Link href="/messages" underline="none" style={{fontSize: 18,paddingTop: 2,paddingBottom: 8, border: '2px solid #4682B4',borderRadius: '10%',fontWeight: 500,paddingLeft: 4,paddingRight: 4,marginRight: 9}}>
                Написать
            </Link>
        </Card>
    )
}

export default Profilee
