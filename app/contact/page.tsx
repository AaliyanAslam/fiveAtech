"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
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

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Send us a message and we'll respond within 24 hours.
            </p>
          </div>
          
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">Send us a Message</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Fill out the form below with your project details
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-base font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                      className={`mt-2 h-12 ${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-base font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                      className={`mt-2 h-12 ${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className={`mt-2 h-12 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone and Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                      className={`mt-2 h-12 ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-base font-medium text-gray-700">
                      Company
                    </Label>
                    <Input 
                      id="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                      className="mt-2 h-12"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <Label htmlFor="project" className="text-base font-medium text-gray-700">
                    Project Type
                  </Label>
                  <select
                    id="project"
                    value={formData.project}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-2 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {projectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-base font-medium text-gray-700">
                    Project Details <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className={`mt-2 min-h-[120px] resize-y ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                    placeholder="Please describe your project requirements, timeline, and any specific details that would help us understand your needs better..."
                  />
                  <div className="mt-2 flex justify-between items-center">
                    {errors.message ? (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.message}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Minimum 10 characters required
                      </p>
                    )}
                    <p className="text-sm text-gray-400">
                      {formData.message.length}/5000
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg font-semibold transition-all duration-200 transform hover:scale-[1.02]" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending your message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </div>
                
                {/* Status Message */}
                {status && (
                  <div className={`p-4 rounded-lg text-center font-medium ${
                    isSuccess 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <div className="flex items-center justify-center gap-2">
                      {isSuccess ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      {status}
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
          
          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:contactfiveatech@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                📧 contactfiveatech@gmail.com

              </a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">
                ⏱️ Response time: Within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}