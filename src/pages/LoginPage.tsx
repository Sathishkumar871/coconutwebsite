import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";


export default function LoginPage() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [businessName, setBusinessName] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");


  const navigate = useNavigate();



  // Input Sanitization
  const sanitizeInput = (str:string)=>{

    return str
      .replace(/[<>]/g,"")
      .trim();

  };





  const handleLogin = async (
    e:React.FormEvent
  )=>{


    e.preventDefault();


    setErrorMsg("");
    setSuccessMsg("");



    const cleanName =
      sanitizeInput(name);


    const cleanBusiness =
      sanitizeInput(businessName);



    const mobileRegex =
      /^[6-9]\d{9}$/;



    if(!cleanName){

      setErrorMsg(
        "Please enter your full name."
      );

      return;

    }




    if(!mobileRegex.test(mobile)){


      setErrorMsg(
        "Please enter valid 10 digit mobile number."
      );

      return;

    }




    setLoading(true);



    try{


      const response =
      await fetch(
        "http://localhost:5000/api/auth/login",
        {

          method:"POST",


          headers:{

            "Content-Type":
            "application/json",

            "X-Requested-With":
            "XMLHttpRequest"

          },


          body:JSON.stringify({

            name:cleanName,

            mobileNumber:mobile,

            businessName:cleanBusiness

          })

        }
      );





      const data =
      await response.json();





      if(response.ok && data.success){



        // Save JWT Token

        localStorage.setItem(
          "token",
          data.token
        );





        // Save User Profile

        const userProfile={


          id:data.user._id,


          name:data.user.name,


          mobileNumber:
          data.user.mobileNumber,


          businessName:
          data.user.businessName,


          role:data.user.role,


          isLoggedIn:true,


          authenticatedAt:
          new Date().toISOString()


        };





        localStorage.setItem(

          "userProfile",

          JSON.stringify(userProfile)

        );





        setSuccessMsg(
          data.message
        );



        setTimeout(()=>{

          navigate("/");

        },1200);



      }
      else{


        setErrorMsg(

          data.message ||
          "Authentication failed."

        );


      }





    }
    catch(error){


      setErrorMsg(
        "Unable to connect server."
      );


    }
    finally{


      setLoading(false);


    }


  };
  return (

<div className="login-container">


  {/* Background Glow Effects */}

  <div className="glow-orb orb-1"></div>
  <div className="glow-orb orb-2"></div>
  <div className="glow-orb orb-3"></div>



  <div className="login-card">


    {/* Header */}

    <div className="login-header">


      <div className="brand-badge">

        <span className="badge-pulse"></span>

        WHOLESALE PORTAL

      </div>



      <h2>
        Green Basket
      </h2>


      <p>
        Premium Semi-Husked Coconut Bulk Orders
      </p>


    </div>





    {/* Success Banner */}

    {successMsg && (

      <div className="success-banner">

        <span className="success-icon">
          ✓
        </span>


        <span>
          {successMsg}
        </span>


      </div>

    )}






    {/* Error Banner */}

    {errorMsg && (

      <div className="error-banner">


        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >

          <circle
            cx="12"
            cy="12"
            r="10"
          />

          <line
            x1="12"
            y1="8"
            x2="12"
            y2="12"
          />

          <line
            x1="12"
            y1="16"
            x2="12.01"
            y2="16"
          />


        </svg>



        <span>
          {errorMsg}
        </span>


      </div>

    )}







<form
 onSubmit={handleLogin}
 className="login-form"
>



<div className="form-group">


<label>

Full Name
<span className="req">
 *
</span>

</label>



<div className="input-icon-wrapper">


<input

type="text"

placeholder="e.g. Sathish Kumar"

value={name}

onChange={(e)=>
setName(e.target.value)
}

maxLength={50}

required

/>


</div>


</div>






<div className="form-group">


<label>

Business / Firm Name

<span className="opt">
(Optional)
</span>


</label>



<div className="input-icon-wrapper">


<input


type="text"


placeholder="e.g. Sri Lakshmi Traders"


value={businessName}


onChange={(e)=>
setBusinessName(e.target.value)
}


maxLength={60}


/>


</div>


</div>






<div className="form-group">


<label>

Mobile Number

<span className="req">
*
</span>

</label>




<div className="phone-input-wrapper">


<span className="country-code">

+91

</span>




<input


type="tel"


maxLength={10}


placeholder="10-digit mobile number"


value={mobile}



onChange={(e)=>

setMobile(
e.target.value.replace(/\D/g,"")
)

}


/>


</div>



</div>







<button

type="submit"

className="login-btn"

disabled={loading}

>



{

loading ? (

<span className="spinner-wrapper">


<span className="btn-spinner"></span>


Authenticating...


</span>


)

:

(

<span>

Access Bulk Catalog →

</span>

)

}



</button>




</form>








{/* Security */}

<div className="security-notice">


<div className="shield-badge">


✓


</div>




<div className="security-text">


<h4>

Secure B2B Access

</h4>



<p>

Your wholesale account details are protected.

</p>



</div>



</div>






</div>


</div>


);
}