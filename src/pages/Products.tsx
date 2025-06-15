
import React from 'react';
import Layout from '@/components/Layout';
import ProductsHeader from '@/components/ProductsHeader';
import ProductsFilters from '@/components/ProductsFilters';
import ProductsTable from '@/components/ProductsTable';

const Products = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <ProductsHeader />
        <ProductsFilters />
        <ProductsTable />
      </div>
    </Layout>
  );
};

export default Products;
