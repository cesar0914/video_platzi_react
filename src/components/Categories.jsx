import React, { Children } from 'react';

const Categories = ({children}) =>(
    <div className = 'categories'>
        <h3 className="categories__title">Mi lista</h3>
        {Children}
    </div>    
);

export default Categories;