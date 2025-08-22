import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Beaker, Cpu, Dna, Target, Shield, Heart } from 'lucide-react'

const researchAreas = [
  {
    icon: Dna,
    title: 'AAV Gene Therapy',
    description: 'Engineering AAV capsids for improved CAR-T generation and liver-targeted gene delivery',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['AAV Vectors', 'CAR-T', 'Liver Perfusion'],
    metrics: { papers: 3, year: '2024' }
  },
  {
    icon: Shield,
    title: 'Antimicrobial Peptides',
    description: 'Developing recombinant host defense peptides to combat antibiotic resistance',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['AMR', 'Host Defense', 'Multidomain Proteins'],
    metrics: { papers: 5, citations: '100+' }
  },
  {
    icon: Beaker,
    title: 'Functional Inclusion Bodies',
    description: 'Novel protein aggregates for pharmaceutical and biotechnological applications',
    gradient: 'from-orange-500 to-red-500',
    tags: ['Protein Aggregates', 'Drug Delivery', 'Nanoclusters'],
    metrics: { papers: 4, impact: 'High' }
  },
  {
    icon: Cpu,
    title: 'Protein Engineering',
    description: 'AI-driven design and optimization of therapeutic proteins with enhanced bioactivity',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Computational Design', 'Structure-Guided', 'AI-Assisted'],
    metrics: { proteins: 20, success: '85%' }
  },
  {
    icon: Target,
    title: 'Biomaterial Surfaces',
    description: 'Antibiofilm surfaces using self-assembly monolayers and recombinant proteins',
    gradient: 'from-indigo-500 to-blue-500',
    tags: ['Antibiofilm', 'Self-Assembly', 'Surface Engineering'],
    metrics: { materials: 5, patents: 2 }
  },
  {
    icon: Heart,
    title: 'T Cell Engineering',
    description: 'CCL21-loaded 3D hydrogels for T cell expansion and differentiation',
    gradient: 'from-pink-500 to-rose-500',
    tags: ['Immunotherapy', '3D Hydrogels', 'T Cells'],
    metrics: { models: 3, trials: 'Pre-clinical' }
  }
]

const ResearchCard = ({ area, index }: { area: typeof researchAreas[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = area.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card p-6 h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.gradient} p-2.5 mb-4`}>
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{area.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {area.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs glass-card rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
          {Object.entries(area.metrics).map(([key, value]) => (
            <div key={key}>
              <div className="text-gray-500 text-xs capitalize">{key}</div>
              <div className="font-semibold gradient-text">{value}</div>
            </div>
          ))}
        </div>

        {/* Hover effect gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      </div>
    </motion.div>
  )
}

const Research = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section id="research" className="py-20 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-peptide-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Research Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pushing the Boundaries of
            <span className="gradient-text"> Molecular Science</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our research combines cutting-edge AI with molecular biology to solve the most pressing challenges in healthcare and biotechnology
          </p>
        </motion.div>

        {/* Research grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <ResearchCard key={area.title} area={area} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 glass-card rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300">
            View All Research Projects →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Research