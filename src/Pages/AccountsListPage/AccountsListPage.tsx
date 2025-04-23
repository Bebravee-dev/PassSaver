import "./AccountsListPage.scss";
import { useState } from "react";

import AccountItems from "../../Components/AccountItem/AccountItems";
import Accounts from "./Accounts.json";

const AccountsListPage: React.FC = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="AccountsListPage">
      <AccountItems />
    </div>
  );
};

export default AccountsListPage;
