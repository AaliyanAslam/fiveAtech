"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Fashion Store',
    category: 'E-commerce',
    description: 'A modern online fashion store with advanced filtering, wishlist functionality, and secure payment processing.',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: ['Product Filtering', 'Payment Integration', 'User Authentication', 'Order Management'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Restaurant Management System',
    category: 'Web Application',
    description: 'Complete restaurant management solution with table booking, menu management, and staff coordination.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    features: ['Table Booking', 'Menu Management', 'Staff Dashboard', 'Analytics'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Fitness Tracker Mobile App',
    category: 'Mobile App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.',
    image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    features: ['Workout Tracking', 'Nutrition Log', 'Social Features', 'Progress Analytics'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Real Estate Platform',
    category: 'WordPress',
    description: 'Custom WordPress theme for real estate with property listings, agent profiles, and advanced search.',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SCSS'],
    features: ['Property Search', 'Agent Profiles', 'Map Integration', 'Mortgage Calculator'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Inventory Management Dashboard',
    category: 'Business Solution',
    description: 'Comprehensive inventory management system with real-time tracking and automated reporting.',
    image: 'https://images.pexels.com/photos/7679969/pexels-photo-7679969.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
    features: ['Real-time Tracking', 'Automated Alerts', 'Reporting Dashboard', 'Multi-location Support'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Educational Learning Platform',
    category: 'E-learning',
    description: 'Online learning platform with course management, video streaming, and progress tracking.',
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    features: ['Course Management', 'Video Streaming', 'Live Chat', 'Progress Tracking'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['All', 'E-commerce', 'Web Application', 'Mobile App', 'WordPress', 'Business Solution', 'E-learning'];

export default function Portfolio() {
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
              Our <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our diverse range of successful projects across various industries. 
              Each project showcases our commitment to quality, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'Fashion Boutique Owner',
                testimonial: 'FiveAtech delivered an amazing e-commerce platform that exceeded our expectations. Sales increased by 40% in the first month!',
                rating: 5
              },
              {
                name: 'Michael Chen',
                company: 'Restaurant Chain Manager',
                testimonial: 'The restaurant management system streamlined our operations perfectly. The team was professional and delivered on time.',
                rating: 5
              },
              {
                name: 'Emily Davis',
                company: 'Fitness Center Owner',
                testimonial: 'Our gym management system has transformed how we operate. Member engagement is at an all-time high.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.testimonial}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
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