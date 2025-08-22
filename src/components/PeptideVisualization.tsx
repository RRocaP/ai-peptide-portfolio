import { Canvas } from '@react-three/fiber'
import { OrbitControls, Torus, Sphere } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const PeptideChain = () => {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  const aminoAcids = [
    { position: [-3, 0, 0], color: '#0ea5e9' },
    { position: [-1.5, 0.5, 0], color: '#d946ef' },
    { position: [0, -0.3, 0], color: '#facc15' },
    { position: [1.5, 0.5, 0], color: '#0ea5e9' },
    { position: [3, 0, 0], color: '#d946ef' },
  ]

  return (
    <group ref={groupRef}>
      {/* Amino acid spheres */}
      {aminoAcids.map((aa, index) => (
        <group key={index}>
          <Sphere position={aa.position as [number, number, number]} args={[0.4, 32, 32]}>
            <meshStandardMaterial color={aa.color} metalness={0.6} roughness={0.2} />
          </Sphere>
          {/* Connecting bonds */}
          {index < aminoAcids.length - 1 && (
            <mesh position={[
              (aa.position[0] + aminoAcids[index + 1].position[0]) / 2,
              (aa.position[1] + aminoAcids[index + 1].position[1]) / 2,
              (aa.position[2] + aminoAcids[index + 1].position[2]) / 2
            ]}>
              <cylinderGeometry args={[0.05, 0.05, 1.8]} />
              <meshStandardMaterial color="#666" metalness={0.3} roughness={0.5} />
            </mesh>
          )}
        </group>
      ))}
      
      {/* Alpha helix representation */}
      <Torus args={[2, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#d946ef" 
          metalness={0.8} 
          roughness={0.2} 
          opacity={0.3} 
          transparent 
        />
      </Torus>
    </group>
  )
}

const InteractiveDisplay = () => {
  const [activeTab, setActiveTab] = useState('structure')
  
  const tabs = [
    { id: 'structure', label: 'Structure', description: 'Interactive 3D peptide structure visualization' },
    { id: 'sequence', label: 'Sequence', description: 'Amino acid sequence and properties' },
    { id: 'properties', label: 'Properties', description: 'Physicochemical characteristics' },
    { id: 'activity', label: 'Activity', description: 'Biological activity predictions' },
  ]

  const sequenceData = 'MKALVLIALL GFLLAASGRA GSHSMKYFFR VKQEKKRNAC IQDYCAQLKQ'
  
  return (
    <div className="glass-card p-6 rounded-2xl">
      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id 
                ? 'bg-gradient-to-r from-peptide-500 to-protein-500 text-white' 
                : 'glass-card hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {activeTab === 'structure' && (
          <div>
            <p className="text-gray-400 mb-4">Rotate to explore the 3D structure</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-3 rounded-lg">
                <div className="text-xs text-gray-500">Helix Content</div>
                <div className="text-lg font-semibold gradient-text">42%</div>
              </div>
              <div className="glass-card p-3 rounded-lg">
                <div className="text-xs text-gray-500">Beta Sheet</div>
                <div className="text-lg font-semibold gradient-text">28%</div>
              </div>
              <div className="glass-card p-3 rounded-lg">
                <div className="text-xs text-gray-500">Random Coil</div>
                <div className="text-lg font-semibold gradient-text">30%</div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'sequence' && (
          <div>
            <p className="text-gray-400 mb-4">Primary amino acid sequence</p>
            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg overflow-x-auto">
              <span className="text-peptide-400">{sequenceData}</span>
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <div>Length: <span className="gradient-text font-semibold">50 AA</span></div>
              <div>MW: <span className="gradient-text font-semibold">5.4 kDa</span></div>
              <div>pI: <span className="gradient-text font-semibold">9.8</span></div>
            </div>
          </div>
        )}
        
        {activeTab === 'properties' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Hydrophobicity</span>
              <div className="w-32 bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-peptide-500 to-protein-500 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Stability</span>
              <div className="w-32 bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-peptide-500 to-protein-500 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Solubility</span>
              <div className="w-32 bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-peptide-500 to-protein-500 h-2 rounded-full" style={{width: '72%'}}></div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'activity' && (
          <div>
            <p className="text-gray-400 mb-4">Predicted biological activities</p>
            <div className="space-y-2">
              <div className="glass-card p-3 rounded-lg flex justify-between items-center">
                <span>Antimicrobial</span>
                <span className="text-green-400 font-semibold">98% confidence</span>
              </div>
              <div className="glass-card p-3 rounded-lg flex justify-between items-center">
                <span>Anti-inflammatory</span>
                <span className="text-yellow-400 font-semibold">76% confidence</span>
              </div>
              <div className="glass-card p-3 rounded-lg flex justify-between items-center">
                <span>Cell-penetrating</span>
                <span className="text-orange-400 font-semibold">45% confidence</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'

const PeptideVisualization = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-peptide-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-protein-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-peptide-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Interactive Visualization
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Peptide
            <span className="gradient-text"> Architecture</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interact with 3D molecular structures and analyze their properties in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* 3D Visualization */}
          <div className="glass-card p-6 rounded-2xl h-[500px]">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
                <PeptideChain />
                <OrbitControls enableZoom={true} autoRotate={false} />
              </Suspense>
            </Canvas>
          </div>

          {/* Interactive controls */}
          <InteractiveDisplay />
        </motion.div>
      </div>
    </section>
  )
}

export default PeptideVisualization