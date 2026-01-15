'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, Wifi, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '../../components/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message || "Login failed");
      } else {
        router.push("/profile");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Shield, text: "Secure Account Dashboard" },
    { icon: Wifi, text: "Manage Your Plans" },
    { icon: CheckCircle, text: "Track Usage & Billing" },
  ];

  return (
    <div className="min-h-screen bg-beige text-black-matte font-inter">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto gap-16 items-center flex justify-center">
          {/* Left Side - Login Form */}
          <div className="">
            <div className="bg-beige/80 rounded-3xl p-10 shadow-xl border border-golden-beige-soft">
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-playfair font-bold text-[#C2B280] mb-4 tracking-tight">Sign In</h1>
                <p className="text-black-matte/80 text-lg font-medium">Access your account to manage your Renting</p>
              </div>
              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-2xl mb-6 border border-red-200/50 text-center">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black-matte block tracking-wide">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black-matte block tracking-wide">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige hover:text-black-matte transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded border-golden-beige-soft" />
                    <span className="text-sm text-black-matte/80">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-golden-beige hover:text-black-matte font-medium">Forgot password?</Link>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-2xl font-semibold bg-gradient-to-r 
from-[#C2B280] 
to-[#E5E1DA] 
text-[#232323] transition-all duration-300 
                    ${isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-golden-beige hover:bg-black-matte hover:text-golden-beige hover:border-golden-beige-soft border border-golden-beige-soft shadow-md"
                    }
                    flex items-center justify-center gap-2 group text-lg tracking-wide`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <div className="text-center">
                  <p className="text-black-matte/80">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-golden-beige hover:text-black-matte font-semibold">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Optionally, add a Footer here for consistency */}
    </div>
  );
}