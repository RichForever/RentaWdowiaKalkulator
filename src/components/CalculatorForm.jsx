import Labels from "../utils/Labels";
import { InputNumber, DatePicker, Radio, Button, ConfigProvider, Form, Divider } from "antd";
import locale from "antd/locale/pl_PL";
import dayjs from "dayjs";

import "dayjs/locale/pl";

dayjs.locale("pl");

const GENDER_OPTIONS = [
  { value: "male", label: Labels.general.male },
  { value: "female", label: Labels.general.female }
];

const SHAREDPROPERTY_OPTIONS = [
  { value: "yes", label: Labels.general.yes },
  { value: "no", label: Labels.general.no }
];

const dateFormat = 'DD-MM-YYYY';

const CalculatorForm = ({ handleSubmit, handleReset, form, className }) => {

  return (
    <>
      <Form form={form} name="main" scrollToFirstError layout="vertical" className={className} onFinish={handleSubmit}>

        <ConfigProvider locale={locale}>
          <Form.Item label={Labels.form.labels.birthDate} name="birthDate"
                     rules={[{ required: true, message: "Pole nie może być puste" }]}>
            <DatePicker id="birthDate" format={dateFormat} style={{width:'100%'}} />
          </Form.Item>
        </ConfigProvider>

        <Form.Item label={Labels.form.labels.gender} name="gender" rules={[{ required: true, message: "Wybierz jedną z opcji" }]}>
          <Radio.Group buttonStyle="solid" name="gender" id="gender" >
            {GENDER_OPTIONS.map((item, itemIdx) => (
              <Radio.Button value={item.value} key={itemIdx} >{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item label={Labels.form.labels.yourPension} name="yourPension"
                   rules={[{ required: true, message: "Pole nie może być puste" }]}>
          <InputNumber id="yourPension" placeholder="1000" size="large" suffix="PLN" min={1} style={{width:'100%'}} />
        </Form.Item>

        <ConfigProvider locale={locale}>
          <Form.Item label={Labels.form.labels.deathDate} name="deathDate"
                     rules={[{ required: true, message: "Pole nie może być puste" }]}>
            <DatePicker id="deathDate" format={dateFormat} style={{width:'100%'}} />
          </Form.Item>
        </ConfigProvider>

        <Form.Item label={Labels.form.labels.spousePension} name="spousePension"
                   rules={[{ required: true, message: "Pole nie może być puste" }]}>
          <InputNumber id="spousePension" placeholder="1000" size="large" suffix="PLN" min={1} style={{width:'100%'}} />
        </Form.Item>

        <Form.Item label={Labels.form.labels.sharedProperty} name="sharedProperty"
                   rules={[{ required: true, message: "Wybierz jedną z opcji" }]}>
          <Radio.Group buttonStyle="solid" name="sharedProperty" id="sharedProperty">
            {SHAREDPROPERTY_OPTIONS.map((item, itemIdx) => (
              <Radio.Button value={item.value} key={itemIdx}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>

        <Divider />

        <Form.Item>
          <div className="flex flex-col gap-2">
            <Button type="primary" size="large" htmlType="submit">{Labels.button.calculate}</Button>
            <Button type="link" size="middle" onClick={() => {
              form.resetFields();
              handleReset();
            }}>
              {Labels.button.reset}
            </Button>
          </div>
        </Form.Item>

      </Form>
    </>
  );
};

export default CalculatorForm;
