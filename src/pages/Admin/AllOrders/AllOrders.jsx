import React from 'react';
import AdminDashboardButton from '../AdminDashboardButton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Shared/Loading';
import Order from './Order';

const AllOrders = () => {
    const { data: orders, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["orders"],
        queryFn: () => {
            return axios.get("https://shop-online-server-side.onrender.com/orders")
        }
    })

    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = orders.data.map((order, index) => <Order index={index} key={order._id} order={order}></Order>)
    }

    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <AdminDashboardButton></AdminDashboardButton>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>With Discount</th>
                            <th>Sub Total</th>
                            <th>Shipping</th>
                            <th>Total</th>
                            <th>Order Date</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;