import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input } from "@chakra-ui/react";

const Custom = (props) => {
  return (
    <Tabs size="md" variant="enclosed">
      <TabList>
        <Tab>Firma Adı</Tab>
        <Tab>Adres</Tab>
        <Tab>Telefon</Tab>

      </TabList>
      <TabPanels>
        <TabPanel>
         <Input {...props} placeholder="Firma adını girin" value={props.firm} onChange={text=>props.onChangeFirm(text)} />
        </TabPanel>
        <TabPanel>
        <Input {...props} placeholder="Adresi girin" value={props.addresss} onChange={text=>props.onChangeAddress(text)} />
        </TabPanel>
        <TabPanel>
        <Input {...props} placeholder="Telefon numarasını girin" value={props.phone} onChange={text=>props.onChangePhone(text)} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Custom;
