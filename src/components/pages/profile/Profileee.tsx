import {Avatar, Button, Link} from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'
import {users} from "../../layout/sidebar/dataUsers";

const Profileee: FC = () => {
    const { user } = useAuth()
    const getUserById = (userId: string) => {
        return users.find(user => user._id === userId)
    }
    const userId = user?._id
    const currentUser = userId ? getUserById(userId) : undefined
    return (
        <Card>
            <Avatar src={'https://img.etimg.com/thumb/width-640,height-480,imgsize-144736,resizemode-1,msid-69037337/small-biz/startups/newsbuzz/fraud-is-only-possible-if-user-grants-access-oldrich-mller-coo-anydesk/oldrich-muller.jpg'
            }></Avatar>
            <h1>Лучников Петр</h1>
            <h1>44 года</h1>
            <h1>Город Ижевск</h1>
            {/*ВОЗРАСТ,ГОРОД,ВУЗ можно сделать аналогично имени*/}
            <h1>Вуз: МГУ</h1>
            <Button variant="contained" style={{marginRight: 7}}>Добавить в друзья</Button>
            <Button variant="outlined" style={{marginRight: 9}}>Удалить из друзей</Button>
            <Link href="/messages" underline="none" style={{fontSize: 18,paddingTop: 2,paddingBottom: 8, border: '2px solid #4682B4',borderRadius: '10%',fontWeight: 500,paddingLeft: 4,paddingRight: 4, marginRight: 9}}>
                Написать
            </Link>
        </Card>
    )
}

export default Profileee
