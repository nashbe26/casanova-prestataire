import React, { useEffect, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useGetUser, useGetById } from "../../utils/functions";
import { useRecoilState } from "recoil";
import { User } from "../../utils/recoil/atoms";
import { ReactTable, Text } from "components";
import { useGet } from "utils/functions";
import { format } from "date-fns";
import md5 from "md5";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import moment from 'moment'


const PresorderPage = () => {
  const GetUser = useGetUser();
  const get = useGet();
  const getById = useGetById();
  const [user] = useRecoilState(User);
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [product,setProduct] = useState()
  const onOpenModal = (x) => {setProduct(x); setOpen(true)};
  const onCloseModal = () => setOpen(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  useEffect(()=>{
    console.log(product);
  },[product])
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await GetUser(user);
        const data = await get("Order", { owner: response.user._id });

        const ordersWithCustomerNames = await Promise.all(
          data.map(async (order) => {
            const customer = await fetchCustomerName(order.client);
            return { ...order, customerName: customer };
          })
        );

        setOrders(ordersWithCustomerNames);
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };

    fetchOrders();
  }, []);

  const fetchCustomerName = async (customerId) => {
    try {
      const data = await getById("User", { _id: customerId });
      return data;
    } catch (error) {
      console.error("Error fetching customer name:", error);
      return "Error";
    }
  };

  const shortenOrderId = (orderId) => {
    const hashedId = md5(orderId);
    return hashedId.substring(0, 8);
  };


  return (
    <div className="flex m-auto w-full">
           <div>
            {product &&  <Modal  open={open} onClose={onCloseModal} center >
              <h2 className="text-[16px] text-gray-900_02 my-3"><b>Référence de la commande :</b> {product._id} </h2>
              <h2 className="text-[16px] text-gray-900_02 my-3"><b>Date de livraison :</b> {moment(product.date).format('YYYY/MM/DD')} </h2>
              <h2 className="text-[16px] text-gray-900_02 my-3"><b>ID Du client :</b> {product.client} </h2>
              <div className="flex justify-between gap-[10px] my-3 py-3" style={{borderBottom:'1px solid #000'}}>
                    <div className="w-[22.5%]">
                        <p className="text-center  text-[16px] text-gray-900_02">Image</p>
                    </div>
                    <div className="w-[22.5%]">
                      <p className="text-center  text-[16px] text-gray-900_02">Titre</p>
                    </div>
                    <div className="w-[22.5%]">
                      <p className="text-center  text-[16px] text-gray-900_02">Prix</p>
                    </div>
                    <div className="w-[22.5%]">
                        <p className="text-center  text-[16px] text-gray-900_02">Quantité</p>
                    </div>
                  </div>
                {
                  product.products?.map(x=>{
                    return(
                  <div className="flex justify-between items-center gap-[10px] my-4 py-2" style={{borderBottom:'1px solid #000'}}>
                    <div className="w-[22.5%]">
                        <img src={'https://www.casanova-event.com/uploads/'+x.id_product?.image[0]} alt="" width={'100%'} />
                    </div>
                    <div className="w-[22.5%]">
                      <p className="text-center"> {x.id_product?.title}</p>
                     
                    </div>
                    <div className="w-[22.5%]">
                    <p className="text-center">{x.id_product?.price} TND</p>
                    </div>
                    <div className="w-[22.5%]">
                    <p className="text-center">{x.quantity}</p>
                    </div>
                  </div>
                    )
                  })
                }
                
            </Modal>
            }
           
          </div>
      <div className="w-[100%] flex m-auto w-full justify-end">
        <div className="bg-white-A700 w-[100%]  border-solid flex flex-col items-start justify-end ">
          <Text
            className="text-2xl md:text-[22px] mb-5 pb-5 sm:text-xl text-gray-900_02"
            style={{ textAlign: "center", justifyContent: "center" }}
            size="txtInterSemiBold24"
          >
            Orders
          </Text>

          <table>
            <thead>
              <tr>
                <th style={{ width: "20%", height: "50px" }} className="text-center  text-[15px] text-gray-900_02">Order</th>
                <th style={{ width: "30%", height: "50px" }} className="text-center  text-[15px] text-gray-900_02">Date / Time</th>
                <th style={{ width: "15%", height: "50px" }} className="text-center  text-[15px] text-gray-900_02">Livraision</th>
                <th style={{ width: "20%", height: "50px" }} className="text-center  text-[15px] text-gray-900_02">Total Price</th>
                <th style={{ width: "15%", height: "50px" }} className="text-center  text-[15px] text-gray-900_02">More Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(x => (
                <tr key={x?._id}>
                  <td style={{ width: "20%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[15px] text-gray-900_02">#{shortenOrderId(x?._id)}</td>
                  <td style={{ width: "30%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[15px] text-gray-900_02">{moment(x?.date).format('YYYY/MM/DD')}</td>
                  <td style={{ width: "15%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[15px] text-gray-900_02">{x?.livraision}</td>
                  <td style={{ width: "20%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[15px] text-gray-900_02">{x?.totalPrice} TND</td>
                  <td style={{ width: "15%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[15px] text-gray-900_02">
                    <span className="more-details" onClick={() => onOpenModal(x)}>More</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

     
        </div>
      </div>
    </div>
  );
};


export default PresorderPage;
