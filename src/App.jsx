import { useState, useEffect } from 'react' 
import { supabase } from './lib/supabaseClient'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="container">
      {!session ? <Login /> : <Profile session={session} />}
    </div>
  )
}

export default App