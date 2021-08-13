
import './App.css';
import UserProfile from './components/UserProfile';
import { user } from './components/User'

export default function App() {
  return (
    <div>
      <UserProfile info={user} />
    </div>
  );
}
