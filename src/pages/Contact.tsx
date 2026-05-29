import { useEffect, useState } from 'react';
import { setSEO } from '../utils/seo';
import { Mail, Phone, Linkedin, Twitter, Youtube, Send, Facebook, Music } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  useEffect(() => {
    setSEO(
      'Contact',
      'Get in touch with Business Fraud MRI™ to discuss your fraud prevention and investigation needs.'
    );
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('contact-form', {
        body: formData,
      });

      if (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send message. Please try again.');
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again or email us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">Get In Touch</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to strengthen your fraud defenses? Let's explore how Business Fraud MRI™ can help your organization.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <div className="text-green-600 font-bold text-xl">✓</div>
                    <div>
                      <h3 className="font-bold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="assessment">Fraud MRI™ Assessment</option>
                      <option value="intelligence">Fraud Risk Intelligence</option>
                      <option value="investigation">Fraud Investigation & Advisory</option>
                      <option value="framework">Prevention Framework Design</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                      placeholder="Tell us about your fraud prevention challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full font-bold py-3 rounded transition-colors tracking-wider uppercase ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:info@businessfraudmri.com" className="text-gray-600 hover:text-red-600 transition-colors">
                        info@businessfraudmri.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <a href="tel:+251799103334" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +251 799 103 334
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://linkedin.com/company/businessfraudmri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0a66c2] hover:opacity-90 text-white p-3 rounded-lg transition-opacity"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/BusinesFraudMRI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:opacity-90 text-white p-3 rounded-lg transition-opacity"
                      title="X/Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com/@BusinessFraudMRI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:opacity-90 text-white p-3 rounded-lg transition-opacity"
                      title="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a
                      href="https://t.me/businessfraudmri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:opacity-90 text-white p-3 rounded-lg transition-opacity"
                      title="Telegram"
                    >
                      <Send className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/businessfraudmri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:opacity-90 text-white p-3 rounded-lg transition-opacity"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://tiktok.com/@businessfraudmri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:opacity-90 text-white p-3 rounded-lg transition-opacity"
                      title="TikTok"
                    >
                      <Music className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-800 mb-2">Response Time</h3>
                  <p className="text-gray-600 text-sm">
                    We typically respond to inquiries within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What does the Fraud MRI™ Assessment include?',
                a: 'A comprehensive diagnostic review covering fraud risks, red flags, control gaps, and recommendations across your organization.',
              },
              {
                q: 'How long does an assessment typically take?',
                a: 'The duration depends on your organization\'s size and complexity, typically ranging from 2-6 weeks.',
              },
              {
                q: 'Do you work with organizations of all sizes?',
                a: 'Yes, we work with organizations from startups to large enterprises across various industries.',
              },
              {
                q: 'Is the information I share confidential?',
                a: 'Absolutely. We maintain strict confidentiality and security protocols for all client information.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
