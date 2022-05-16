import {Link} from 'react-router-dom'
const Default = ()=>{
    return(
      <article className='logger_div'>
          <div className="log_div"><Link to="/login">Log in</Link></div>
          <div className="sign_div"><Link to="/signup">Sign up</Link></div>
      </article>  
    )
}

const Logged = ()=>{
    return(
      <article className='logger_div'>
          <div className="dash_div"><Link to="/dashboard">Dashboard</Link></div>
          {/* <div className="sign_div"><Link to="/signup">Sign up</Link></div> */}
      </article>  
    )
}

export {Default,Logged}

