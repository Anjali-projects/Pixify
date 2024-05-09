import Item from "./Item";
import { Company, View_website_in , Need_help, Icons } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 justify-center sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-16 px-5 py-4">
      <Item Links={Company} title="Company" />
      <Item Links={View_website_in} title="View Website in" />
      <Item Links={Need_help} title="Need Help" />
      <Item Links={Icons}  title="Connect with us" />
    </div>
  );
};

export default ItemsContainer;