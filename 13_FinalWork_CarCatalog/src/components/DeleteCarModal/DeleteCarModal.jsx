import { useContext } from 'react'
import { CarsContext } from '../../context/CarsContext'
import { Modal, Button } from 'antd'
import './DeleteCarModal.css'

function DeleteCarModal({ activate = false, onClose, id }) {
  const { removeCar, language } = useContext(CarsContext);

  const handleOk = () => {
    removeCar(id);
    if (onClose) onClose();
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };
  
  return (
    <Modal
        title={language === "en" ? "Delete Car" : "Видалити Авто"}
        footer={null}
        open={activate}
        onCancel={handleCancel}
        maskClosable
      >
        {language === "en" ?
          <p>Are you sure you want to delete this car?</p> : 
          <p>Ви впевнені, що хочете видалити це авто?</p>}
        <div className="form-buttons">
          <Button type="default" onClick={handleCancel} style={{ marginRight: '10px' }}>
            {language === "en" ? "Cancel" : "Скасувати"}
          </Button>
          <Button type="primary" danger onClick={handleOk}>
            {language === "en" ? "Delete" : "Видалити"}
          </Button>
        </div>
      </Modal>
  )
}

export default DeleteCarModal