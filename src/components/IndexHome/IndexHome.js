import React from 'react'
import IndexHeader from './IndexHeader'
import IndexSevices from './IndexSevices'
import IndexFeatures from './IndexFeatures'
import IndexTestimonials from './IndexTestimonials'

const IndexHome = () => {
  return (
    <main className="container mx-auto">
      <IndexHeader />
      <section class="mt-12 md:mt-24">
        <IndexSevices />
        <IndexFeatures />
        <IndexTestimonials />
      </section>
    </main>
  )
}

export default IndexHome