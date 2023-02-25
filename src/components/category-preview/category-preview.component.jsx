import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  NavLink,
  Preview,
  Title,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <NavLink to={title.toLowerCase()}>
          <Title className='title'>{title.toUpperCase()}</Title>
        </NavLink>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
