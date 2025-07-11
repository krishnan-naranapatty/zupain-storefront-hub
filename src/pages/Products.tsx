
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
      <div className="space-y-4">
        <ProductsHeader />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Left section - Product filters and data */}
          <div className="xl:col-span-2 space-y-4">
            <ProductsFilters viewMode={viewMode} onViewModeChange={handleViewModeChange} />
            {viewMode === 'list' ? <ProductsTable /> : <ProductsGrid />}
          </div>
          
          {/* Right section - Top selling products stats sidebar */}
          <div className="xl:col-span-1">
            <TopSellingProductsStats />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
