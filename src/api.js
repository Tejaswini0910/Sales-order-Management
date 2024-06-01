// src/api.js
export const fetchSaleOrders = async (status) => {
  const saleOrders = [
    { id: 1, customer_id: 11908, invoice_no: 'Invoice-123', invoice_date: '2024-05-07', status: 'active' },
    { id: 2, customer_id: 11909, invoice_no: 'Invoice-124', invoice_date: '2024-05-08', status: 'completed' },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(saleOrders.filter(order => order.status === status));
    }, 500);
  });
};

export const updateSaleOrder = async (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order);
    }, 500);
  });
};

