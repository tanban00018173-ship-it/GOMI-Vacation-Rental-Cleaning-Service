import config from '../content/config.json'
import cases from '../content/seed/cases.json'
import reviews from '../content/seed/reviews.json'
import faq from '../content/seed/faq.json'

export type Config = typeof config
export type Case = typeof cases[0]
export type Review = typeof reviews[0]
export type FAQ = typeof faq[0]

export function getConfig(): Config {
  return config
}

export function getCases(): Case[] {
  return cases
}

export function getReviews(): Review[] {
  return reviews
}

export function getFAQ(): FAQ[] {
  return faq
}

export function getCaseById(id: number): Case | undefined {
  return cases.find(c => c.id === id)
}

export function getReviewsByKeyword(keyword: string): Review[] {
  return reviews.filter(review => 
    review.keywords.some(k => k.includes(keyword))
  )
}

export function getReviewsByService(service: string): Review[] {
  return reviews.filter(review => review.service === service)
}
