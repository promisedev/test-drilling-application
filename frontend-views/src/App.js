import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
// ////importing all css////////////
import './App.css'
import './dashboard.css'
import './topic.css'
import './notification.css'
import './statistics.css'
import './chat.css'
import './account.css'
import './loading.css'
import './course.css'
import './cms.css'
import './footer.css'
import './help.css'
// /////////////importing all pages///
import Home from './views/home'
import Help from './views/help'
import Login from './views/login'
import Signup from './views/signup'
import CourseDashboard from './views/dashboard_comp/course_dashboard'
import ChatDashboard from './views/dashboard_comp/chat_dashboard'
import LiveDashboard from './views/dashboard_comp/live_dashboard'
import NotificationDashboard from './views/dashboard_comp/notification_dashboard'
import StatisticsDashboard from './views/dashboard_comp/statistics_dashboard'
import TestDashboard from './views/dashboard_comp/testdrill_dashboard'
import ProfileDashboard from './views/dashboard_comp/profile_dashboard'
import CMS from './views/dashboard_comp/cms'

import Dashboard from './views/dashboard_comp/dashboard'
import SingleCourse from './views/courses/singleCourse'
import Topics from './views/topics';
import Account from './views/account'
import PageNotFound from './views/404';
import SingleVideo from './views/courses/singlevideo';
import Secure from './views/dashboard_comp/secure_payment'
import Payment from './views/dashboard_comp/payment'
function App() {
  return( 
   <Router> 
   <Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/login" element={<Login/>}/>
<Route  path="/signup" element={<Signup/>}/>
<Route  path="/account" element={<Account/>}/>
     
<Route  path="/topics" element={<Topics/>}/>
<Route  path="/help" element={<Help/>}/>     
<Route  path="/dashboard/" element={<Dashboard/>}/>
<Route  path="/dashboard/courses" element={<CourseDashboard/>}/>
<Route  path="/dashboard/courses/:id" element={<SingleCourse/>}/>

<Route  path="/dashboard/courses/mathematics/:id" element={<SingleVideo/>}/>
<Route  path="/dashboard/courses/biology/:id" element={<SingleVideo/>}/>
<Route  path="/dashboard/courses/chemistry/:id" element={<SingleVideo/>}/>
<Route  path="/dashboard/courses/english/:id" element={<SingleVideo/>}/>
<Route  path="/dashboard/courses/physics/:id" element={<SingleVideo/>}/>
<Route  path="/dashboard/content-management-system" element={<CMS/>}/>
<Route  path="/id" element={<CMS/>}/>
<Route  path="/dashboard/chatroom" element={<ChatDashboard/>}/>
<Route  path="/dashboard/live_meeting" element={<LiveDashboard/>}/> 
<Route  path="/dashboard/notifications" element={<NotificationDashboard/>}/>
<Route  path="/dashboard/profile" element={<ProfileDashboard/>}/>
<Route  path="/dashboard/statistics" element={<StatisticsDashboard/>}/>    
<Route  path="/dashboard/test_drilling" element={<TestDashboard/>}/>

<Route path='/jaex_secure_payment/:id' element={<Secure/>}/>
<Route path='/payment_confirmation/' element={<Payment/>}/>
<Route  path="*" element={<PageNotFound/>}/>   
    </Routes>
    </Router>
  )  
  ;
}

export default App;
