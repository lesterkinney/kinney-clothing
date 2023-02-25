import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component';
import { CategoryTitle, CategoryContainer } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap, getIndexFromCategory } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  const categoryIndex = getIndexFromCategory(category);

  useEffect(() => {
    async function getProducts() {
      await setProducts(categoriesMap[categoryIndex]?.items);
    }
    getProducts();
  }, [category, categoriesMap, categoryIndex]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
