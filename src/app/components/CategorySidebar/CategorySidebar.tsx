'use client';

import React from 'react';
import './CategorySidebar.css';

interface CategorySidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySidebar = ({ categories, activeCategory, onCategoryChange }: CategorySidebarProps) => {
  return (
    <div className="category-sidebar">
      <div className="category-sidebar__header">
        <h2>Popular By Category</h2>
      </div>
      
      <div className="category-sidebar__list">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`category-item ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="category-item__text">{category}</span>
            <div className="category-item__glow"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
