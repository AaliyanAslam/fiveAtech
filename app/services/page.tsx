"use client"

import { motion } from 'framer-motion';
import { Code, ShoppingCart, Smartphone, Monitor, Database, Dumbbell, WholeWord as Wordpress, Store, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Wordpress,
    title: 'WordPress Development',
    description: 'Custom WordPress websites, themes, and plugins tailored to your specific business requirements with modern design and functionality.',
    features: ['Custom Theme Development', 'Plugin Development', 'WordPress Migration', 'Performance Optimization', 'Security Implementation', 'Maintenance & Support'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS3', 'HTML5'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Complete online store solutions with secure payment gateways, inventory management, and conversion-optimized user interfaces.',
    features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Multi-vendor Support', 'Mobile Responsive Design'],
    technologies: ['WooCommerce', 'Shopify', 'Magento', 'PayPal', 'Stripe', 'React'],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50'
  },
  {
    icon: Store,
    title: 'Shopify Development',
    description: 'Professional Shopify stores with custom themes, app integrations, and optimization for maximum conversions and sales.',
    features: ['Custom Shopify Themes', 'App Development', 'Store Migration', 'Performance Optimization', 'SEO Implementation', 'Third-party Integrations'],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Shopify Plus', 'GraphQL'],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50'
  },
  {
    icon: Database,
    title: 'Inventory Management System',
    description: 'Comprehensive inventory management solutions for both online and offline businesses with real-time tracking and analytics.',
    features: ['Real-time Tracking', 'Barcode Integration', 'Multi-location Support', 'Automated Alerts', 'Reporting & Analytics', 'Mobile Access'],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50'
  },
  {
    icon: Dumbbell,
    title: 'Gym Management System',
    description: 'Complete fitness center management solution with member tracking, billing, workout management, and engagement features.',
    features: ['Member Management', 'Billing & Payments', 'Class Scheduling', 'Equipment Tracking', 'Progress Monitoring', 'Mobile App Integration'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment APIs', 'Mobile Apps'],
    gradient: 'from-teal-500 to-blue-500',
    bgGradient: 'from-teal-50 to-blue-50 dark:from-teal-950/50 dark:to-blue-950/50'
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and optimized for performance, SEO, and user experience.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Loading Speed', 'Cross-browser Compatibility', 'Content Management', 'Analytics Integration'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel'],
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive user experiences and powerful functionality.',
    features: ['Native iOS & Android', 'Cross-platform Solutions', 'UI/UX Design', 'API Integration', 'Push Notifications', 'App Store Optimization'],
    technologies: ['React Native', 'Firebase', 'App Store APIs', 'Swift', 'Kotlin'],
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed to meet your unique business requirements, workflows, and operational needs.',
    features: ['Requirements Analysis', 'Custom Architecture', 'Database Design', 'API Development', 'Testing & QA', 'Deployment & Maintenance'],
    technologies: ['PHP', 'AWS', 'MySQL', 'JavaScript','Node.js', 'Laravel'],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, understand your goals, and create a comprehensive project roadmap with clear milestones.',
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Creating detailed wireframes, mockups, and interactive prototypes to visualize the final product before development.',
    icon: '🎨'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Building your solution using best practices with continuous testing, code reviews, and quality assurance throughout.',
    icon: '⚡'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deploying your project to production and providing comprehensive ongoing maintenance and technical support.',
    icon: '🚀'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Premium Technology Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive technology solutions designed to transform your business and 
              drive sustainable growth in the digital landscape. We combine innovation with expertise 
              to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className={`h-full card-hover border-0 shadow-lg bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: idx * 0.1 }}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs font-medium bg-white/70 dark:bg-gray-700/70 hover:bg-white dark:hover:bg-gray-600 transition-colors duration-300">
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
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Development <span className="text-yellow-300">Process</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology that ensures successful project delivery, 
              transparent communication, and exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="glass text-center p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:bg-white/30 transition-colors duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FiveAtech</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical excellence with creative innovation to deliver solutions that exceed expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled developers with 5+ years of experience in cutting-edge technologies',
                stat: '100%',
                statLabel: 'Expert Level'
              },
              {
                title: 'On-Time Delivery',
                description: 'We pride ourselves on meeting deadlines and delivering projects on schedule',
                stat: '98%',
                statLabel: 'On-Time Rate'
              },
              {
                title: 'Client Satisfaction',
                description: 'Our clients love working with us and often return for additional projects',
                stat: '100%',
                statLabel: 'Satisfaction'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control processes ensure bug-free deliverables',
                stat: '99.9%',
                statLabel: 'Bug-Free'
              },
              {
                title: 'Support & Maintenance',
                description: '24/7 technical support and ongoing maintenance to keep your systems running smoothly',
                stat: '24/7',
                statLabel: 'Support'
              },
              {
                title: 'Competitive Pricing',
                description: 'Fair, transparent pricing with no hidden costs and flexible payment options',
                stat: '100%',
                statLabel: 'Transparent'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.statLabel}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Button asChild size="lg" className="btn-hover-lift bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-16 px-10 text-lg font-bold shadow-xl">
              <Link href="/contact">
                Start Your Project Today <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}