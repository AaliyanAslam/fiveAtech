"use client"

import { motion } from 'framer-motion';
import { Code, ShoppingCart, Smartphone, Monitor, Database, Dumbbell, WholeWord as Wordpress, Store } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Wordpress,
    title: 'WordPress Development',
    description: 'Custom WordPress websites, themes, and plugins tailored to your specific business requirements.',
    features: ['Custom Theme Development', 'Plugin Development', 'WordPress Migration', 'Performance Optimization', 'Security Implementation', 'Maintenance & Support'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS3', 'HTML5']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Complete online store solutions with secure payment gateways, inventory management, and user-friendly interfaces.',
    features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Multi-vendor Support', 'Mobile Responsive Design'],
    technologies: ['WooCommerce', 'Shopify', 'Magento', 'PayPal', 'Stripe', 'React']
  },
  {
    icon: Store,
    title: 'Shopify Development',
    description: 'Professional Shopify stores with custom themes, app integrations, and optimization for maximum conversions.',
    features: ['Custom Shopify Themes', 'App Development', 'Store Migration', 'Performance Optimization', 'SEO Implementation', 'Third-party Integrations'],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Shopify Plus', 'GraphQL']
  },
  {
    icon: Database,
    title: 'Inventory Management System',
    description: 'Comprehensive inventory management solutions for both online and offline businesses with real-time tracking.',
    features: ['Real-time Tracking', 'Barcode Integration', 'Multi-location Support', 'Automated Alerts', 'Reporting & Analytics'],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    icon: Dumbbell,
    title: 'Gym Management System',
    description: 'Complete fitness center management solution with member tracking, billing, and workout management.',
    features: ['Member Management', 'Billing & Payments', 'Class Scheduling', 'Equipment Tracking', 'Progress Monitoring', 'Mobile App Integration'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment APIs', 'Mobile Apps']
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Modern, responsive websites built with the latest technologies and optimized for performance and SEO.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Loading Speed', 'Cross-browser Compatibility', 'Content Management', 'Analytics Integration'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel']
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive user experiences.',
    features: ['Native iOS & Android', 'Cross-platform Solutions', 'UI/UX Design', 'API Integration', 'Push Notifications', 'App Store Optimization'],
    technologies: ['React Native', 'Firebase', 'App Store APIs']
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed to meet your unique business requirements and workflows.',
    features: ['Requirements Analysis', 'Custom Architecture', 'Database Design', 'API Development', 'Testing & QA', 'Deployment & Maintenance'],
    technologies: ['PHP', 'AWS', 'MySQL', 'JavaScript','Node.js', 'Laravel']
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive technology solutions designed to transform your business and 
              drive growth in the digital landscape. We offer end-to-end development services 
              with expertise across multiple platforms and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border border-border">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your requirements and create a detailed project roadmap.'
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Creating wireframes and prototypes to visualize the final product.'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building your solution with regular testing and quality assurance.'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'Deploying your project and providing ongoing maintenance support.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center h-full border border-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {process.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}