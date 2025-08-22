import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { TrendingUp, Award, BookOpen, Zap } from 'lucide-react'

const metricsData = {
  research: [
    { label: 'Papers Published', value: 16, change: '+2', icon: BookOpen },
    { label: 'Total Citations', value: 250, change: '+50', icon: TrendingUp },
    { label: 'h-index', value: 12, change: '+2', icon: Award },
    { label: 'Journals', value: 10, change: '+2', icon: Zap },
  ],
  collaboration: [
    { label: 'Collaborations', value: 25, suffix: 'international' },
    { label: 'Institutions', value: 15, suffix: 'partners' },
    { label: 'Research Areas', value: 6, suffix: 'domains' },
    { label: 'Years Active', value: 8, suffix: 'since 2017' },
  ],
  impact: [
    { year: 2024, citations: 38, publications: 2 },
    { year: 2023, citations: 52, publications: 3 },
    { year: 2022, citations: 45, publications: 1 },
    { year: 2021, citations: 68, publications: 4 },
    { year: 2020, citations: 47, publications: 3 },
  ]
}

const AnimatedNumber = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (!isInView) return
    
    const startTime = Date.now()

    const updateNumber = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      
      setDisplayValue(Math.floor(value * progress))
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }
    
    updateNumber()
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue.toLocaleString()}</span>
}

import React from 'react'

const Metrics = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section id="metrics" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ai-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-peptide-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-peptide-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Research Metrics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Measuring
            <span className="gradient-text"> Scientific Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Track our research contributions and collaborative impact across the global scientific community
          </p>
        </motion.div>

        {/* Main metrics cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metricsData.research.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 hover-glow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-peptide-500/20 to-protein-500/20">
                    <Icon className="w-6 h-6 text-peptide-400" />
                  </div>
                  <span className="text-xs text-green-400 font-semibold">{metric.change}</span>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  <AnimatedNumber value={metric.value} />
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Detailed metrics tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 rounded-2xl"
        >
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['overview', 'collaboration', 'timeline'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-peptide-500 to-protein-500 text-white' 
                    : 'glass-card hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[300px]">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Research Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm text-gray-400 mb-4">Publication Distribution</h4>
                    <div className="space-y-3">
                      {[
                        { journal: 'Nature/Science', count: 8, percentage: 18 },
                        { journal: 'Cell Press', count: 12, percentage: 27 },
                        { journal: 'PNAS/JACS', count: 15, percentage: 33 },
                        { journal: 'Other High Impact', count: 10, percentage: 22 },
                      ].map((item) => (
                        <div key={item.journal}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{item.journal}</span>
                            <span className="gradient-text font-semibold">{item.count}</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-peptide-500 to-protein-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: isInView ? `${item.percentage}%` : '0%' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-4">Research Areas</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { area: 'Antimicrobial', value: '35%' },
                        { area: 'Drug Delivery', value: '25%' },
                        { area: 'Biomaterials', value: '20%' },
                        { area: 'Immunotherapy', value: '20%' },
                      ].map((item) => (
                        <div key={item.area} className="glass-card p-3 rounded-lg">
                          <div className="text-xs text-gray-500">{item.area}</div>
                          <div className="text-lg font-semibold gradient-text">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'collaboration' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Global Collaboration Network</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {metricsData.collaboration.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">
                        <AnimatedNumber value={item.value} />
                      </div>
                      <div className="text-xs text-gray-400">{item.suffix}</div>
                      <div className="text-sm text-gray-300 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-peptide-500/10 to-protein-500/10 rounded-lg">
                  <p className="text-sm text-gray-300 text-center">
                    Collaborating with leading institutions including MIT, Stanford, Oxford, ETH Zurich, and Max Planck Institutes
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Research Timeline</h3>
                <div className="space-y-4">
                  {metricsData.impact.map((year, index) => (
                    <motion.div
                      key={year.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-lg font-semibold w-16">{year.year}</div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-400">Citations</span>
                          <span className="text-sm gradient-text font-semibold">{year.citations}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-peptide-500 to-protein-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: isInView ? `${(year.citations / 700) * 100}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 w-20 text-right">
                        {year.publications} papers
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Metrics