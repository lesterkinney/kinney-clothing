import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
    categoryIndexMap: [],
});

const getCategoryIndex = (categories, category) => {
    return categories[category];
}

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [categoryIndexMap, setCategoryIndexMap] = useState({});

    useEffect(() => {
        async function getCategoriesMap() {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    useEffect(() => {
        const categoryIndexes = Object.keys(categoriesMap).map((key) => Number(key));
        if (categoryIndexes.length > 0) {
            const map = {};
            categoryIndexes.forEach((value) => {
                const title = categoriesMap[value].title;
                map[title.toLowerCase()] = value;
            });
            setCategoryIndexMap(map);
        }
    }, [categoriesMap]);   

    const getIndexFromCategory = (category) => {
        return getCategoryIndex(categoryIndexMap, category);
    }

    const value = { categoriesMap, getIndexFromCategory };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}