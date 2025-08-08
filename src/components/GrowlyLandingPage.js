import { User, Sparkles, Download, Zap, Target, FileDown } from "lucide-react";
import ContactForm from "../components/contactForm";
import ImageGenerator from "./imageGenerator";

export default function GrowlyLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Create High-Converting Ads in{" "}
            <span className="text-purple-600">Seconds</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-600 mb-8">
            <Sparkles className="w-4 h-4" />
            Powered by AI
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No design or copywriting needed. Just enter your product and let{" "}
            <span className="text-purple-600 font-semibold">Growly</span> do the
            rest.
          </p>

          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2">
            Book Free Demo
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

    <ImageGenerator/>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Three simple steps to amazing ads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Input Your Product
              </h3>
              <p className="text-gray-600">
                Simply describe your product or service and target audience in a
                few words.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. AI Creates Magic
              </h3>
              <p className="text-gray-600">
                Our AI generates multiple high-converting ad variations with
                stunning visuals and copy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3.Output</h3>
              <p className="text-gray-600">
                Export your ads in multiple formats ready for Facebook, Google,
                Instagram, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to create winning ads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI Creative Generator
              </h3>
              <p className="text-gray-600">
                Generate unlimited ad creatives with our advanced AI that
                understands your brand and audience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Headline Optimizer
              </h3>
              <p className="text-gray-600">
                AI-powered headline optimization that tests and improves your ad
                copy for maximum engagement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <FileDown className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Export Ad Formats
              </h3>
              <p className="text-gray-600">
                Export your ads in all popular formats for Facebook, Instagram,
                Google Ads, and more platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      <div className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Growly</h3>
          <p className="text-gray-400 mb-8">
            Transform your advertising with AI-powered creativity
          </p>
        </div>
      </div>
    </div>
  );
}
