import HomePage from "~/pages/HomePage"
import LoginPage from "~/pages/LoginPage"
import ProfilePage from "~/pages/Profile"


//không cần đăng nhập vẫn xem được
const publicRoutes = [
    {
        path: '/',
        component:HomePage
    },
    {
        path: '/login',
        component:LoginPage
    },
    {
        path: '/profile',
        component:ProfilePage,
        layout:null
    }
]

//phải đăng nhập
const privateRoutes = [

]

export {publicRoutes, privateRoutes} 