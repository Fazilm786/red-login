import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='left-side'>
          <div className='input-box'>
            <p className='h1' >Welcome Back!</p>
            <p className='title'>The Faster You Fill Up The Faster You Enjoy</p>
            <form>
              <lable>Email</lable><br/>
              <input type="email" placeholder='Enter Your Email'/><br/>
              <lable>Password</lable><br/>
              <input type='password' placeholder='********'/><br/>
              <a href='/'><img src={require("./assets/icons/eye.png")} alt='show password'/></a>

            </form>
            <div className='check-forgot'>
              <label for="myCheckbox">Remember Me</label>
              <input type="checkbox" className="myCheckbox"/>
              <a href='/' >Forgot Password</a>
            </div>
            <button>Login</button>
            <div className='cross-line'>
              <div className='line'></div>
              <div className='or'><p>Or Login With</p></div>
            </div>
            <div className='social-media'>
              <img src={require('./assets/icons/search.png')} alt='google'/>
              <img src={require('./assets/icons/twitter.png')} alt='twitter'/>
              <img src={require('./assets/icons/instagram.png')} alt='insagram'/>
              <img src={require('./assets/icons/facebook.png')} alt='facebook'/>
            </div>
          </div>
          <p className='last'>don't have an account?  <a href='/'> Sign Up</a></p>
          <img src={require("./assets/icons/crown.png")} alt='crown' style={{width:200}} className='crown'/>
        </div>
        
        
        <div className='right-side'>
          {/* <img src={require('./assets/icons/right side.jpg')} alt='right side'/> */}

        </div>
      </div>
    </div>
  );
}

export default App;
