import BuyTickets from "../pages/BuyTickets";
import SchedulePage from "../pages/SchedulePage";
import LineUp from "../pages/LineUp";
import Contact from "../pages/Contact";
import Home from "../pages/home";
import Cart from "../components/Cart.jsx";



const routes = [
    {
        path:"/",
        component: Home,
        name: "Home",
        protected: false
    },
    {
        path:"/LineUp",
        component: LineUp,
        name: "Line Up",
        protected: false
    },
    {
        path:"/SchedulePage",
        component: SchedulePage,
        name: "SchedulePage",
        protected: false
    },
    {
        path: "/BuyTickets",
        component: BuyTickets,
        name: "BuyTickets",
        protected: false
    },
    {
        path:"/Contact",
        component:Contact,
        name: "Contact Us",
        protected: false
    },
    {
        path:"/Cart",
        component:Cart,
        name:"Cart",
        protected: false,
       
    }

]
export default routes;