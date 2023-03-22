import CategoryItem from "../category-item/category-item-component";
import { categories } from "../category-item/categories-list";
import "./directory-component.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl}></CategoryItem>
      ))}
    </div>
  );
};

export default Directory;
