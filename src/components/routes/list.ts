import Auth from '../pages/auth/Auth'
import Friends from '../pages/friends/Friends'
import Home from '../pages/home/Home'
import Conversation from '../pages/messages/Conversation'
import Messages from '../pages/messages/Messages'
import Profile from '../pages/profile/Profile'
import Profilee from "../pages/profile/Profilee";
import Profileee from "../pages/profile/Profileee";
import Profileeee from "../pages/profile/Profileeee";
import Profileeeee from "../pages/profile/Profileeeee";


export const routes = [
    {
        path: '/',
        component: Home,
        auth: true,
    },
    {
        path: '/profile',
        component: Profile,
        auth: true,
    },
    {
        path: '/profile/1',
        component: Profilee,
        auth: true,
    },
    {
        path: '/profile/2',
        component: Profileee,
        auth: true,
    },
    {
        path: '/profile/3',
        component: Profileeee,
        auth: true,
    },
    {
        path: '/profile/4',
        component: Profileeeee,
        auth: true,
    },
    {
        path: '/messages',
        component: Messages,
        auth: true,
    },
    {
        path: '/message/:id',
        component: Conversation,
        auth: true,
    },
    {
        path: '/fiends',
        component: Friends,
        auth: true,
    },
    {
        path: '/auth',
        component: Auth,
        auth: false,
    },
]
