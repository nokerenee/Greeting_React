import Avatar from "./Avatar";

function UserInfo(props) {
  const { user } = props;

  return (
    <div className="UserInfo">
     <Avatar url={user.avatarUrl} alt={user.name}/>
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}

export default UserInfo;
