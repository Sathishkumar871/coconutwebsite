import { useEffect, useState } from "react";
import "./MyOrders.css";


interface Order {

  orderId: string;

  productName: string;

  category: string;

  quantity: number;

  unit: string;

  amount: number;

  orderStatus: string;

  paymentStatus: string;

  createdAt: string;

}



interface Stats {

  totalOrders:number;

  pending:number;

  confirmed:number;

  delivered:number;

}



export default function MyOrders(){


  const [orders,setOrders] = useState<Order[]>([]);

  const [stats,setStats] = useState<Stats | null>(null);

  const [recentOrder,setRecentOrder] = useState<Order | null>(null);

  const [loading,setLoading] = useState(true);



  useEffect(()=>{


    fetchOrders();


  },[]);





  const fetchOrders = async()=>{


    try{


      const token =
      localStorage.getItem("token");



      const response =
      await fetch(
       "https://coconutbackend.onrender.com/api/orders/my-orders",
        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }
      );



      const data =
      await response.json();



      if(data.success){


        setOrders(data.orders);

        setStats(data.stats);

        setRecentOrder(data.recentOrder);


      }



    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }


  };





  if(loading){

    return (

      <div className="orders-loading">

        Loading Orders...

      </div>

    );

  }





return (

<div className="orders-page">


<h1>
My Orders
</h1>


<p className="subtitle">
Your Green Basket wholesale order history
</p>





<div className="stats-container">


<div className="stat-card">

<h3>
Total Orders
</h3>

<strong>
{stats?.totalOrders || 0}
</strong>

</div>




<div className="stat-card">

<h3>
Pending
</h3>

<strong>
{stats?.pending || 0}
</strong>

</div>




<div className="stat-card">

<h3>
Confirmed
</h3>

<strong>
{stats?.confirmed || 0}
</strong>

</div>




<div className="stat-card">

<h3>
Delivered
</h3>

<strong>
{stats?.delivered || 0}
</strong>

</div>



</div>







{
recentOrder && (

<div className="recent-order">


<h2>
Recent Order
</h2>


<div className="order-box">


<h3>
{recentOrder.productName}
</h3>


<p>
Order ID:
{recentOrder.orderId}
</p>


<p>
Quantity:
{recentOrder.quantity} {recentOrder.unit}
</p>


<p>
Status:
<span>
{recentOrder.orderStatus}
</span>
</p>


</div>


</div>

)

}








<div className="all-orders">


<h2>
All Orders
</h2>




{
orders.length === 0 ? (

<p>
No orders found
</p>

)

:

(

orders.map((order)=>(


<div
className="order-card"
key={order.orderId}
>


<div>

<h3>
{order.productName}
</h3>

<p>
{order.category}
</p>

</div>



<div>

<p>
Qty:
{order.quantity}
{" "}
{order.unit}
</p>


<p>
₹{order.amount}
</p>


</div>



<div className="status">

{order.orderStatus}

</div>



</div>


))

)

}




</div>





</div>

);


}