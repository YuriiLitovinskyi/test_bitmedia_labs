import React from 'react';


function UserInfo(data) {
  console.log(data);
  console.log(data.match.params.id);


  return (
    <div className="UserInfo">
      <h1>User Info!</h1>     
    </div>
  );
}


  

export default UserInfo;