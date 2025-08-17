"use client"

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.'
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    description: 'To be the leading software house that transforms ideas into powerful digital solutions, making technology accessible to businesses of all sizes.'
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated team of experienced developers, designers, and project managers committed to delivering exceptional results.'
  },
  {
    icon: Award,
    title: 'Our Expertise',
    description: 'Years of experience in web development, mobile apps, e-commerce, and custom software solutions across various industries.'
  }
];

const achievements = [
  '100+ Successful Projects Delivered',
  '50+ Satisfied Clients Worldwide',
  '5+ Years of Industry Experience',
  '24/7 Technical Support',
  '99.9% Project Success Rate',
  'Agile Development Methodology'
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    description: 'Visionary leader with 10+ years in software development and business strategy.',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    description: 'Technical expert specializing in modern web technologies and system architecture.',
  },
  {
    name: 'Mike Chen',
    role: 'Lead Developer',
    description: 'Full-stack developer with expertise in React, Node.js, and mobile development.',
  },
  {
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    description: 'Creative designer focused on creating intuitive and engaging user experiences.',
  }
];

export default function About() {
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
              About <span className="text-blue-600">FiveAtech</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a passionate team of technology enthusiasts dedicated to helping businesses 
              succeed in the digital world. Since our founding, we've been committed to delivering 
              innovative solutions that make a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on strong values and a clear vision for the future of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose FiveAtech?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've built our reputation on delivering exceptional results and maintaining 
                long-term partnerships with our clients. Our track record speaks for itself.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
    </div>
  );
}