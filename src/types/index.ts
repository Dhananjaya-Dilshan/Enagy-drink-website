// This file defines the "shape" of our data
// Think of it as a blueprint or contract

export interface Product {
  // interface = blueprint for an object
  id: string           // Unique identifier (text)
  name: string         // Product name
  flavor: string       // Flavor description
  price: number        // Price (number with decimals)
  description: string  // Long description
  caffeine: number     // Caffeine in mg
  calories: number     // Calories per can
  image: string        // Image path
  features: string[]   // Array of feature strings
  color: string        // Brand color for styling
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface Feature {
  icon: string         // Emoji or icon
  title: string
  description: string
}