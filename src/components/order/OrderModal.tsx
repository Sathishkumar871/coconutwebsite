import { useState } from "react";
import "./OrderModal.css";


interface Props {

  isOpen:boolean;

  onClose:()=>void;

  productName:string;

  grade:string;

}



export default function OrderModal({

  isOpen,

  onClose,

  productName,

  grade,

}:Props){



const [customerName,setCustomerName]=useState("");

const [quantity,setQuantity]=useState("");

const [phone,setPhone]=useState("");

const [address,setAddress]=useState("");



const [notification,setNotification]=useState({

show:false,

type:"",

message:""

});





if(!isOpen) return null;





const showNotification=(

type:string,

message:string

)=>{


setNotification({

show:true,

type,

message

});



setTimeout(()=>{


setNotification({

show:false,

type:"",

message:""

});


},3000);


};







const minimum = 500;







const handleContinue = async()=>{


console.log("BUTTON CLICKED");



if(!customerName){


showNotification(

"error",

"Please enter your name"

);


return;

}





if(!quantity){


showNotification(

"error",

"Please enter quantity"

);


return;

}




if(Number(quantity)<minimum){


showNotification(

"error",

`Minimum order is ${minimum}`

);


return;

}





if(phone.length!==10){


showNotification(

"error",

"Enter valid mobile number"

);


return;

}





if(address.length<15){


showNotification(

"error",

"Enter complete address"

);


return;

}






try{



const response = await fetch(

"http://localhost:5000/api/orders",

{


method:"POST",


headers:{


"Content-Type":"application/json"

},



body:JSON.stringify({



customerName,


phone,


address,



productName,


category:"coconut",



quantity:Number(quantity),



unit:"pieces",



amount:0,



paymentMethod:"UPI"



})


}

);






const data = await response.json();







if(data.success){



showNotification(

"success",

"✓ Order Submitted Successfully"

);





setCustomerName("");

setQuantity("");

setPhone("");

setAddress("");





setTimeout(()=>{


onClose();


},3000);



}

else{


showNotification(

"error",

data.message || "Order failed"

);


}





}

catch(error){


console.log(error);



showNotification(

"error",

"Backend server not connected"

);


}



};









return(

<>


{


notification.show &&


<div

className={`premium-toast ${notification.type}`}

>


<span>


{

notification.type==="success"

?

"✓"

:

"!"

}


</span>



<p>

{notification.message}

</p>



</div>



}







<div className="order-overlay">


<div className="order-modal">





<button

className="order-close"

onClick={onClose}

>

✕

</button>






<h2>

Bulk Order

</h2>





<p className="subtitle">

Premium coconut export supply

</p>








<div className="field">


<label>

Customer Name

</label>


<input

type="text"

placeholder="Enter your name"

value={customerName}

onChange={(e)=>

setCustomerName(e.target.value)

}

/>


</div>









<div className="field">


<label>

Product

</label>


<input

value={productName}

readOnly

/>

</div>









<div className="field">


<label>

Grade

</label>


<input

value={grade}

readOnly

/>

</div>









<div className="field">


<label>

Quantity

</label>


<input

type="number"

placeholder="Minimum 500"

value={quantity}

onChange={(e)=>

setQuantity(e.target.value)

}

/>


</div>









<div className="field">


<label>

Mobile Number

</label>


<input

type="tel"

maxLength={10}

placeholder="+91 _____________"

value={phone}

onChange={(e)=>

setPhone(e.target.value)

}

/>


</div>









<div className="field">


<label>

Delivery Address

</label>


<textarea

rows={4}

placeholder="Full delivery address"

value={address}

onChange={(e)=>

setAddress(e.target.value)

}

/>


</div>









<button

type="button"

className="continue-btn"

onClick={handleContinue}

>

Submit Bulk Order →

</button>








</div>

</div>



</>

);


}