import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle } from 'lucide-react';

interface Product {
  id: string;
  brand: string;
  model: string;
  year: string;
  image: string;
  available: boolean;
}

const products: Product[] = [
  { id: '1', brand: 'HONDA', model: 'Civic', year: '2020-2024', image: '', available: true },
  { id: '2', brand: 'HONDA', model: 'Accord', year: '2018-2024', image: '', available: true },
  { id: '3', brand: 'HONDA', model: 'CR-V', year: '2019-2024', image: '', available: true },
  { id: '4', brand: 'HONDA', model: 'City', year: '2020-2024', image: '', available: false },
  { id: '5', brand: 'TOYOTA', model: 'Camry', year: '2018-2024', image: '', available: true },
  { id: '6', brand: 'TOYOTA', model: 'Corolla', year: '2019-2024', image: '', available: true },
  { id: '7', brand: 'TOYOTA', model: 'Yaris', year: '2020-2024', image: '', available: true },
  { id: '8', brand: 'TOYOTA', model: 'Fortuner', year: '2016-2024', image: '', available: true },
  { id: '9', brand: 'TESLA', model: 'Model 3', year: '2019-2024', image: '', available: true },
  { id: '10', brand: 'TESLA', model: 'Model Y', year: '2020-2024', image: '', available: false },
  { id: '11', brand: 'SUZUKI', model: 'Swift', year: '2018-2024', image: '', available: true },
  { id: '12', brand: 'SUZUKI', model: 'Ciaz', year: '2017-2024', image: '', available: true },
  { id: '13', brand: 'NISSAN', model: 'Almera', year: '2020-2024', image: '', available: true },
  { id: '14', brand: 'NISSAN', model: 'Kicks', year: '2021-2024', image: '', available: true },
  { id: '15', brand: 'MAZDA', model: 'Mazda 2', year: '2019-2024', image: '', available: true },
  { id: '16', brand: 'MAZDA', model: 'Mazda 3', year: '2019-2024', image: '', available: true },
  { id: '17', brand: 'MAZDA', model: 'CX-5', year: '2017-2024', image: '', available: false },
  { id: '18', brand: 'OTHER', model: 'Other Models', year: 'Various', image: '', available: true },
];

const brands = ['ALL', 'HONDA', 'TOYOTA', 'TESLA', 'SUZUKI', 'NISSAN', 'MAZDA', 'OTHER'];

const Products = () => {
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState('ALL');

  const filteredProducts = selectedBrand === 'ALL'
    ? products
    : products.filter(p => p.brand === selectedBrand);

  const brandKeyMap: Record<string, string> = {
    'ALL': 'products.viewall',
    'HONDA': 'products.honda',
    'TOYOTA': 'products.toyota',
    'TESLA': 'products.tesla',
    'SUZUKI': 'products.suzuki',
    'NISSAN': 'products.nissan',
    'MAZDA': 'products.mazda',
    'OTHER': 'products.other',
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 animate-slide-up">
            {t('products.title')}
          </h1>
          <p className="text-xl text-primary-foreground/80 animate-fade-in">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? 'default' : 'outline'}
                onClick={() => setSelectedBrand(brand)}
                className={selectedBrand === brand ? 'bg-primary text-primary-foreground' : ''}
              >
                {brand === 'ALL' ? t('products.viewall') : t(brandKeyMap[brand])}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Product Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-metallic/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-50 transition-opacity" />
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-orbitron font-bold text-2xl text-primary-foreground">
                      {product.brand.slice(0, 2)}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <Badge
                    className={`absolute top-3 right-3 ${
                      product.available
                        ? 'bg-green-500/90 text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {product.available ? t('products.available') : t('products.contact')}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-accent font-medium">{product.brand}</p>
                      <h3 className="text-lg font-orbitron font-semibold">{product.model}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{product.year}</p>
                  
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('products.contact')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
