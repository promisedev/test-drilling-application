import express from "express";
// getting all imports

import SignupCtr from "./signupCtr.js";
import LoginCtr from "./loginCtr.js";
import LogoutCtr from "./logoutCtr.js";
import RefreshCtr from "./refreshCtr.js";
import SubjectCtr from "./subjectCtr.js";
import MessageCtr from "./messageCtr.js";
import GetMessageCtr from "./getmessageCtr.js";
import VideoCtr from './videoCtr.js'
import GetVideoCtr from './getvideoCtr.js'
import GetSingleVideoCtr from './getsinglevideoCtr.js'
import GetUserCtr from './getuserCtr.js'
// ///////////////////////////////
const router = express.Router()

// setting up routes
 
router.route('/signup').post(SignupCtr)
router.route('/login').post(LoginCtr)
router.route('/logout').get(LogoutCtr)
router.route('/refresh').get(RefreshCtr)
router.route('/subjects').get(SubjectCtr)
router.route('/newmessage').post(MessageCtr)
router.route('/getmessage').get(GetMessageCtr)
router.route('/newvideo').post(VideoCtr)
router.route('/getvideos').get(GetVideoCtr)
router.route('/getvideos/:id').get(GetSingleVideoCtr)
router.route('/getuser/:id').get(GetUserCtr)
export default router