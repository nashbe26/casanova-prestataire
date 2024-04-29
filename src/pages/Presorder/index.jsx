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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex:"999999999"
  },
};
const Modals = ({ modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  )
}

const PresorderPage = () => {
  const GetUser = useGetUser();
  const get = useGet();
  const getById = useGetById();
  const [user] = useRecoilState(User);
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

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
                <th style={{ width: "20%", height: "50px" }} className="text-center  text-[13px] text-gray-900_02">Order</th>
                <th style={{ width: "30%", height: "50px" }} className="text-center  text-[13px] text-gray-900_02">Date / Time</th>
                <th style={{ width: "15%", height: "50px" }} className="text-center  text-[13px] text-gray-900_02">Livraision</th>
                <th style={{ width: "20%", height: "50px" }} className="text-center  text-[13px] text-gray-900_02">Total Price</th>
                <th style={{ width: "15%", height: "50px" }} className="text-center  text-[13px] text-gray-900_02">More Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(x => (
                <tr key={x?._id}>
                  <td style={{ width: "20%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[13px] text-gray-900_02">#{x?._id}</td>
                  <td style={{ width: "30%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[13px] text-gray-900_02">{x?.date}</td>
                  <td style={{ width: "15%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[13px] text-gray-900_02">{x?.livraision}</td>
                  <td style={{ width: "20%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[13px] text-gray-900_02">{x?.totalPrice}$</td>
                  <td style={{ width: "15%", height: "35px", borderBottom: "1px solid black" }} className="text-center  text-[13px] text-gray-900_02">
                    <span className="more-details" onClick={() => onOpenModal(x)}>More</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
    <Modal open={open} onClose={onCloseModal} center>
      <h2>Simple centered modal</h2>
    </Modal>
  </div>
        </div>
      </div>
    </div>
  );
};


export default PresorderPage;
