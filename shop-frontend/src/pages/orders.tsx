import TableHOC from "../components/admin/TableHOC"
import { ReactElement,useState } from "react";
import { Link } from "react-router-dom";
import {Column} from "react-table";


type DataType={
  _id:string;
  amount:number;
  quantity:number;
  discount:number;
  status:ReactElement;
  action:ReactElement;
};

const column: Column<DataType>[]=[
  {
    Header:'ID',
    accessor:'_id',
  },
  {
    Header:'Quantity',
    accessor:'quantity',
  },
  {
    Header:'Discount',
    accessor:'discount',
  },
  {
    Header:'Amount',
    accessor:'amount',
  },
  {
    Header:'Status',
    accessor:'status',
  },
  {
    Header:'Action',
    accessor:'action',
  },

];
const Order = () => {
  const [rows]=useState<DataType[]>([
    {
      _id:"kdfkgkdkvrfnk",
      amount:34567,
      quantity:12,
      discount:567,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/kdfkgkdkvrfnk`}>View</Link>,
    },
  ]);

  const Table=TableHOC<DataType>(column,rows,"dashboard-product-box","Orders",rows.length >6)();
  return (
    <div className="container">
      <h1>My ordres</h1>
      {Table}

      
    </div>
  )
}

export default Order