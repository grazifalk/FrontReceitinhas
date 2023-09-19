import { Button } from "react-bootstrap";
import { ButtonStyle } from "./style";

export const ButtonDefault = ({
  size,
  bgColor,
  textColor,
  action,
  children,
  disabled,
}) => {
  return (
    <ButtonStyle bgColor={bgColor} textColor={textColor} size={size}>
      <Button
        className="button"
        variant={bgColor}
        style={{ maxWidth: "100%" }}
        onClick={action}
        disabled={disabled}
      >
        {children}
      </Button>
    </ButtonStyle>
  );
};
