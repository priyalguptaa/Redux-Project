import React from "react";

const UserComponenet = ({data})=>{
    return(
        <div>
        <h1>User componenet here..!!</h1>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        </div>
    )

}

export default UserComponenet