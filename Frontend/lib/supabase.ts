import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// Don't throw at import time: this module is loaded while Next.js prerenders
// every page, so a hard error here fails the whole build. Fall back to
// placeholders and warn instead; auth calls will fail until the real values
// are set (NEXT_PUBLIC_* vars are inlined at build time, so redeploy after).
if (!isSupabaseConfigured) {
  console.warn(
    'Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string
          address: string
          city: string
          state: string
          zip_code: string
          plan_id: string | null
          subscription_status: 'active' | 'inactive' | 'suspended'
          role: 'customer' | 'admin' | 'support'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone: string
          address: string
          city: string
          state: string
          zip_code: string
          plan_id?: string | null
          subscription_status?: 'active' | 'inactive' | 'suspended'
          role?: 'customer' | 'admin' | 'support'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string
          address?: string
          city?: string
          state?: string
          zip_code?: string
          plan_id?: string | null
          subscription_status?: 'active' | 'inactive' | 'suspended'
          role?: 'customer' | 'admin' | 'support'
          created_at?: string
          updated_at?: string
        }
      }
      plans: {
        Row: {
          id: string
          name: string
          description: string
          speed: string
          price: number
          features: string[]
          data_cap: string
          contract_length: number
          is_featured: boolean
          is_available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          speed: string
          price: number
          features: string[]
          data_cap: string
          contract_length: number
          is_featured?: boolean
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          speed?: string
          price?: number
          features?: string[]
          data_cap?: string
          contract_length?: number
          is_featured?: boolean
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          plan_id: string
          amount: number
          currency: string
          payment_method: string
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          stripe_payment_intent_id: string | null
          stripe_subscription_id: string | null
          billing_cycle: 'monthly' | 'yearly'
          next_billing_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_id: string
          amount: number
          currency?: string
          payment_method: string
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          stripe_payment_intent_id?: string | null
          stripe_subscription_id?: string | null
          billing_cycle?: 'monthly' | 'yearly'
          next_billing_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_id?: string
          amount?: number
          currency?: string
          payment_method?: string
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          stripe_payment_intent_id?: string | null
          stripe_subscription_id?: string | null
          billing_cycle?: 'monthly' | 'yearly'
          next_billing_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      support_tickets: {
        Row: {
          id: string
          user_id: string
          subject: string
          description: string
          status: 'open' | 'in_progress' | 'resolved' | 'closed'
          priority: 'low' | 'medium' | 'high'
          category: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          subject: string
          description: string
          status?: 'open' | 'in_progress' | 'resolved' | 'closed'
          priority?: 'low' | 'medium' | 'high'
          category?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          subject?: string
          description?: string
          status?: 'open' | 'in_progress' | 'resolved' | 'closed'
          priority?: 'low' | 'medium' | 'high'
          category?: string
          created_at?: string
          updated_at?: string
        }
      }
      contact_inquiries: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          department: string
          status: 'new' | 'read' | 'replied' | 'closed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          department: string
          status?: 'new' | 'read' | 'replied' | 'closed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          department?: string
          status?: 'new' | 'read' | 'replied' | 'closed'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
