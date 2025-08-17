"use client"

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Smartphone, ShoppingCart, Monitor } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'WordPress Development',
    description: 'Custom WordPress websites and plugins tailored to your business needs.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with secure payment integration and inventory management.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies and best practices.'
  }
];

const stats = [
  { number: '100+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-blue-600">FiveAtech</span>
                  <br />
                  Empowering Businesses
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform your ideas into reality with our cutting-edge technology solutions. 
                  We deliver innovative software that drives growth and success.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">24/7 Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
            <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
  <div className="grid grid-cols-2 gap-6">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="text-center group transition-all duration-500 transform hover:scale-105"
      >
        <div className="text-2xl lg:text-4xl font-extrabold text-blue-600 dark:text-blue-400 
                        group-hover:text-blue-700 dark:group-hover:text-blue-300 
                        transition-colors duration-300">
          {stat.number}
        </div>
        <div className="text-sm lg:text-base text-gray-600 dark:text-gray-300 
                        mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {stat.label}
        </div>
        {/* Glow/underline effect */}
        <div className="h-1 w-0 group-hover:w-full bg-blue-500 dark:bg-blue-400 rounded-full mx-auto mt-2 transition-all duration-500"></div>
      </div>
    ))}
  </div>
</div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-border">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
  {/* Animated gradient overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"></div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl lg:text-5xl font-extrabold leading-tight"
      >
        Ready to Transform Your Business?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg lg:text-xl opacity-90"
      >
        Let's discuss your project and create something amazing together. 
        Get a free consultation and quote today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        {/* Primary Button */}
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Link href="/contact">
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        {/* Outline Button */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 bg-white border-white text-blue-600 hover:bg-white hover:text-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Link href="/portfolio">See Our Work</Link>
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

    </div>
  );
}