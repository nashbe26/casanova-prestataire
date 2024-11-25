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
  const [product, setProduct] = useState()
  const onOpenModal = (x) => { setProduct(x); setOpen(true) };
  const onCloseModal = () => setOpen(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  useEffect(() => {
    console.log(product);
  }, [product])
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await GetUser(user);
        const data = await get("Order", { owner: response.user._id });
        console.log(data, "ddddddddd");

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
        {product && <Modal open={open} onClose={onCloseModal} center >
          <h2 className="text-[16px] text-gray-900_02 my-3"><b>Référence de la commande :</b> {product._id} </h2>
          <h2 className="text-[16px] text-gray-900_02 my-3"><b>Date de livraison :</b> {moment(product.date).format('YYYY/MM/DD')} </h2>
          <h2 className="text-[16px] text-gray-900_02 my-3"><b>ID Du client :</b> {product.client} </h2>
          <div className="flex justify-between gap-[10px] my-3 py-3" style={{ borderBottom: '1px solid #000' }}>
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
            product.products?.map(x => {
              return (
                <div className="flex justify-between items-center gap-[10px] my-4 py-2" style={{ borderBottom: '1px solid #000' }}>
                  <div className="w-[22.5%]">
                    <img src={'https://www.casanova-event.com/uploads/' + x.id_product?.images[0]} alt="" width={'100%'} />
                  </div>
                  <div className="w-[75.5%] ">
                    <div className="flex jsutify-between">

                      <div className="w-[30%]">
                        <p className="text-center"> {x.id_product?.title}</p>
                      </div>
                      <div className="w-[30%]">
                        <p className="text-center">{x.id_product?.price} TND</p>
                      </div>
                      <div className="w-[30%]">
                        <p className="text-center">{x.quantity}</p>
                      </div>
                    </div>
                    <div className="w-[100%] my-3">
                      <p style={{fontWeight:"600",fontSize:"18px"}}>Service Extra : </p>
                      <div className="w-[100%] my-3" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        
                          <p style={{ width:"30%"}}>saison : {x.addons.seasonPrice}</p>
                        
                        
                          <p style={{ width:"30%"}}>hors saison : {x.addons.offSeasonPrice}</p>
                        
                        
                          <p style={{ width:"30%"}}>soirée : {x.addons.nightPrice}</p>
                        
                        
                          <p style={{ width:"30%"}}>matinée : {x.addons.morningPrice}</p>
                        
                        
                          <p style={{ width:"30%"}}>(VDS) : {x.addons.weekendPrice}</p>
                        
                       
                          <p style={{ width:"30%"}}>Semaine : {x.addons.holidayPrice}</p>
                        
                      </div>

                    <hr className="mb-2"></hr>
                      {x.extra?.map(x => {
                        return (
                          <div className="flex gap-[10px]">
                            <p>{x.extra} : {x.price}</p>

                          </div>
                        )
                      })
                      }
                    </div>
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
            className="text-2xl md:text-[22px] my-5 py-5 sm:text-xl text-gray-900_02"
            style={{ textAlign: "center", justifyContent: "center" }}
            size="txtInterSemiBold24"
          >
            Orders
          </Text>

          <table>
            <thead>
              <tr>
                <th style={{ width: "20%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Ordre</th>
                <th style={{ width: "30%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Date / Time</th>
                <th style={{ width: "15%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Quantité</th>
                <th style={{ width: "20%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Prix Totale</th>
                <th style={{ width: "15%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Plus de détails</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((v, index) => {
                  return (
                    <>
                      <p style={{ fontSize: "14px", fontWeight: "600" }}>Ordre Numero  {index + 1}</p>
                      {v.products.map(x => (
                        <tr key={x?._id}>
                          <td style={{ width: "20%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">#{shortenOrderId(x?._id)}</td>
                          <td style={{ width: "30%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{moment(x?.date).format('YYYY/MM/DD')}</td>
                          <td style={{ width: "15%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{x?.quantity}</td>
                          <td style={{ width: "20%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{x?.price} TND</td>
                          <td style={{ width: "15%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">
                            <span className="more-details" onClick={() => onOpenModal(v)}>Plus de détails</span>
                          </td>
                        </tr>
                      ))}
                    </>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default PresorderPage;
