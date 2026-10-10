import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, Code, Zap, Target } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import GuideSection from './components/GuideSection';
import SimulationTimeline from './components/SimulationTimeline';
import CodeBlock from './components/CodeBlock';
import Footer from './components/Footer';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('introduccion');
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'introduccion',
      title: 'Introducción',
      icon: BookOpen,
      content: 'Conceptos fundamentales de dinámica molecular'
    },
    {
      id: 'protocolo',
      title: 'Protocolo Experimental',
      icon: Target,
      content: 'Pasos del flujo de trabajo integrado'
    },
    {
      id: 'ejecucion',
      title: 'Ejecución Paso a Paso',
      icon: Code,
      content: 'Detalles técnicos de cada fase'
    },
    {
      id: 'monitoreo',
      title: 'Monitoreo en Tiempo Real',
      icon: Zap,
      content: 'Seguimiento de simulaciones activas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
      />

      <Header />

      <div className="flex">
        {/* Sidebar Navigation */}
        <motion.aside
          className={`fixed left-0 top-20 bottom-0 w-64 bg-slate-800/95 backdrop-blur border-r border-slate-700 overflow-y-auto z-40 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:z-auto transition-transform duration-300`}
        >
          <Navigation
            sections={sections}
            currentSection={currentSection}
            onSectionChange={(id) => {
              setCurrentSection(id);
              setSidebarOpen(false);
            }}
          />
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-24 left-4 z-30 p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-16"
            >
              <TableOfContents sections={sections} />
            </motion.div>

            {/* Simulation Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-16 p-8 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Flujo de Simulación</h2>
              <SimulationTimeline />
            </motion.div>

            {/* Main Content Sections */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {currentSection === 'introduccion' && (
                  <GuideSection>
                    <h2 className="text-3xl font-bold mb-6 text-white">Introducción</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Este documento surge de la experiencia práctica trabajando con simulaciones de dinámica molecular
                      de proteínas complejas. Durante la optimización de un pipeline de <em>virtual screening</em> dirigido
                      a la proteína de fusión del virus respiratorio sincitial (RSV-F), enfrentamos varios desafíos técnicos
                      que forzaron innovaciones en la automatización y el monitoreo de simulaciones.
                    </p>

                    <div className="bg-slate-800/50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-blue-400">Contexto del Proyecto</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 font-bold">•</span>
                          <span><strong>Sistema biológico:</strong> Proteína F de RSV en conformaciones prefusión y postfusión</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 font-bold">•</span>
                          <span><strong>Ligandos:</strong> 10 moléculas pequeñas contra 5 sitios de unión distintos</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 font-bold">•</span>
                          <span><strong>Objetivo:</strong> Evaluar estabilidad de complejos proteína-ligando mediante dinámicas de 10 ns</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Justificación Metodológica</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      La dinámica molecular clásica proporciona resolución atómica de trayectorias a temperatura fisiológica.
                      Para sistemas proteicos de ~500 residuos, 10 ns permite:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
                      <li>Equilibración completa de la estructura cristalográfica</li>
                      <li>Exploración del espacio conformacional local</li>
                      <li>Análisis de estabilidad de interacciones ligando-proteína</li>
                      <li>Generación de conjuntos de estructuras para docking iterativo</li>
                    </ol>

                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 p-6 rounded-lg">
                      <p className="text-slate-200">
                        <strong className="text-green-400">💡 Nota:</strong> La aceleración GPU (NVIDIA CUDA) reduce tiempos
                        de ~3-5 horas a ~30-60 minutos, haciendo viable el screening de múltiples ligandos en paralelo.
                      </p>
                    </div>
                  </GuideSection>
                )}

                {currentSection === 'protocolo' && (
                  <GuideSection>
                    <h2 className="text-3xl font-bold mb-6 text-white">Protocolo Experimental</h2>
                    <p className="text-slate-300 mb-6">
                      El protocolo integrado sigue una secuencia lógica desde preparación hasta producción de datos:
                    </p>

                    <div className="space-y-4">
                      <motion.div
                        className="bg-slate-800 border border-slate-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                      >
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Pasos 1-2: Preparación</h3>
                        <p className="text-slate-400 text-sm">Extracción de proteína y parametrización</p>
                      </motion.div>

                      <motion.div
                        className="bg-slate-800 border border-slate-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                      >
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Pasos 3-5: Solvatación</h3>
                        <p className="text-slate-400 text-sm">Caja cúbica, solvatación TIP3P, neutralización de carga</p>
                      </motion.div>

                      <motion.div
                        className="bg-slate-800 border border-slate-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                      >
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Pasos 6-8: Equilibración</h3>
                        <p className="text-slate-400 text-sm">Minimización (5k steps), NVT (50k steps), NPT (50k steps)</p>
                      </motion.div>

                      <motion.div
                        className="bg-slate-800 border border-slate-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                      >
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Paso 9: Producción MD</h3>
                        <p className="text-slate-400 text-sm">5,000,000 steps = 10 ns de colección de datos científicos</p>
                      </motion.div>

                      <motion.div
                        className="bg-slate-800 border border-slate-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                      >
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Paso 10: Análisis</h3>
                        <p className="text-slate-400 text-sm">RMSD, RMSF, distancias y visualización de trayectorias</p>
                      </motion.div>
                    </div>
                  </GuideSection>
                )}

                {currentSection === 'ejecucion' && (
                  <GuideSection>
                    <h2 className="text-3xl font-bold mb-6 text-white">Ejecución Paso a Paso</h2>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">PASO 1-2: Preparación de Archivos</h3>
                    <p className="text-slate-300 mb-4">
                      La preparación comienza con la extracción de la proteína del archivo PDB complejo:
                    </p>

                    <CodeBlock code={`# Crear directorio de trabajo
mkdir -p ~/simulations/rsvf_screening
cd ~/simulations/rsvf_screening

# Copiar PDB
cp /datos/complex_lumacaftor.pdb ./complex_raw.pdb

# Extraer proteína (cadena F únicamente)
grep "^ATOM.*F  " complex_raw.pdb > protein.pdb
tail -1 complex_raw.pdb >> protein.pdb

# Validación: contar átomos
echo "Proteína contiene $(grep -c '^ATOM' protein.pdb) átomos"
# Expected: ~500-600 átomos para RSV-F`}
                      language="bash"
                    />

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">PASO 3: Parametrización con pdb2gmx</h3>
                    <p className="text-slate-300 mb-4">
                      <strong>Nota Crítica:</strong> pdb2gmx presenta un menú interactivo. La solución es usar piping con echo:
                    </p>

                    <CodeBlock code={`# Versión CORRECTA (automática con echo piping):
echo "1" | gmx pdb2gmx -f protein.pdb -o protein.gro -p topol.top \\
    -ff amber99sb-ildn -water tip3p -ignh

# El "echo 1" selecciona opción 1 (amber99sb-ildn) automáticamente
# Output esperado:
# "Total mass: 63453.4 a.m.u."
# "Total charge: -0.000 e"`}
                      language="bash"
                    />

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">PASO 7: Minimización de Energía</h3>
                    <CodeBlock code={`cat > em.mdp << 'EOF'
integrator          = steep
nsteps              = 5000
emtol               = 1000.0
emstep              = 0.01
cutoff-scheme       = Verlet
nstlist             = 10
coulombtype         = PME
rcoulomb            = 1.0
rvdw                = 1.0
pcoupl              = No
tcoupl              = No
nstenergy           = 100
nstlog              = 100
nstxout             = 100
constraints         = h-bonds
constraint-algorithm = lincs
lincs-iter          = 1
lincs-order         = 4
EOF

gmx grompp -f em.mdp -c complex_ions.gro -p topol.top \\
    -o em.tpr -maxwarn 5

gmx mdrun -deffnm em -nb gpu -pme gpu -v

# Tiempo esperado: 1-2 minutos en V100`}
                      language="bash"
                    />
                  </GuideSection>
                )}

                {currentSection === 'monitoreo' && (
                  <GuideSection>
                    <h2 className="text-3xl font-bold mb-6 text-white">Monitoreo en Tiempo Real</h2>
                    <p className="text-slate-300 mb-6">
                      Durante la producción MD (~1 hora), es crítico monitorear el progreso sin interferir.
                      GROMACS bufferea la salida, así que usamos detección de archivo:
                    </p>

                    <CodeBlock code={`#!/bin/bash
# monitor_md.sh

PROJECT_DIR="."
EDR_FILE="md.edr"

while true; do
    clear
    echo "📊 MONITOREO MD - GROMACS"
    echo "════════════════════════════════════════════════════════════════"

    if [ -f "$EDR_FILE" ]; then
        # Archivo .edr crece en proporción a steps ejecutados
        current_mb=$(stat -c%s "$EDR_FILE" | awk '{printf "%.1f", $1/1048576}')

        # Estimación: ~60.7 MB para 5M steps
        steps_est=$(($(stat -c%s "$EDR_FILE") / 12144))
        total_steps=5000000
        percent=$((steps_est * 100 / total_steps))

        # Nanosegundos: 2 fs/step * 1e-6 ns/fs
        ns=$(echo "scale=3; $steps_est * 0.000002" | bc)

        echo "Steps: $steps_est / $total_steps ($percent%)"
        echo "Tiempo: $ns / 10.000 ns"
        echo "Archivo md.edr: ${current_mb} MB"
    fi

    # Marker de terminación
    if [ -f "md.xtc" ]; then
        xtc_size=$(ls -lh md.xtc | awk '{print $5}')
        echo "✅ COMPLETADA - md.xtc: $xtc_size"
        break
    fi

    sleep 5
done`}
                      language="bash"
                    />

                    <p className="text-slate-300 mt-6">
                      <strong>Uso:</strong>
                    </p>
                    <CodeBlock code={`bash monitor_md.sh &
gmx mdrun -deffnm md -nb gpu -pme gpu -pin on -v`}
                      language="bash"
                    />
                  </GuideSection>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
