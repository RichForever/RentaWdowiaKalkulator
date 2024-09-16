import React, { useEffect, useRef, useState } from "react";
import { Form, message } from "antd";
import CalculatorForm from "./CalculatorForm";
import FormResults from "./FormResults";
import Labels from "../utils/Labels";

const Calculator = ({ className }) => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [results, setResults] = useState([]);

  // Create the form instance here
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const showErrorMessage = () => {
    messageApi.error("Formularz zawiera błędy. Popraw je i spróbuj ponownie.");
  };

  const resultsRef = useRef(null);
  const calculatorRef = useRef(null);

  const MAX_PENSION = 5000;

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const calculateNet = (gross) => {
    return ((gross * 100 - gross * 0.1775 * 100 + 46.335 * 100) / 100).toFixed(
      2,
    );
  };

  const calculateGross = (yourPensionGross, percentage, spousePensionGross) => {
    return (yourPensionGross + percentage * spousePensionGross).toFixed(2);
  };

  const handleSubmit = (e) => {
    const {
      deathDate,
      birthDate,
      gender,
      sharedProperty,
      yourPension,
      spousePension,
    } = e;

    const birth = new Date(birthDate);
    const death = new Date(deathDate);
    const age = calculateAge(birthDate);

    // Custom Validation
    const errors = [];

    if (death <= birth) {
      errors.push({ name: "deathDate", errors: [Labels.error.datesMismatch] });
    }

    if ((gender === "male" && age < 60) || (gender === "female" && age < 55)) {
      errors.push({ name: "birthDate", errors: [Labels.error.genderAge] });
    }

    if (sharedProperty === "no") {
      errors.push({
        name: "sharedProperty",
        errors: [Labels.error.sharedProperty],
      });
    }

    if (errors.length > 0) {
      // Use the form instance passed as a prop to set fields with errors
      form.setFields(errors);
      showErrorMessage();
      return;
    }

    const yourPensionGross = parseFloat(yourPension) || 0;
    const spousePensionGross = parseFloat(spousePension) || 0;

    const percentage15 = 0.15;
    let variant15Gross = calculateGross(
      yourPensionGross,
      percentage15,
      spousePensionGross,
    );
    if (variant15Gross > MAX_PENSION) {
      variant15Gross = MAX_PENSION;
    }
    const variant15Net = calculateNet(variant15Gross);

    const percentage25 = 0.25;
    let variant25Gross = calculateGross(
      yourPensionGross,
      percentage25,
      spousePensionGross,
    );
    if (variant25Gross > MAX_PENSION) {
      variant25Gross = MAX_PENSION;
    }
    const variant25Net = calculateNet(variant25Gross);

    setResults([
      {
        variantTypeValue: 15,
        variantLabel: Labels.result.firstPercentageVariant,
        variantPeriod: Labels.form.helpers.firstPartDates,
        gross: variant15Gross,
        net: variant15Net,
      },
      {
        variantTypeValue: 25,
        variantLabel: Labels.result.secondPercentageVariant,
        variantPeriod: Labels.form.helpers.secondPartDates,
        gross: variant25Gross,
        net: variant25Net,
      },
    ]);

    setIsCalculated(true);
  };

  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCalculated, results]);

  const handleReset = () => {
    setIsCalculated(false);
    setResults([]);
  };

  return (
    <div ref={calculatorRef} className="max-w-3xl">
      {contextHolder}
      <CalculatorForm
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        form={form}
      />
      {isCalculated && (
        <div ref={resultsRef}>
          <FormResults
            isCalculated={isCalculated}
            results={results}
            scrollToCalculatorRef={calculatorRef}
          />
        </div>
      )}
    </div>
  );
};

export default Calculator;
