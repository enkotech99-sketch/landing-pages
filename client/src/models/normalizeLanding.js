import { landingModel } from "../models/landingModel";

export function normalizeLanding(data = {}) {
  return {
    ...landingModel,
    ...data,

    contact: {
      ...landingModel.contact,
      ...(data.contact || {})
    },

    highlights: data.highlights || [],
    services: data.services || [],
    packages: data.packages || [],
    gallery: data.gallery || [],
    testimonials: data.testimonials || [],
    faq: data.faq || [],
    stats: data.stats || []
  };
}