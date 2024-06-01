
// src/components/SaleOrderList.js
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSaleOrders, updateSaleOrder } from '../api';
import { Table, Tbody, Td, Th, Thead, Tr, IconButton, Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderList = ({ status }) => {
  const queryClient = useQueryClient();
  const { data: orders, isLoading } = useQuery(['saleOrders', status], () => fetchSaleOrders(status));
  const updateMutation = useMutation(updateSaleOrder, {
    onSuccess: () => queryClient.invalidateQueries(['saleOrders', status]),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsOpen(true);
  };

  const handleSubmit = (order) => {
    updateMutation.mutate(order);
    setIsOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Sale Order</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer ID</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer_id}</Td>
              <Td>{order.invoice_no}</Td>
              <Td>{order.invoice_date}</Td>
              <Td>
                <IconButton icon={<EditIcon />} onClick={() => handleEdit(order)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <SaleOrderForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        defaultValues={selectedOrder || { customer_id: '', items: [{ sku_id: '', price: '', quantity: '' }], invoice_no: '', invoice_date: new Date() }}
      />
    </div>
  );
};

export default SaleOrderList;
