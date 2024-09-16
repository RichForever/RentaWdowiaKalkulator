import { Collapse } from "antd";

const BlockFaq = ({faqSection}) => {
  const items = faqSection.map((item, itemIdx) => (
    {
      key: itemIdx,
      label: item.title,
      children: item.text
    }
  ))
    return (
      <div className="max-w-3xl">
        <Collapse accordion items={items} className="w-full" />
      </div>
    );
};

export default BlockFaq;
