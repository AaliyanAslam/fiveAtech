"use client"

import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                FiveAtech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services. Please read this privacy policy carefully.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect 
                includes:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Personally identifiable information, such as your name, email address, phone number, and 
                company information, that you voluntarily give to us when you contact us or use our services.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground">Derivative Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Information our servers automatically collect when you access our website, such as your IP 
                address, browser type, operating system, access times, and the pages you have viewed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect about you to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you marketing and promotional communications</li>
                <li>Find and prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share information we have collected about you in certain situations:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">By Law or to Protect Rights</h3>
              <p className="text-muted-foreground leading-relaxed">
                If we believe the release of information about you is necessary to respond to legal process, 
                to investigate or remedy potential violations of our policies, or to protect the rights, 
                property, and safety of others.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground">Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may share or transfer your information in connection with, or during negotiations of, 
                any merger, sale of company assets, financing, or acquisition of all or a portion of our 
                business to another company.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal 
                information. While we have taken reasonable steps to secure the personal information you provide 
                to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Policy for Children</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not knowingly solicit information from or market to children under the age of 13. If we 
                learn that we have collected personal information from a child under age 13 without verification 
                of parental consent, we will delete that information as quickly as possible.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification if your information is inaccurate</li>
                <li>The right to object to our processing of your information</li>
                <li>The right to request that we restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect 
                and store information. Cookies are small data files stored on your hard drive or device memory. 
                You can set your browser to refuse all or some browser cookies, or to alert you when cookies 
                are being sent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites and services. We are not responsible 
                for the privacy practices or content of these third parties. We encourage you to review the 
                privacy policies of any third-party services before providing your personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to — and maintained on — computers located outside of your 
                state, province, country, or other governmental jurisdiction where the data protection laws may 
                differ from those of your jurisdiction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>FiveAtech</strong><br />
                  Email: privacy@fiveatech.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Tech Street, Innovation City, IC 12345
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}