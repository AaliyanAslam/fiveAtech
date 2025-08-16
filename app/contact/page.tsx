"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  project: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Real-time validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return `${name === 'firstName' ? 'First' : 'Last'} name is required`;
        if (value.trim().length < 2) return `${name === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`;
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return `${name === 'firstName' ? 'First' : 'Last'} name contains invalid characters`;
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (value.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 5000) return 'Message must be less than 5000 characters';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error for this field if it exists
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
    
    // Real-time validation
    const error = validateField(id, value);
    if (error) {
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate required fields
    newErrors.firstName = validateField('firstName', formData.firstName);
    newErrors.lastName = validateField('lastName', formData.lastName);
    newErrors.email = validateField('email', formData.email);
    newErrors.phone = validateField('phone', formData.phone);
    newErrors.message = validateField('message', formData.message);
    
    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus("Please fix the errors above before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    setStatus("Sending your message...");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      
      if (response.ok) {
        try {
          const data = JSON.parse(responseText);
          setStatus(data.message || "Message sent successfully!");
          setIsSuccess(true);
          
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            project: "",
            message: "",
          });
          setErrors({});
          
          // Auto-clear success message after 10 seconds
          setTimeout(() => {
            setStatus("");
            setIsSuccess(false);
          }, 10000);
          
        } catch (parseError) {
          console.error("Could not parse success response:", parseError);
          setStatus("Message sent successfully!");
          setIsSuccess(true);
        }
      } else {
        try {
          const errorData = JSON.parse(responseText);
          setStatus(errorData.error || `Failed to send message (Status: ${response.status})`);
        } catch (parseError) {
          console.error("Could not parse error response:", parseError);
          
          if (response.status === 429) {
            setStatus("Too many requests. Please try again in a few minutes.");
          } else if (response.status >= 500) {
            setStatus("Server error. Please try again later.");
          } else {
            setStatus(`Failed to send message (Status: ${response.status}). Please try again.`);
          }
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectOptions = [
    { value: "", label: "Select a service" },
    { value: "wordpress", label: "WordPress Development" },
    { value: "ecommerce", label: "E-commerce Development" },
    { value: "shopify", label: "Shopify Development" },
    { value: "inventory", label: "Inventory Management System" },
    { value: "gym", label: "Gym Management System" },
    { value: "website", label: "Custom Website Development" },
    { value: "app", label: "Mobile App Development" },
    { value: "api", label: "API Development" },
    { value: "consultation", label: "Technical Consultation" },
    { value: "other", label: "Other" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contactfiveatech@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Send className="w-4 h-4 mr-2" />
              Let's Start Something Great
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to transform your business? Send us a message and we'll respond within 24 hours 
              with a detailed consultation and project proposal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We're here to help bring your vision to life. Reach out through any of these channels.
                </p>
              </div>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">{info.title}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{info.content}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                <CardHeader className="text-center pb-8 relative z-10">
                  <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-8 pb-8 relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <Label htmlFor="firstName" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          disabled={isSubmitting}
                          className={`mt-2 h-12 transition-all duration-300 focus:scale-[1.02] ${errors.firstName ? 'border-red-500 focus:border-red-500 shadow-red-200' : 'focus:shadow-blue-200'}`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-600 flex items-center gap-1"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.firstName}
                          </motion.p>
                        )}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <Label htmlFor="lastName" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          disabled={isSubmitting}
                          className={`mt-2 h-12 transition-all duration-300 focus:scale-[1.02] ${errors.lastName ? 'border-red-500 focus:border-red-500 shadow-red-200' : 'focus:shadow-blue-200'}`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-600 flex items-center gap-1"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.lastName}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Label htmlFor="email" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        disabled={isSubmitting}
                        className={`mt-2 h-12 transition-all duration-300 focus:scale-[1.02] ${errors.email ? 'border-red-500 focus:border-red-500 shadow-red-200' : 'focus:shadow-blue-200'}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600 flex items-center gap-1"
                        >
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Phone and Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Label htmlFor="phone" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                          Phone Number
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          disabled={isSubmitting}
                          className={`mt-2 h-12 transition-all duration-300 focus:scale-[1.02] ${errors.phone ? 'border-red-500 focus:border-red-500 shadow-red-200' : 'focus:shadow-blue-200'}`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-600 flex items-center gap-1"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.phone}
                          </motion.p>
                        )}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Label htmlFor="company" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                          Company
                        </Label>
                        <Input 
                          id="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          disabled={isSubmitting}
                          className="mt-2 h-12 transition-all duration-300 focus:scale-[1.02] focus:shadow-blue-200"
                          placeholder="Your company name (optional)"
                        />
                      </motion.div>
                    </div>

                    {/* Project Type */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Label htmlFor="project" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                        Project Type
                      </Label>
                      <select
                        id="project"
                        value={formData.project}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-2 flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ring-offset-background transition-all duration-300 focus:scale-[1.02] focus:shadow-blue-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {projectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Label htmlFor="message" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                        Project Details <span className="text-red-500">*</span>
                      </Label>
                      <Textarea 
                        id="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        disabled={isSubmitting}
                        className={`mt-2 min-h-[140px] resize-y transition-all duration-300 focus:scale-[1.02] ${errors.message ? 'border-red-500 focus:border-red-500 shadow-red-200' : 'focus:shadow-blue-200'}`}
                        placeholder="Please describe your project requirements, timeline, and any specific details that would help us understand your needs better..."
                      />
                      <div className="mt-2 flex justify-between items-center">
                        {errors.message ? (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-600 flex items-center gap-1"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.message}
                          </motion.p>
                        ) : (
                          <p className="text-sm text-gray-500">
                            Minimum 10 characters required
                          </p>
                        )}
                        <p className="text-sm text-gray-400">
                          {formData.message.length}/5000
                        </p>
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="pt-6"
                    >
                      <Button 
                        type="submit" 
                        className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <Loader2 className="h-6 w-6 animate-spin" />
                            Sending your message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <Send className="h-6 w-6" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>
                    
                    {/* Status Message */}
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`p-6 rounded-xl text-center font-semibold ${
                          isSuccess 
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200 dark:from-green-900/20 dark:to-emerald-900/20 dark:text-green-400 dark:border-green-800' 
                            : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border border-red-200 dark:from-red-900/20 dark:to-rose-900/20 dark:text-red-400 dark:border-red-800'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isSuccess ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <AlertCircle className="h-6 w-6" />
                          )}
                          {status}
                        </div>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Prefer Direct Contact?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Reach out to us directly for immediate assistance
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
                <a href="mailto:contactfiveatech@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  contactfiveatech@gmail.com
                </a>
                <span className="text-gray-400 hidden sm:block">|</span>
                <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  Response time: Within 24 hours
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}