import { Button, Form, Input, InputNumber, Modal, Select } from 'antd';
import { useContext, useEffect } from 'react';
import './CarForm.css';
import { CarsContext } from '../../context/CarsContext';

function CarForm({ activate = false, onClose, id, brand, model, year, volume, price, color, description, editMode = false }) {
  const { addCar, editCar, language } = useContext(CarsContext);
  const [ form ] = Form.useForm();

  const colors = [
    { en: "Beige", ua: "Бежевий" },
    { en: "Black", ua: "Чорний" },
    { en: "Blue", ua: "Синій" },
    { en: "Brown", ua: "Коричневий" },
    { en: "Green", ua: "Зелений" },
    { en: "Gray", ua: "Сірий" },
    { en: "Orange", ua: "Помаранчевий" },
    { en: "Purple", ua: "Фіолетовий" },
    { en: "Red", ua: "Червоний" },
    { en: "White", ua: "Білий" },
    { en: "Yellow", ua: "Жовтий" }
  ];

  const colorSelected = language === "en" ? color?.en : color?.ua || "";

  const colorOptions = colors.map(c => ({
    value: language === "en" ? c.en : c.ua,
    label: language === "en" ? c.en : c.ua
  })).sort((a, b) => a.label.localeCompare(b.label));

  const handleOk = (values) => {
    if (values.color) {
      values.color = colors.find(c => c.en === values.color.value || c.ua === values.color.value);
    }
    if (!editMode) addCar(values);
    else editCar(id, values);
    form.resetFields();
    if (onClose) onClose();
  };

  const handleCancel = () => {
    if (onClose) onClose();
    form.resetFields();
  };

  useEffect(() => {
    if (!activate) return;
    const currentColor = colorSelected || undefined;
    form.setFieldsValue({
      brand,
      model,
      year,
      volume,
      price,
      description,
      color: currentColor ? { value: currentColor, key: currentColor, label: currentColor } : undefined
    });
  }, [activate, id, brand, model, year, volume, price, description, colorSelected, language, form]);

  return (
    <div>
      <Modal
        title={editMode ? (language === "en" ? "Edit Car" : "Редагувати Авто") : (language === "en" ? "Add Car" : "Додати Авто")}
        footer={null}
        open={activate}
        onCancel={handleCancel}
        maskClosable
        afterClose={() => form.resetFields()}
      >
        <Form
          form={form}
          name="addCar"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleOk}
          autoComplete="off"
        >
          <Form.Item
            label={language === "en" ? "Brand" : "Марка"}
            name="brand"
            rules={[{ required: true, message: 'Please input the car brand!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={language === "en" ? "Model" : "Модель"}
            name="model"
            rules={[{ required: true, message: 'Please input the car model!' }]}
          >
            <Input />
          </Form.Item>

            <Form.Item
            label={language === "en" ? "Year" : "Рік"}
            name="year"
            rules={[{ required: true, message: 'Please input the car year!' }]}
          >
            <InputNumber min={0} max={new Date().getFullYear()} />
          </Form.Item>

          <Form.Item
            label={language === "en" ? "Price" : "Ціна"}
            name="price"
            rules={[{ required: true, message: 'Please input the car price!' }]}
          >
            <InputNumber min={0} suffix="$" />
          </Form.Item>

          <Form.Item
            label={language === "en" ? "Volume" : "Об'єм"}
            name="volume"
            rules={[{ required: true, message: 'Please input the car volume!' }]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label={language === "en" ? "Color" : "Колір"}
            name="color"
            rules={[{ required: true, message: 'Please input the car color!' }]}
          >
            <Select
              style={{ minWidth: '100px' }}
              allowClear
              id="color"
              labelInValue
              placeholder={language === 'en' ? 'Select a color' : 'Оберіть колір'}
              options={colorOptions}
            ></Select>
          </Form.Item>

          <Form.Item
            label={language === "en" ? "Description" : "Опис"}
            name="description"
            rules={[{ required: true, message: 'Please input the car description!' }]}
          >
            <Input />
          </Form.Item>

          <div className='form-buttons'>
            <Form.Item>
              <Button type="default" danger onClick={handleCancel} style={{ marginRight: '10px' }}>
                {language === "en" ? "Cancel" : "Скасувати"}
              </Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" >
                {editMode ? (language === "en" ? "Save" : "Зберегти") : (language === "en" ? "Add" : "Додати")}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default CarForm