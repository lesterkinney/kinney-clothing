import { useContext, Fragment } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title].items;
                return <CategoryPreview key={title} products={products} title={categoriesMap[title].title}/>
            })}
        </Fragment>
    );
};

export default CategoriesPreview;