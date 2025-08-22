import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Users, ArrowUpRight, Star } from 'lucide-react'
import { allPublications } from '../data/publications'

const publications = allPublications

// Legacy publications structure
const _legacyPublications = [
  {
    title: 'Tailoring capsid-directed evolution technology for improved AAV-mediated CAR-T generation',
    journal: 'Molecular Therapy',
    year: 2024,
    authors: 'Roca-Pinilla R, et al.',
    citations: 15,
    impact: 12.4,
    featured: true,
    tags: ['AAV', 'CAR-T', 'Gene Therapy'],
    abstract: 'Novel AAV capsid engineering approach for enhanced CAR-T cell generation efficiency...'
  },
  {
    title: 'Harnessing whole human liver ex situ normothermic perfusion for preclinical AAV vector evaluation',
    journal: 'Nature Communications',
    year: 2024,
    authors: 'Roca-Pinilla R, et al.',
    citations: 23,
    impact: 16.6,
    featured: true,
    tags: ['AAV Vectors', 'Liver Perfusion', 'Gene Therapy'],
    abstract: 'Ex situ liver perfusion model for comprehensive AAV vector biodistribution and efficacy evaluation...'
  },
  {
    title: 'Functional Inclusion Bodies',
    journal: 'Trends in Biotechnology',
    year: 2022,
    authors: 'Roca-Pinilla R, et al.',
    citations: 45,
    impact: 15.7,
    featured: true,
    tags: ['Protein Aggregates', 'Biotechnology', 'Review'],
    abstract: 'Comprehensive review on functional inclusion bodies as novel biomaterials for therapeutic applications...'
  },
  {
    title: 'Antimicrobial potential of Recombinant Host Defense Peptides produced as soluble and nanoclusters',
    journal: 'Scientific Reports',
    year: 2021,
    authors: 'Roca-Pinilla R, et al.',
    citations: 38,
    impact: 4.6,
    featured: false,
    tags: ['Antimicrobial', 'Host Defense', 'Nanoclusters'],
    abstract: 'Novel approach for producing antimicrobial peptides with enhanced activity through nanocluster formation...'
  },
  {
    title: 'A new generation of recombinant polypeptides combines multiple protein domains for effective antimicrobial activity',
    journal: 'Microbial Cell Factories',
    year: 2020,
    authors: 'Roca-Pinilla R, et al.',
    citations: 42,
    impact: 6.4,
    featured: false,
    tags: ['Antimicrobial', 'Protein Engineering', 'Multidomain'],
    abstract: 'Engineering multidomain proteins for synergistic antimicrobial effects against resistant pathogens...'
  }
]

const PublicationCard = ({ pub, index }: { pub: typeof publications[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className={`glass-card p-6 h-full hover:bg-white/10 transition-all duration-300 ${pub.featured ? 'border-peptide-500/50' : ''}`}>
        {/* Featured badge */}
        {pub.featured && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 text-ai-400 fill-ai-400" />
            <span className="text-xs text-ai-400 font-semibold">Featured Research</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 group-hover:text-peptide-400 transition-colors line-clamp-2">
          {pub.title}
        </h3>

        {/* Journal info */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span className="font-medium text-protein-400">{pub.journal}</span>
          <span>{pub.year}</span>
        </div>

        {/* Authors */}
        <p className="text-sm text-gray-500 mb-3 line-clamp-1">
          <Users className="w-3 h-3 inline mr-1" />
          {pub.authors}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pub.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="text-gray-500">Citations: </span>
              <span className="font-semibold gradient-text">{pub.citations}</span>
            </div>
            <div>
              <span className="text-gray-500">IF: </span>
              <span className="font-semibold gradient-text">{pub.impact}</span>
            </div>
          </div>
          <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const Publications = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [showAll, setShowAll] = useState(false)
  const displayedPublications = showAll ? publications : publications.slice(0, 6)

  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-peptide-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Publications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advancing Science Through
            <span className="gradient-text"> Peer-Reviewed Research</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our work has been published in leading scientific journals, contributing to the global understanding of peptide engineering and AI-driven drug discovery
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Total Publications', value: '16' },
            { label: 'Total Citations', value: '250+' },
            { label: 'h-index', value: '12' },
            { label: 'Research Years', value: '8' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Publications grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {displayedPublications.map((pub, index) => (
            <PublicationCard key={pub.title} pub={pub} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-gradient-to-r from-peptide-500 to-protein-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-peptide-500/25 transition-all duration-300">
            {showAll ? 'Show Less' : `View All ${publications.length} Publications →`}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications