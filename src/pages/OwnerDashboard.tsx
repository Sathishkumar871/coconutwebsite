import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OwnerDashboard.css";


interface Order {

  _id:string;

  orderId:string;

  customerName:string;

  phone:string;

  address:string;

  productName:string;

  category:string;

  quantity:number;

  unit:string;

  amount:number;

  paymentStatus:string;

  paymentMethod:string;

  orderStatus:string;

  createdAt:string;

}



export default function OwnerDashboard(){


const navigate = useNavigate();


const [orders,setOrders] =
useState<Order[]>([]);


const [loading,setLoading] =
useState(true);


const [search,setSearch] =
useState("");


const [filter,setFilter] =
useState("All");



const token =
localStorage.getItem("ownerToken");





useEffect(()=>{


if(!token){

navigate("/owner/login");

return;

}


loadOrders();


},[]);






// ===============================
// GET ALL ORDERS
// ===============================

const loadOrders = async()=>{


try{


const response =
await fetch(

"http://localhost:5000/api/orders"

);



const data =
await response.json();



if(data.success){

setOrders(data.orders);

}


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};






// ===============================
// UPDATE ORDER STATUS
// ===============================


const updateStatus = async(

orderId:string,

status:string

)=>{


try{


const response =
await fetch(

`https://coconutbackend.onrender.com/api/orders/${orderId}/status`,

{

method:"PUT",

headers:{

"Content-Type":
"application/json"

},


body:JSON.stringify({

orderStatus:status

})

}


);



const data =
await response.json();



if(data.success){


alert(
"Order Updated Successfully"
);


loadOrders();


}

else{


alert(
data.message
);


}



}

catch(error){


console.log(error);


alert(
"Unable to update order"
);


}



};






// ===============================
// LOGOUT
// ===============================


const logout = ()=>{


localStorage.removeItem(
"ownerToken"
);


navigate("/owner/login");


};








const totalOrders =
orders.length;



const pendingOrders =
orders.filter(
(item)=>
item.orderStatus==="Pending"
).length;



const confirmedOrders =
orders.filter(
(item)=>
item.orderStatus==="Confirmed"
).length;



const deliveredOrders =
orders.filter(
(item)=>
item.orderStatus==="Delivered"
).length;






const revenue =
orders.reduce(

(total,item)=>

total + item.amount,

0

);








const filteredOrders =
orders.filter((order)=>{


const searchData =

order.orderId
.toLowerCase()
.includes(
search.toLowerCase()
)

||

order.customerName
.toLowerCase()
.includes(
search.toLowerCase()
)

||

order.phone.includes(search);



const filterData =

filter==="All"

||

order.orderStatus===filter;



return searchData && filterData;


});







if(loading){


return(

<div className="loading">

Loading Orders...

</div>

);


}






return(

<div className="dashboard">



<header className="dashboard-header">


<div>

<h1>
Owner Dashboard
</h1>


<p>
Green Basket Wholesale Portal
</p>


</div>



<button

className="logout-btn"

onClick={logout}

>

Logout

</button>



</header>






<section className="stats">


<div className="card">

<h2>
{totalOrders}
</h2>

<p>
Total Orders
</p>

</div>



<div className="card">

<h2>
{pendingOrders}
</h2>

<p>
Pending
</p>

</div>




<div className="card">

<h2>
{confirmedOrders}
</h2>

<p>
Confirmed
</p>

</div>





<div className="card">

<h2>
{deliveredOrders}
</h2>

<p>
Delivered
</p>

</div>



</section>









<div className="dashboard-tools">


<input

placeholder="Search Order..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>




<select

value={filter}

onChange={(e)=>
setFilter(e.target.value)
}

>


<option>
All
</option>


<option>
Pending
</option>


<option>
Confirmed
</option>


<option>
Packing
</option>


<option>
Shipped
</option>


<option>
Delivered
</option>


</select>





<div className="revenue-card">


<h3>
Total Revenue
</h3>


<h2>
₹ {revenue}
</h2>


</div>


</div>










<section className="orders">



{

filteredOrders.length===0 ?


<h2>
No Orders Found
</h2>



:


filteredOrders.map((order)=>(


<div

className="order-card"

key={order._id}

>



<div className="order-header">


<h3>
#{order.orderId}
</h3>



<span className="status">

{order.orderStatus}

</span>



</div>







<div className="order-body">


<p>
<b>
Customer:
</b>
{" "}
{order.customerName}
</p>



<p>
<b>
Phone:
</b>
{" "}
{order.phone}
</p>



<p>
<b>
Address:
</b>
{" "}
{order.address}
</p>



<p>
<b>
Product:
</b>
{" "}
{order.productName}
</p>



<p>
<b>
Quantity:
</b>
{" "}
{order.quantity}
{" "}
{order.unit}
</p>



<p>
<b>
Payment:
</b>
{" "}
{order.paymentStatus}
</p>


</div>








<div className="order-actions">



<button

onClick={()=>updateStatus(

order.orderId,

"Confirmed"

)}

>

✅ Confirm

</button>





<button

onClick={()=>updateStatus(

order.orderId,

"Packing"

)}

>

📦 Packing

</button>





<button

onClick={()=>updateStatus(

order.orderId,

"Shipped"

)}

>

🚚 Shipped

</button>





<button

onClick={()=>updateStatus(

order.orderId,

"Delivered"

)}

>

🏠 Delivered

</button>




</div>





</div>


))


}



</section>




</div>


);


}