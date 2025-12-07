import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '10,000+', label: 'Customers' },
    { icon: Award, value: '50+', label: 'Car Models' },
    { icon: Target, value: '99%', label: 'Satisfaction' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 animate-slide-up">
            {t('about.title')}
          </h1>
          <p className="text-xl text-primary-foreground/80 animate-fade-in">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                {t('about.story')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.story.text')}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-muted">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-orbitron font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-effect">
                      <span className="font-orbitron font-bold text-5xl text-primary-foreground">N</span>
                    </div>
                    <span className="font-orbitron font-bold text-3xl text-foreground tracking-wider">N-WEST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4">{t('about.mission')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4">{t('about.vision')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Coating Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8">
              Blue Coating Technology
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-ice-blue/30 to-accent/10 border border-accent/20">
                <div className="text-4xl mb-4">🔬</div>
                <h4 className="font-semibold mb-2">Advanced Coating</h4>
                <p className="text-sm text-muted-foreground">Multi-layer blue titanium oxide coating technology</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-ice-blue/30 to-accent/10 border border-accent/20">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="font-semibold mb-2">Crystal Clear</h4>
                <p className="text-sm text-muted-foreground">High clarity optical glass for perfect visibility</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-ice-blue/30 to-accent/10 border border-accent/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="font-semibold mb-2">Long Lasting</h4>
                <p className="text-sm text-muted-foreground">Durable coating that won't fade or peel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
