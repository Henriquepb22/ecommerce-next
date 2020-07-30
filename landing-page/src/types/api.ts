export type Image = {
  url: string
  alternativeText: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  image: Image
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: [TechIcon]
}

export type TechIcon = {
  title: string
  icon: Image
}

export type SectionConceptsProps = {
  title: string
  concepts: [Concept]
}

export type Concept = {
  title: string
}

export type SectionModulesProps = {
  title: string
  modules: [Module]
}

export type Module = {
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
  authors: [Author]
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: [SocialLink]
  description: string
}

export type SocialLink = {
  title: string
  url: string
}

export type SectionReviewsProps = {
  title: string
  reviews: [Review]
}

export type Review = {
  photo: {
    url: string
  }
  name: string
  text: string
}

export type SectionFaqProps = {
  title: string
  questions: [Question]
}

export type Question = {
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
