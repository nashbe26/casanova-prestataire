import React, { useEffect, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useGetUser, useGetById } from "../../utils/functions";
import { useRecoilState } from "recoil";
import { User } from "../../utils/recoil/atoms";
import { ReactTable, Text } from "components";
import { useGet } from "utils/functions";
import { format } from "date-fns";
import md5 from "md5";

const PresorderPage = () => {
  const GetUser = useGetUser();
  const get = useGet();
  const getById = useGetById();
  const [user] = useRecoilState(User);
  const [orders, setOrders] = useState([]);

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

  const table2Columns = React.useMemo(() => {
    const orders = createColumnHelper();
    return [
      orders.accessor("_id", {
        cell: (info) => (
          <Text
            className="pb-4 pt-8 text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            #{shortenOrderId(info?.getValue())}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[132px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Order
          </Text>
        ),
      }),
      orders.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[33px] text-gray-600_03 text-xs"
            size="txtInterRegular12"
          >
            {format(new Date(info?.getValue()), "MMM dd, yyyy HH:mm a")}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[232px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Date / Time
          </Text>
        ),
      }),
      orders.accessor("customerName", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[33px] text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            {info?.getValue()?.phone.primary}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[182px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Customer
          </Text>
        ),
      }),
      orders.accessor("livraision", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[33px] text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[182px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            livraision
          </Text>
        ),
      }),

      orders.accessor("totalPrice", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[33px] text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            {info?.getValue()}$
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[182px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Total Price
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <div className="flex m-auto w-full">
      <div className="absolute top-0 left-[15%] flex m-auto w-full justify-center">
        <div className="bg-white-A700   border-solid flex flex-col items-start justify-end my-auto p-7 sm:px-5 z-[1]">
          <Text
            className="text-2xl md:text-[22px] sm:text-xl text-gray-900_02"
            style={{ textAlign: "center", justifyContent: "center" }}
            size="txtInterSemiBold24"
          >
            Orders
          </Text>

          <ReactTable
            columns={table2Columns}
            data={orders}
            rowClass=""
            headerClass=""
          />
        </div>
      </div>
    </div>
  );
};

export default PresorderPage;
