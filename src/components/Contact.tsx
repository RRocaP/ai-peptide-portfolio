import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Globe, Github, Linkedin, GraduationCap, Send, Music, BookOpen } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-peptide-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's
            <span className="gradient-text"> Collaborate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interested in our research or looking to collaborate? We're always open to discussing new opportunities and partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border border-white/10 focus:border-peptide-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border border-white/10 focus:border-peptide-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border border-white/10 focus:border-peptide-500 focus:outline-none transition-colors"
                  placeholder="Research collaboration opportunity"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border border-white/10 focus:border-peptide-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or idea..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-peptide-500 to-protein-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-peptide-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Research Laboratory</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-peptide-400 mt-1" />
                  <div>
                    <p className="text-gray-300">Children's Medical Research Institute</p>
                    <p className="text-sm text-gray-500">214 Hawkesbury Road, Westmead NSW 2145, Sydney, Australia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-peptide-400" />
                  <a href="mailto:ramon.rocap@gmail.com" className="text-gray-300 hover:text-peptide-400 transition-colors">
                    ramon.rocap@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-peptide-400" />
                  <a href="https://www.cmri.org.au" className="text-gray-300 hover:text-peptide-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    www.cmri.org.au
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/RRocaP' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramonrocapinilla/' },
                  { icon: GraduationCap, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=jYIZGT0AAAAJ' },
                  { icon: BookOpen, label: 'ORCID', href: 'https://orcid.org/0000-0002-7393-6200' },
                  { icon: Music, label: 'Apple Music', href: 'https://music.apple.com/profile/ramonroca' },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 group-hover:text-peptide-400 transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Publications',
                  'Team',
                  'Collaborations',
                  'Open Positions',
                  'Resources',
                  'News & Events'
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-gray-400 hover:text-peptide-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-gray-500">
            © 2024 Ramon Roca Pinilla. All rights reserved. | 
            <a href="#" className="ml-2 hover:text-peptide-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="ml-2 hover:text-peptide-400 transition-colors">Terms of Use</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact