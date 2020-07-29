export type LogoProps = {
  url: string
  alternativeText: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionAboutProjectProps = {
  image: {
    url: string
    alternativeText: string
  }
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: [TechIcons]
}

export type TechIcons = {
  title: string
  icon: {
    alternativeText: string
    url: string
  }
}

export type SectionConceptsProps = {
  title: string
  concepts: [Concepts]
}

export type Concepts = {
  title: string
}

export type SectionModulesProps = {
  title: string
  modules: [Modules]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: [Authors]
}

export type Authors = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  role: string
  socialLinks: [SocialLinks]
  description: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type SectionReviewsProps = {
  title: string
  reviews: [Reviews]
}

export type Reviews = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  text: string
}

export type SectionFaqProps = {
  title: string
  questions: [Questions]
}

export type Questions = {
  question: string
  answer: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
