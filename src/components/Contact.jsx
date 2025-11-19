import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ sending: false, success: false, error: '' })

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init('hpTvBYMUMYcIgDWy4')
  }, [])

  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault()
    setStatus({ sending: true, success: false, error: '' })

    const templateParams = {
      from_name: form.name,
      name: form.name,
      email: form.email,
      message: form.message
    }

    emailjs.send('service_iyrse2o', 'template_v4bqk0m', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setStatus({ sending: false, success: true, error: '' })
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus({ sending: false, success: false, error: '' }), 5000)
      })
      .catch((error) => {
        console.error('FAILED...', error)
        const errorMsg = error?.text || error?.message || 'Failed to send message. Please try again.'
        setStatus({ sending: false, success: false, error: errorMsg })
      })
  }

  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-16 text-center text-white">CONTACT</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="content-text opacity-90 mb-6 text-gray-200">
              Software development, AI/ML projects, and full-stack solutions.<br />
              Feel free to reach out for collaboration opportunities or project discussions.
            </p>
            
            <div className="space-y-2 text-sm opacity-70 text-gray-300">
              <p>Email: <a href="mailto:shivashlok2004@gmail.com" className="hover:opacity-100 transition-opacity hover:text-white">shivashlok2004@gmail.com</a></p>
              <p>Phone: <a href="tel:+919480304679" className="hover:opacity-100 transition-opacity hover:text-white">+91 9480304679</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/shivashlok" className="hover:opacity-100 transition-opacity hover:text-white" target="_blank" rel="noopener noreferrer">linkedin.com/in/shivashlok</a></p>
              <p>Based in Bangalore, India</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" aria-label="contact-form">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm opacity-70 font-light mb-2 text-gray-300">Name</label>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  className="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 text-sm text-white focus:border-white focus:ring-0 transition-colors placeholder-gray-500" 
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm opacity-70 font-light mb-2 text-gray-300">Email</label>
                <input 
                  name="email" 
                  type="email"
                  value={form.email} 
                  onChange={handleChange} 
                  className="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 text-sm text-white focus:border-white focus:ring-0 transition-colors placeholder-gray-500" 
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm opacity-70 font-light mb-2 text-gray-300">Message</label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                rows="6"
                className="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 text-sm text-white focus:border-white focus:ring-0 transition-colors resize-none placeholder-gray-500" 
                placeholder="Your message or project details"
                required
              />
            </div>
            
            <div className="pt-6">
              <button 
                type="submit" 
                disabled={status.sending}
                className="w-full md:w-auto px-12 py-4 bg-white text-black text-sm font-light tracking-wider hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.sending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              
              {status.success && (
                <p className="mt-4 text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
              )}
              
              {status.error && (
                <p className="mt-4 text-red-400 text-sm">{status.error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
