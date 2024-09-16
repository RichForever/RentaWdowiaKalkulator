import { Link } from "react-router-dom";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;
const BlockSectionHeader = ({ className='', title, tagline, buttons }) => {
  return (
    <div className={`max-w-3xl space-y-8 ${className}`}>
      <div className="text-center">
        <Title style={{ marginBottom: ".75rem" }}>{title}</Title>
        <Text>{tagline}</Text>
      </div>
      {buttons.length > 0 && (
        <div className={`${className} flex gap-2 justify-center items-center`}>
          {buttons.map(button => (
            <Link to={button.href} key={button.id}>
              <Button
                type={button.color}
                size="large"
              >
                {button.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlockSectionHeader;
