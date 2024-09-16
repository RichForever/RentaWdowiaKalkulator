import Labels from "../utils/Labels";
import { Button, Card, List } from "antd";

import './FormResults.css'

const FormResults = ({ results, isCalculated, scrollToCalculatorRef }) => {

  const handleScrollToTop = () => {
    if (isCalculated && scrollToCalculatorRef.current) {
      scrollToCalculatorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const result = [
    {
      title: results[0].variantLabel,
      data: [
        {
          label: "Wartość",
          value: results[0].variantTypeValue + "%"
        },
        {
          label: "Okres obowiązywania",
          value: results[0].variantPeriod
        },
        {
          label: "Kwota brutto",
          value: results[0].gross + " PLN"
        },
        {
          label: "Kwota netto",
          value: results[0].net + " PLN"
        }
      ]
    },
    {
      title: results[1].variantLabel,
      data: [
        {
          label: "Wartość",
          value: results[1].variantTypeValue + "%"
        },
        {
          label: "Okres obowiązywania",
          value: results[1].variantPeriod
        },
        {
          label: "Kwota brutto",
          value: results[1].gross + " PLN"
        },
        {
          label: "Kwota netto",
          value: results[1].net + " PLN"
        }
      ]
    }
  ];

  console.log(results);

  return (
    <div className="min-h-[800px] flex justify-center flex-col">
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={result}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <div className="space-y-2">
                {item.data.map((item, itemIdx) => (
                  <List.Item.Meta
                    key={itemIdx}
                    title={item.label}
                    description={item.value}
                  />
                ))}
              </div>
            </Card>
          </List.Item>
        )}
      />
      <div className="flex justify-center">
        <Button
          size="large"
          type="primary"
          onClick={handleScrollToTop}
          disabled={!isCalculated}
          className="w-full"
        >
          {Labels.result.goBackToCalc}
        </Button>
      </div>
    </div>
  );
};

export default FormResults;
