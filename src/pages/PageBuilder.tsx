
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageBuilderTemplates from '@/components/page-builder/PageBuilderTemplates';
import PageBuilderGlobalTemplates from '@/components/page-builder/PageBuilderGlobalTemplates';
import PageBuilderGlobalStyle from '@/components/page-builder/PageBuilderGlobalStyle';
import PageBuilderLandingPage from '@/components/page-builder/PageBuilderLandingPage';
import PageBuilderAdditionalPages from '@/components/page-builder/PageBuilderAdditionalPages';
import PageBuilderMenu from '@/components/page-builder/PageBuilderMenu';
import PageBuilderAppearance from '@/components/page-builder/PageBuilderAppearance';
import PageBuilderThemeBuilder from '@/components/page-builder/PageBuilderThemeBuilder';

const PageBuilder: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/page-builder/templates" replace />} />
        <Route path="/templates" element={<PageBuilderTemplates />} />
        <Route path="/global-templates" element={<PageBuilderGlobalTemplates />} />
        <Route path="/global-style" element={<PageBuilderGlobalStyle />} />
        <Route path="/landing-page" element={<PageBuilderLandingPage />} />
        <Route path="/additional-pages" element={<PageBuilderAdditionalPages />} />
        <Route path="/menu" element={<PageBuilderMenu />} />
        <Route path="/appearance" element={<PageBuilderAppearance />} />
        <Route path="/theme-builder" element={<PageBuilderThemeBuilder />} />
      </Routes>
    </Layout>
  );
};

export default PageBuilder;
