import React from 'react';
import { User, Target } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      businessType: '',
      goals: '',
    },
   validationSchema: Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters and spaces are allowed')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^\+?[\d\s\-()]{10,15}$/,
      'Invalid phone number format'
    )
    .required('Phone is required'),
  businessType: Yup.string().required('Business Type is required'),
}),

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch('https://imagegenrator-9.onrender.com/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Unknown error');

        toast.success('  submitted successfully!');
        resetForm();
      } catch (error) {
        toast.error(` ${error.message}`);
      }
    },
  });

  return (
    <div id="contact" className="bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Ads?</h2>
          <p className="text-purple-100 text-lg">
            Book your free demo and see how Growly can 10x your ad performance
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <User className="w-4 h-4" /> Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none"
                  placeholder="Enter your full name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-400 text-sm mt-1">{formik.errors.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  📧 Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none"
                  placeholder="your@email.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  📞 Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{formik.errors.phone}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <Target className="w-4 h-4" /> Business Type *
                </label>
                <select
                  name="businessType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.businessType}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none appearance-none"
                >
                  <option value="" className="text-gray-900">Select your business type</option>
                  <option value="ecommerce" className="text-gray-900">E-commerce</option>
                  <option value="saas" className="text-gray-900">SaaS</option>
                  <option value="agency" className="text-gray-900">Marketing Agency</option>
                  <option value="retail" className="text-gray-900">Retail</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                {formik.touched.businessType && formik.errors.businessType && (
                  <p className="text-red-400 text-sm mt-1">{formik.errors.businessType}</p>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-white text-sm mb-2">
                💬 Tell us about your goals (Optional)
              </label>
              <textarea
                name="goals"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.goals}
                rows={4}
                placeholder="What are you hoping to achieve with your ads?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Book My Free Demo →
            </button>

            
          </div>
        </form>

      
        <ToastContainer position="top-right" autoClose={4000} />
      </div>
    </div>
  );
};

export default ContactForm;
