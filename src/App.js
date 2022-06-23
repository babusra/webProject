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
import Row from "./components/Row";
import Custom from "./components/Custom";

function App() {
  // const [debtBalance, setDebtBalance] = useState();
  // const [creditBalance, setCreditBalance] = useState(0);
  const [rowCount, setRowCount] = useState(1);

  // useEffect(() => {console.log(debtBalance,creditBalance)}, [debtBalance,creditBalance]);
  // const [inputBalance,setInputBalance] = useState(debtBalance+creditBalance)

  const [debtBalance, setDebtBalance] = useState(0);
  const [creditBalance, setCreditBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  var temp = parseInt(debtBalance) + parseInt(creditBalance);
  var totalDebt = debtBalance;
  //const [debtArray, setDebtArray] = useState([debtBalance]);


  useEffect(() => {
    parseInt(totalBalance);
  }, [rowCount]);

  return (
    <>
      <ChakraProvider>
        <Custom/>
        <Box p={4}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Tarih</Th>
                <Th>Açıklama</Th>
                <Th>Borç</Th>
                <Th>Alacak</Th>
                <Th>Borç Bakiye</Th>
                <Th>Alacak Bakiye</Th>
              </Tr>
            </Thead>
            {[...Array(rowCount)].map((e, i) => (
              <Row
                //={onChange}
                debtBalancee={debtBalance +` TL`}
                creditBalancee={creditBalance +` TL`}
                setDebtBalance={setDebtBalance}
                setCreditBalance={setCreditBalance}
              />
            ))}
          </Table>
          <Button
            onClick={() => {
              setRowCount(rowCount + 1);
              console.log(rowCount);
            }}
          >
            {" "}
            + Yeni İşlem{" "}
          </Button>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
