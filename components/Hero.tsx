'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';

export default function Hero() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinWaitlist = () => {
    setShowEmailForm(true);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setShowEmailForm(false);
        setEmail('');
      }, 3000);
    }, 2000);
  };

  const handleBackToButton = () => {
    setShowEmailForm(false);
    setEmail('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5200ff]/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5200ff]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5200ff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Build{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5200ff] to-[#7c3aed]">
            Intelligent Agents
          </span>{' '}
          in Minutes
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Deploy AI-powered bots that understand, learn, and evolve with your business needs
        </p>
        
        <div className="flex justify-center">
          {!showEmailForm ? (
            <Button
              onClick={handleJoinWaitlist}
              size="lg"
              className="bg-[#5200ff] hover:bg-[#4100cc] text-white px-12 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#5200ff]/25 hover:shadow-[#5200ff]/40"
            >
              Join the Waitlist
            </Button>
          ) : (
            <div className="w-full max-w-md mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmitEmail} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 pr-4 py-4 text-lg rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5200ff] focus:ring-2 focus:ring-[#5200ff]/20 transition-all duration-300"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      type="submit"
                      disabled={isLoading || !email}
                      className="flex-1 bg-[#5200ff] hover:bg-[#4100cc] text-white py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#5200ff]/25 hover:shadow-[#5200ff]/40 disabled:opacity-50 disabled:scale-100"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Joining...</span>
                        </div>
                      ) : (
                        'Join Waitlist'
                      )}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleBackToButton}
                      variant="outline"
                      className="px-6 py-4 rounded-full border-white/20 bg-white text-black hover:bg-gray-100 transition-all duration-300"
                    >
                      Back
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-500/20">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-300">
                    We'll notify you when The Honest Machine is ready.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-[#5200ff] to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}