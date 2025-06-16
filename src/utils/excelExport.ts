
interface OrderData {
  id: string;
  customer: string;
  billDate: string;
  status: string;
  paymentMethod: string;
  amount: string;
}

interface ShiprocketOrderData {
  orderId: string;
  awbNumber: string;
  customerName: string;
  orderDate: string;
  status: string;
  courierPartner: string;
  destination: string;
  amount: string;
  weight: string;
}

export const downloadOrdersToExcel = (orders: OrderData[], filename: string = 'orders') => {
  // Create CSV content
  const headers = ['Order ID', 'Customer', 'Date', 'Status', 'Payment Method', 'Amount'];
  const csvContent = [
    headers.join(','),
    ...orders.map(order => [
      order.id,
      `"${order.customer}"`,
      `"${order.billDate}"`,
      order.status,
      order.paymentMethod,
      order.amount.replace('₹', '').replace(',', '')
    ].join(','))
  ].join('\n');

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadShiprocketOrdersToExcel = (orders: ShiprocketOrderData[], filename: string = 'shiprocket_orders') => {
  // Create CSV content
  const headers = ['Order ID', 'AWB Number', 'Customer', 'Date', 'Status', 'Courier', 'Destination', 'Amount', 'Weight'];
  const csvContent = [
    headers.join(','),
    ...orders.map(order => [
      order.orderId,
      order.awbNumber,
      `"${order.customerName}"`,
      `"${order.orderDate}"`,
      order.status,
      order.courierPartner,
      `"${order.destination}"`,
      order.amount.replace('₹', '').replace(',', ''),
      order.weight
    ].join(','))
  ].join('\n');

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
