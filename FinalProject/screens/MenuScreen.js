import Menu from '../components/Menu';
import { MenuData } from '../data/MenuData';

function MenuScreen() {
  const type = "Crazy Mason";
  const displayedItems = MenuData.filter((MenuItem) => {
    return MenuItem.type === type;
  });
  return (
    <Menu items={displayedItems} />
  );
}

export default MenuScreen;