// src/components/SaleOrderForm.js
import { useForm, Controller } from 'react-hook-form';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SaleOrderForm = ({ isOpen, onClose, onSubmit, defaultValues }) => {
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sale Order Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Controller
              name="customer_id"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Customer ID" />}
            />
            <Controller
              name="items[0].sku_id"
              control={control}
              render={({ field }) => <Input {...field} placeholder="SKU ID" />}
            />
            <Controller
              name="items[0].price"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Price" />}
            />
            <Controller
              name="items[0].quantity"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Quantity" />}
            />
            <Controller
              name="invoice_no"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Invoice No" />}
            />
            <Controller
              name="invoice_date"
              control={control}
              render={({ field }) => <DatePicker {...field} selected={field.value} />}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit(handleFormSubmit)}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;

