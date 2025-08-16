"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Fashion Store',
    category: 'E-commerce',
    description: 'A modern online fashion store with advanced filtering, wishlist functionality, and secure payment processing.',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: ['Product Filtering', 'Payment Integration', 'User Authentication', 'Order Management'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Restaurant Management System',
    category: 'Web Application',
    description: 'Complete restaurant management solution with table booking, menu management, and staff coordination.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    features: ['Table Booking', 'Menu Management', 'Staff Dashboard', 'Analytics'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Fitness Tracker Mobile App',
    category: 'Mobile App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.',
    image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    features: ['Workout Tracking', 'Nutrition Log', 'Social Features', 'Progress Analytics'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Real Estate Platform',
    category: 'WordPress',
    description: 'Custom WordPress theme for real estate with property listings, agent profiles, and advanced search.',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SCSS'],
    features: ['Property Search', 'Agent Profiles', 'Map Integration', 'Mortgage Calculator'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Inventory Management Dashboard',
    category: 'Business Solution',
    description: 'Comprehensive inventory management system with real-time tracking and automated reporting.',
    image: 'https://images.pexels.com/photos/7679969/pexels-photo-7679969.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
    features: ['Real-time Tracking', 'Automated Alerts', 'Reporting Dashboard', 'Multi-location Support'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Educational Learning Platform',
    category: 'E-learning',
    description: 'Online learning platform with course management, video streaming, and progress tracking.',
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    features: ['Course Management', 'Video Streaming', 'Live Chat', 'Progress Tracking'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-teal-500 to-green-500'
  }
];

export default function Portfolio() {
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
              Our Success Stories
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our diverse range of successful projects across various industries. 
              Each project showcases our commitment to quality, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-white/70 dark:bg-gray-700/70 hover:bg-white dark:hover:bg-gray-600 transition-colors duration-300">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our <span className="text-yellow-300">Clients Say</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied clients who've transformed their businesses with our solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Sarah Johnson',
                company: 'Fashion Boutique Owner',
                testimonial: 'FiveAtech delivered an amazing e-commerce platform that exceeded our expectations. Sales increased by 40% in the first month!',
                rating: 5,
                avatar: 'SJ',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                name: 'Michael Chen',
                company: 'Restaurant Chain Manager',
                testimonial: 'The restaurant management system streamlined our operations perfectly. The team was professional and delivered on time.',
                rating: 5,
                avatar: 'MC',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Emily Davis',
                company: 'Fitness Center Owner',
                testimonial: 'Our gym management system has transformed how we operate. Member engagement is at an all-time high.',
                rating: 5,
                avatar: 'ED',
                gradient: 'from-green-500 to-teal-500'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white mb-6 text-lg leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-blue-200">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <Button asChild size="lg" className="btn-hover-lift bg-white text-blue-600 hover:bg-gray-100 h-16 px-10 text-lg font-bold shadow-xl">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}