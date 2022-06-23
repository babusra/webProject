import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  Button,
} from "@chakra-ui/react";

function Row(props) {
  // const [debt, setDebt] = useState(0);
  // const [credit, setCredit] = useState(0);

  // useEffect(()=>{
  // },[credit,debt])

  // const [debtBalance, setDebtBalance] = useState(0);
  // const [creditBalance, setCreditBalance] = useState(0);
  // const [totalBalance,setTotalBalance]= useState(0)

  // const [rowCount, setRowCount] = useState(1);

  // console.log("debtBalance", debtBalance);
  // console.log("creditBalance", creditBalance);
  // console.log("toplam", parseInt(debtBalance) + parseInt(creditBalance));
  // var temp= parseInt(debtBalance) + parseInt(creditBalance)
  // console.log(totalBalance)
  
  console.log(props)

  return (
    <Tbody>
      <Tr>
        <Td>
          <Input size="md"></Input>
        </Td>
        <Td>
          <Input size="md"></Input>
        </Td>
        <Td>
          <Input
            //value={props?.setDebtBalance()}
            size="md"
            onChange={(e)=>{props?.setDebtBalance(e.target.value)}}
          ></Input>
        </Td>
        <Td>
          <Input
            // value={creditBalancee}
            size="md"
            onChange={(e) =>{ props?.setCreditBalance(e.target.value)}}
          ></Input>
        </Td>
        <Td>
          <Input value={props?.total>0? props?.total:null} size="md" disabled></Input>
        </Td>
        <Td>
          <Input value={props?.total<0?(props?.total*(-1)):null} size="md" disabled></Input>
        </Td>
      </Tr>
    </Tbody>
  );
}

export default Row;
