"use client"

import { motion } from 'framer-motion';

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using FiveAtech's services, you accept and agree to be bound by the terms and 
                provision of this agreement. These terms apply to all visitors, users, and others who access or 
                use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of FiveAtech's materials for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to decompile or reverse engineer any software</li>
                <li>remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Service Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                FiveAtech provides software development services including but not limited to web development, 
                mobile application development, e-commerce solutions, and custom software development. All 
                services are provided according to the specific agreements made between FiveAtech and the client.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms are specified in individual project agreements. Generally, we require:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>50% payment upfront before project commencement</li>
                <li>Remaining 50% upon project completion and delivery</li>
                <li>For larger projects, milestone-based payments may be arranged</li>
                <li>All payments are due within 30 days of invoice date</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, the client receives ownership of the final deliverables. However, FiveAtech 
                retains the right to use general methodologies, know-how, and techniques developed during the 
                project for future work. We also reserve the right to showcase completed work in our portfolio 
                unless otherwise specified in writing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Warranties and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                FiveAtech warrants that services will be performed in a professional manner. However, we make 
                no warranties regarding the performance, merchantability, or fitness for a particular purpose 
                of any deliverables. All work is provided "as is" unless otherwise specified in a separate 
                service agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall FiveAtech be liable for any damages (including, without limitation, damages 
                for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use our services, even if FiveAtech or a FiveAtech authorized representative has been 
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of our services, to understand our practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate services with written notice. Upon termination, the client is 
                responsible for payment of all work completed up to the termination date. FiveAtech will 
                deliver all completed work upon receipt of payment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the 
                jurisdiction in which FiveAtech operates, and you irrevocably submit to the exclusive 
                jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                FiveAtech reserves the right to revise these terms at any time without notice. By using our 
                services, you agree to be bound by the current version of these terms and conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>FiveAtech</strong><br />
                  Email: contact@fiveatech.com<br />
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