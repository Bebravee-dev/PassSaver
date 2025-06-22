import "./AccountItems.scss";

const AccountItem: React.FC = () => {
  return (
    <div className="AccountItems">
      <div className="AccountItems__header">
        <input type="text" placeholder="Поиск" />
      </div>

      <div className="AccountItems__items">123</div>

      <div className="AccountItems__footer">
        <button className="AccountItems__footer-button">
          Добавить аккаунт
        </button>
      </div>
    </div>
  );
};

export default AccountItem;
