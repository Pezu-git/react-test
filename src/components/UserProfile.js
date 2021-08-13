/* eslint-disable no-unreachable */
import OnlineIndicator from './OnlineIndicator'
import { user } from './User'

function UserProfile({ info }) {
  const styles = { marginTop: 50, color: 'green' };
  console.log(info);
  return (
    <>
      <div style={styles}>Name: {info.name}</div>
      <div className={info.onliine ? 'online' : 'offline'}>
        Status: {info.status}
      </div>
      {info.online ? (
        <OnlineIndicator props={user.interests} />
      ) : (
        <OnlineIndicator props="run" />
      )}
      <img src={info.avatarURL} alt={info.name} />
      <div style={styles}>
        {info.interests.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </>
  );
}

export default UserProfile;