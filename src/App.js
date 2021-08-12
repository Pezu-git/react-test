import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  const user = {
    name: 'Vasya',
    status: 'React Developer',
    online: true,
    avatar: '/logo.svg',
    interests: [
      'JavaScript',
      'React',
      'Frontend'
    ]
  }
  
  return <UserProfile info = {user}/>;
}

export default App;
