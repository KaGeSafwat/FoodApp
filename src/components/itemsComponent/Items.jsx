import { useFetch } from '../../hooks/useFetch';
import Item from '../itemComponent/Item';
import classes from './Items.module.css';
// config for fetch
const config = {};

export default function Items() {
  // fetch items using custom hook
  const { items, isLoading, error } = useFetch('/Items.json', config, []);

  // default content without items
  let content = <p className={classes.noItems}>No items found</p>;

  // loading content
  if (isLoading) {
    content = <p className={classes.loading}>Loading...</p>;
  }

  // error content
  if (error) {
    content = <p className={classes.error}>{error}</p>;
  }

  // items content
  if (items.length > 0) {
    content = (
      <>
        <h2 className="main-heading">Menu</h2>
        <ul id={classes.items}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </>
    );
  }

  return <>{content}</>;
}
