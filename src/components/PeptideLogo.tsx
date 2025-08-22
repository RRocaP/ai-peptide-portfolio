import { motion } from 'framer-motion'

const PeptideLogo = ({ size = 40 }: { size?: number }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        {/* Gradients for the peptide structure */}
        <linearGradient id="peptideGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
          <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
          <stop offset="100%" stopColor="#facc15" stopOpacity="0.8" />
        </linearGradient>
        
        <linearGradient id="peptideGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d946ef" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Pattern for molecular structure */}
        <pattern id="molecularGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#0ea5e9" opacity="0.3"/>
        </pattern>
      </defs>

      {/* Background circle with molecular grid */}
      <circle cx="50" cy="50" r="48" fill="url(#molecularGrid)" opacity="0.1"/>
      
      {/* Main peptide helix structure */}
      <g transform="translate(50, 50)">
        {/* First strand of the helix */}
        <motion.path
          d="M -20,-30 Q -15,-20 -10,-10 T -5,10 Q 0,20 5,30"
          fill="none"
          stroke="url(#peptideGrad1)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Second strand of the helix */}
        <motion.path
          d="M 20,-30 Q 15,-20 10,-10 T 5,10 Q 0,20 -5,30"
          fill="none"
          stroke="url(#peptideGrad2)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
        
        {/* Peptide bonds (horizontal connections) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <line x1="-10" y1="-20" x2="10" y2="-20" stroke="#d946ef" strokeWidth="1.5" opacity="0.6"/>
          <line x1="-7" y1="-10" x2="7" y2="-10" stroke="#d946ef" strokeWidth="1.5" opacity="0.6"/>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#d946ef" strokeWidth="1.5" opacity="0.6"/>
          <line x1="-7" y1="10" x2="7" y2="10" stroke="#d946ef" strokeWidth="1.5" opacity="0.6"/>
          <line x1="-10" y1="20" x2="10" y2="20" stroke="#d946ef" strokeWidth="1.5" opacity="0.6"/>
        </motion.g>
        
        {/* Amino acid nodes */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <circle cx="-10" cy="-20" r="4" fill="#0ea5e9" opacity="0.9"/>
          <circle cx="10" cy="-20" r="4" fill="#0ea5e9" opacity="0.9"/>
          <circle cx="-5" cy="0" r="4" fill="#d946ef" opacity="0.9"/>
          <circle cx="5" cy="0" r="4" fill="#d946ef" opacity="0.9"/>
          <circle cx="-10" cy="20" r="4" fill="#facc15" opacity="0.9"/>
          <circle cx="10" cy="20" r="4" fill="#facc15" opacity="0.9"/>
        </motion.g>
        
        {/* Central AI core representation */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="0" cy="0" r="8" fill="none" stroke="#facc15" strokeWidth="1" opacity="0.4" strokeDasharray="2 2"/>
        </motion.g>
        
        {/* Floating particles for AI effect */}
        <motion.circle
          cx="-25"
          cy="0"
          r="2"
          fill="#0ea5e9"
          opacity="0.6"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="25"
          cy="0"
          r="2"
          fill="#d946ef"
          opacity="0.6"
          animate={{
            y: [10, -10, 10],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </g>
      
      {/* Outer ring suggesting molecular boundary */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#peptideGrad1)" strokeWidth="0.5" opacity="0.3"/>
    </motion.svg>
  )
}

export default PeptideLogo