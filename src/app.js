// src/App.js
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle';
import ActiveSaleOrders from './pages/ActiveSaleOrders';
import CompletedSaleOrders from './pages/CompletedSaleOrders';
import Login from './pages/Login';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const App = () => {
  const { user } = useAuth();

  return (
    <Box p={4}>
      <ThemeToggle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <OrderTabs /> : <Navigate to="/login" />} />
      </Routes>
    </Box>
  );
};

const OrderTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Active Sale Orders</Tab>
      <Tab>Completed Sale Orders</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <ActiveSaleOrders />
      </TabPanel>
      <TabPanel>
        <CompletedSaleOrders />
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default App;

