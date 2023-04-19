import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const PurchaseOrder = () => {
    const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const savedData = localStorage.getItem('purchaseOrders');
    if (savedData) {
      setPurchaseOrders(JSON.parse(savedData));
    }
  }, []);

  const updatePurchaseOrders = (newPurchaseOrders) => {
    setPurchaseOrders(newPurchaseOrders);
    localStorage.setItem('purchaseOrders', JSON.stringify(newPurchaseOrders));
  };

  const addPurchaseOrder = (data) => {
    const newPurchaseOrder = {
      id: uuidv4(),
      ...data,
      amount: parseInt(data.amount),
    };
    const newPurchaseOrders = [...purchaseOrders, newPurchaseOrder];
    updatePurchaseOrders(newPurchaseOrders);
    reset({});
  };

  const editPurchaseOrder = (id, data) => {
    const index = purchaseOrders.findIndex((purchaseOrder) => purchaseOrder.id === id);
    const purchaseOrderToEdit = purchaseOrders[index];
    const updatedPurchaseOrders = [...purchaseOrders];
    updatedPurchaseOrders[index] = { ...purchaseOrderToEdit, ...data };
    updatePurchaseOrders(updatedPurchaseOrders);
    setIsEditing(false);
    setEditId(null);
    reset({});
  };

  const deletePurchaseOrder = (id) => {
    const updatedPurchaseOrders = purchaseOrders.filter(
      (purchaseOrder) => purchaseOrder.id !== id
    );
    updatePurchaseOrders(updatedPurchaseOrders);
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditId(id);
    const index = purchaseOrders.findIndex((purchaseOrder) => purchaseOrder.id === id);
    const purchaseOrderToEdit = purchaseOrders[index];
    reset(purchaseOrderToEdit);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    reset({});
  };

  const onSubmit = (data) => {
    if (isEditing) {
      editPurchaseOrder(editId, data);
    } else {
      addPurchaseOrder(data);
    }
  };
    return (
        <div className="p-4">
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                    <label className="form-label">Date:</label>
                    <input type="date" {...register('date', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Name:</label>
                    <input type="text" {...register('name', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Company Name:</label>
                    <input type="text" {...register('companyName', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">PO No:</label>
                    <input type="text" {...register('poNo', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Amount:</label>
                    <input type="number" {...register('amount', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Est No:</label>
                    <input type="number" {...register('estNo', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Sales Executive:</label>
                    <input type="text" {...register('salesExecutive', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
    <label className="form-label">Work Status:</label>
    <select {...register('workStatus', { required: true })} className="form-select">
        <option value="Done">Done</option>
        <option value="In Progress">In Progress</option>
        <option value="Pending">Pending</option>
        <option value="To Do">To Do</option>
    </select>
</div>

                <div className="col-md-4">
                    <label className="form-label">Daily Remark Date Wise:</label>
                    <input type="text" {...register('dailyRemarkDateWise')} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Last Update:</label>
                    <input type="date" {...register('lastUpdate', { required: true })} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Document Status:</label>
                    <select {...register('documentStatus', { required: true })} className="form-control">
                        <option value="" disabled>Select Document Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Billed Status:</label>
                    <select {...register('billedStatus', { required: true })} className="form-control">
                        <option value="" disabled>Select status</option>
                        <option value="billed">Billed</option>
                        <option value="unbilled">Unbilled</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Billing Amount:</label>
                    <input type="number" {...register('billingAmount')} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Area:</label>
                    <input type="text" {...register('area')} className="form-control" />
                </div>

                <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update Purchase Order' : 'Add Purchase Order'}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
              Cancel
            </button>
          )}
        </div>
            </form>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>PO No</th>
                        <th>Amount</th>
                        <th>Est No</th>
                        <th>Sales Executive</th>
                        <th>Work Status</th>
                        <th>Daily Remark Date Wise</th>
                        <th>Last Update</th>
                        <th>Document Status</th>
                        <th>Billed Status</th>
                        <th>Billing Amount</th>
                        <th>Area</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {purchaseOrders.map((purchaseOrder, index) => (
                        <tr key={index}>
                            <td>{purchaseOrder.date}</td>
                            <td>{purchaseOrder.name}</td>
                            <td>{purchaseOrder.companyName}</td>
                            <td>{purchaseOrder.poNo}</td>
                            <td>{purchaseOrder.amount}</td>
                            <td>{purchaseOrder.estNo}</td>
                            <td>{purchaseOrder.salesExecutive}</td>
                            <td>{purchaseOrder.workStatus}</td>
                            <td>{purchaseOrder.dailyRemarkDateWise}</td>
                            <td>{purchaseOrder.lastUpdate}</td>
                            <td>{purchaseOrder.documentStatus}</td>
                            <td>{purchaseOrder.billedStatus}</td>
                            <td>{purchaseOrder.billingAmount}</td>
                            <td>{purchaseOrder.area}</td>
                            <td>
                                <button className='btn btn-warning me-2' onClick={() => {handleEdit(purchaseOrder.id)}}>Edit</button>
                                <button className='btn btn-danger' onClick={() => deletePurchaseOrder(purchaseOrder.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaseOrder;

