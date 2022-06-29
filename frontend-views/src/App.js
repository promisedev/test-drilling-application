import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css'
import './dashboard.css'
import './topic.css'
import './notification.css'
import './statistics.css'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'
import CourseDashboard from './views/dashboard_comp/course_dashboard'
import ChatDashboard from './views/dashboard_comp/chat_dashboard'
import LiveDashboard from './views/dashboard_comp/live_dashboard'
import NotificationDashboard from './views/dashboard_comp/notification_dashboard'
import StatisticsDashboard from './views/dashboard_comp/statistics_dashboard'
import TestDashboard from './views/dashboard_comp/testdrill_dashboard'
import ProfileDashboard from './views/dashboard_comp/profile_dashboard'
import Topics from './views/topics';


function App() {
  return( 
   <Router> 
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/signup" element={<Signup/>}/>
      <Route  path="/topics" element={<Topics/>}/>
     
     <Route  path="/dashboard" element={<CourseDashboard/>}/>
      <Route  path="/courses" element={<CourseDashboard/>}/>
     <Route  path="/chatroom" element={<ChatDashboard/>}/>
     <Route  path="/live_meeting" element={<LiveDashboard/>}/> 
     <Route  path="/notifications" element={<NotificationDashboard/>}/>
<Route  path="/profile" element={<ProfileDashboard/>}/>
 <Route  path="/statistics" element={<StatisticsDashboard/>}/>    
 <Route  path="/test_drilling" element={<TestDashboard/>}/>     
    </Routes>
    </Router>
  )  
  ;
}

export default App;
