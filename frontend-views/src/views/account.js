import Navigation from './navigation'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {CheckCircleOutlineOutlined} from '@material-ui/icons';

const Account = ()=>{

    return (
        <section className='account_cont'>
        <Navigation/>
        {/* ////////////////////////////// */}
        <article className='account_notify'>
          <div className='account_notify_body'>
        <article className='account_msg'><CheckCircleOutlineOutlined/> Congratulation you have successfully created and account </article>
        <Link to='/login'><IconButton>login</IconButton></Link>
            </div>  
        </article>

        </section>
    )
}

export default Account