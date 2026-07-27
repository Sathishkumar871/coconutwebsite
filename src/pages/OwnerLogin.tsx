import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OwnerLogin.css";


export default function OwnerLogin(){

const navigate = useNavigate();


const [mobileNumber,setMobileNumber] =
useState("");

const [password,setPassword] =
useState("");

const [error,setError] =
useState("");

const [loading,setLoading] =
useState(false);



const handleLogin = async(
e:React.FormEvent
)=>{


e.preventDefault();

setError("");

setLoading(true);



try{


const response =
await fetch(

"https://coconutbackend.onrender.com/api/owner/login",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

mobileNumber,

password

})

}

);



const data =
await response.json();





if(data.success){


localStorage.setItem(
"ownerToken",
data.token
);


localStorage.setItem(
"owner",
JSON.stringify(data.owner)
);



navigate(
"/owner/dashboard"
);


}

else{


setError(
data.message
);


}



}

catch(error){

console.log(error);

setError(
"Server connection failed"
);


}

finally{

setLoading(false);

}


};




return(

<div className="owner-login-page">


<div className="owner-login-card">


<h1>
Owner Portal
</h1>


<p>
Green Basket Admin Access
</p>




{
error &&

<div className="login-error">

{error}

</div>

}





<form
onSubmit={handleLogin}
>



<label>
Mobile Number
</label>


<input

type="tel"

maxLength={10}

placeholder="Enter mobile number"

value={mobileNumber}

onChange={(e)=>
setMobileNumber(
e.target.value.replace(/\D/g,"")
)
}

/>





<label>
Password
</label>


<input

type="password"

placeholder="Enter password"

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

/>






<button
disabled={loading}
>

{

loading
?
"Checking..."
:
"Login"

}


</button>



</form>



</div>



</div>

);

}