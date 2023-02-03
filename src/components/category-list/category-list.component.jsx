import './category-list.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryList = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map(({ title, id, imageUrl }) => {
                return (
                    <CategoryItem key={id} title={title} imageUrl={imageUrl} />
                )
            })}
  
        </div>
    )
}

export default CategoryList;