'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/components/ui/simple-toast'
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, ArrowRight, Sparkles, Shield, Zap, Gift } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '../../components/navigation'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { signUp } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const { error } = await signUp(formData.email, formData.password, {
        full_name: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zipCode
      })

      if (error) {
        setError(error.message || 'Registration failed')
      } else {
        toast({
          title: "Registration successful!",
          description: "Please check your email for verification link.",
        })
        router.push('/login')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    { icon: Shield, text: 'Secure Account Management', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, text: 'Priority Customer Support', color: 'from-blue-500 to-cyan-900' },
    { icon: Gift, text: 'Exclusive Member Discounts', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-beige text-black-matte font-inter">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto flex gap-16 items-center justify-center">
          {/* Left Side - Registration Form */}
          <div className="">
            <div className="bg-beige/80 rounded-3xl p-10 shadow-xl border border-golden-beige-soft">
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-playfair font-bold mb-4 tracking-tight">Create Account</h1>
                <p className="text-black-matte/80 text-lg font-medium">Sign up today and get connected.</p>
              </div>
              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-2xl mb-6 border border-red-200/50 text-center">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black-matte block tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black-matte block tracking-wide">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-golden-beige" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="State"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                      placeholder="ZIP"
                      required
                    />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                        placeholder="Create password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige hover:text-cyan-200 transition-colors"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black-matte block tracking-wide">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-beige/40 border border-golden-beige-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-beige/40 focus:border-golden-beige/40 text-black-matte placeholder:text-black-matte/50 transition-all duration-300 font-medium"
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-golden-beige hover:text-cyan-200 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded border-golden-beige-soft" required />
                  <span className="text-sm text-black-matte/80">
                    I agree to the{' '}
                    <Link href="/terms" className="text-golden-beige hover:text-black-matte font-medium">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-golden-beige hover:text-black-matte font-medium">Privacy Policy</Link>
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#C2B280] to-[#E5E1DA] text-[#232323] transition-all duration-300 
                      ${isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-golden-beige hover:bg-black-matte hover:text-golden-beige hover:border-golden-beige-soft border border-golden-beige-soft shadow-md'
                    }
                      flex items-center justify-center gap-2 group text-lg tracking-wide`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <div className="text-center">
                  <p className="text-black-matte/80">
                    Already have an account?{' '}
                    <Link href="/login" className="text-golden-beige hover:text-black-matte font-semibold">Sign In</Link>
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