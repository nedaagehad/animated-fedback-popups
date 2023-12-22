interface IActionButtonProps {
  placeholder: string;
  type: "success" | "error"
}
const ActionButton = ({ placeholder, type }: IActionButtonProps) => {
  return <button className={`action-button ${type}`}>{placeholder}</button>;
};

export default ActionButton;
