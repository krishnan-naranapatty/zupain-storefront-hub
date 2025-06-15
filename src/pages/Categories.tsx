
import React from 'react';
import Layout from '@/components/Layout';
import CategoriesHeader from '@/components/CategoriesHeader';
import CategoriesFilters from '@/components/CategoriesFilters';
import CategoriesTable from '@/components/CategoriesTable';

const Categories = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <CategoriesHeader />
        <CategoriesFilters />
        <CategoriesTable />
      </div>
    </Layout>
  );
};

export default Categories;
