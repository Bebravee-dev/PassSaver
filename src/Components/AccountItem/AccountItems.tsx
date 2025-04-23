import "./AccountItems.scss";

const AccountItem: React.FC = () => {
  return (
    <div className="AccountItems">
      <div className="AccountItems__header">
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default AccountItem;
