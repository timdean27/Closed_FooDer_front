import React, { useState , useEffect} from 'react'

const AuthModal = ({setShowModal , isSignUp}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);


    console.log(email, password, confirmPassword,error)

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if( isSignUp && (password != confirmPassword)){
                setError('Passwords need to match');
            }
            console.log('make a post request to our database')
        } catch (error){
            console.log(error)
        }
    }


  return (
    <div className="auth-modal">
        <div className='close-icon' onClick = {handleClick}>&#10008;</div>
        <h2>{isSignUp ? 'CREATE ACCOUNT' : ' LOG IN'}</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confrm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />}
            <input className="submit-btn" type="submit"/>
            <p>{error}</p>
        </form>
    </div>
  )
}

export default AuthModal