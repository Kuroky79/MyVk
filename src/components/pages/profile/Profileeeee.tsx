import {Avatar, Button, Link} from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'
import {users} from "../../layout/sidebar/dataUsers";

const Profileeee: FC = () => {
    const { user } = useAuth()
    const getUserById = (userId: string) => {
        return users.find(user => user._id === userId)
    }
    const userId = user?._id
    const currentUser = userId ? getUserById(userId) : undefined
    return (
        <Card>
            <Avatar src={'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg'}></Avatar>
            <h1>Камышева Екатерина</h1>
            <h1>23 года</h1>
            <h1>Город Пермь</h1>
            {/*ВОЗРАСТ,ГОРОД,ВУЗ можно сделать аналогично имени,с профилями сделал костыльно*/}
            <h1>Вуз: ИТМО</h1>
            <Button variant="contained" style={{marginRight: 7}}>Добавить в друзья</Button>
            <Button variant="outlined" style={{marginRight: 9}}>Удалить из друзей</Button>
            <Link href="/messages" underline="none" style={{fontSize: 18,paddingTop: 2,paddingBottom: 8, border: '2px solid #4682B4',borderRadius: '10%',fontWeight: 500,paddingLeft: 4,paddingRight: 4, marginRight: 9}}>
                Написать
            </Link>
        </Card>
    )
}

export default Profileeee
