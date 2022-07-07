import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listOrders, orderDelete } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';



export default function OrderListScreen(props) {
    const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const deleteOrder = useSelector((state) => state.deleteOrder);
  const { loading: loadingDelete, error: errorDelete, success: successDelete} = deleteOrder;
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(successDelete){
      dispatch({ type: ORDER_DELETE_RESET});
    }
    dispatch(listOrders());
    
  }, [dispatch,successDelete]);
  const deleteHandler = (order) => {
    dispatch(orderDelete(order._id));
  };

  return (
    <div>
      <h1>Orders</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant= 'danger'>{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                    >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
  

