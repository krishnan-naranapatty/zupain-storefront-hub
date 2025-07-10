
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ProductsHeader from '@/components/ProductsHeader';
import ProductsFilters from '@/components/ProductsFilters';
import ProductsTable from '@/components/ProductsTable';
import ProductsGrid from '@/components/ProductsGrid';
import TopSellingProductsStats from '@/components/TopSellingProductsStats';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <ProductsHeader />
        <TopSellingProductsStats />
        <ProductsFilters viewMode={viewMode} onViewModeChange={handleViewModeChange} />
        {viewMode === 'list' ? <ProductsTable /> : <ProductsGrid />}
      </div>
    </Layout>
  );
};

export default Products;
