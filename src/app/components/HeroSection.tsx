'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Terminal as TerminalIcon, 
  Sparkles, 
  GitBranch, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Database,
  ShieldCheck,
  Code2
} from 'lucide-react';

export default function HeroSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].hero;

  const [activeCodeTab, setActiveCodeTab] = useState<'architecture' | 'nutrition' | 'mcp'>('architecture');

  const codeSnippets = {
    architecture: `// Service Layer: Isolated Business Logic Architecture
// Frontend sends IDs only -> Zero price tampering risk
export class OrderPricingService {
  public async calculateTotal(order: CustomOrderDTO): Promise<PricingSummary> {
    const mealSizes = await this.db.getMealSizes(order.itemIds);
    const proteinUpcharges = this.computeProteinExtras(order.proteins);
    const deliveryZone = await this.zoneService.resolveCutoff(order.postcode);

    return {
      subtotal: this.sumBase(mealSizes) + proteinUpcharges,
      deliveryFee: deliveryZone.fee,
      canModifyUntil: deliveryZone.cutoffTimestamp,
      validated: true
    };
  }
}`,
    nutrition: `// Custom Meal Builder: Real-Time Dynamic Macro Calculator
interface NutritionProfile {
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
  totalCalories: number;
}

export function computeLiveMacros(ingredients: SelectedIngredient[]): NutritionProfile {
  return ingredients.reduce((acc, curr) => {
    const factor = curr.selectedWeightGrams / 100;
    return {
      proteinGrams: acc.proteinGrams + (curr.macrosPer100g.protein * factor),
      carbsGrams: acc.carbsGrams + (curr.macrosPer100g.carbs * factor),
      fatsGrams: acc.fatsGrams + (curr.macrosPer100g.fats * factor),
      totalCalories: acc.totalCalories + (curr.macrosPer100g.calories * factor)
    };
  }, { proteinGrams: 0, carbsGrams: 0, fatsGrams: 0, totalCalories: 0 });
}`,
    mcp: `// Model Context Protocol (MCP) Server for WHMCS
// Connects AI Desktop Assistants to Enterprise Billing DBs
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "query_client_financials",
    description: "Calculates MRR, active addons & churn risk",
    inputSchema: zodToJsonSchema(ClientQuerySchema)
  }]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { clientId, dateRange } = request.params.arguments;
  return await MetricsEngine.getTelemetry(clientId, dateRange);
});`
  };

  const statCards = [
    { value: '2,500+', label: t.stats.commits, sub: t.stats.commitsSub, icon: GitBranch, color: 'text-cyan-500' },
    { value: '1,596', label: t.stats.food4fitness, sub: t.stats.food4fitnessSub, icon: Layers, color: 'text-emerald-500' },
    { value: '100+', label: t.stats.pages, sub: t.stats.pagesSub, icon: Database, color: 'text-indigo-500' },
    { value: '97%+', label: t.stats.aeo, sub: t.stats.aeoSub, icon: Cpu, color: 'text-amber-500' },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-glow-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                {t.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {t.titleLine1}{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-emerald-600 to-indigo-600 dark:from-cyan-400 dark:via-emerald-400 dark:to-indigo-400">
                  {t.titleLine2}
                </span>
              </h1>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t.viewProjectsBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-800 dark:text-white border border-slate-200 dark:border-white/[0.1] font-semibold text-sm transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-cyan-500" />
                <span>{t.viewMatrixBtn}</span>
              </a>

              <a
                href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] font-medium text-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>{t.downloadCvBtn}</span>
              </a>
            </div>

            {/* Micro Badges (Stack Summary) */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">CORE STACK:</span>
              {['Next.js 15', 'React 19', 'TypeScript', 'WordPress / WooCommerce', 'PHP 8.2', 'Docker', 'MCP / AI'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Interactive Architecture Preview Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-slate-800 bg-dark-950 shadow-2xl overflow-hidden text-slate-200 font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400 flex items-center gap-1">
                    <TerminalIcon className="w-3 h-3 text-cyan-400" />
                    felipe@production-stack:~
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LIVE SYS
                </span>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex items-center border-b border-slate-800/80 bg-dark-900/60 px-2 pt-1">
                <button
                  onClick={() => setActiveCodeTab('architecture')}
                  className={`px-3 py-1.5 text-[11px] font-mono rounded-t-lg transition-colors ${
                    activeCodeTab === 'architecture'
                      ? 'bg-dark-950 text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  OrderService.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab('nutrition')}
                  className={`px-3 py-1.5 text-[11px] font-mono rounded-t-lg transition-colors ${
                    activeCodeTab === 'nutrition'
                      ? 'bg-dark-950 text-emerald-400 border-t-2 border-emerald-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  MealBuilder.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab('mcp')}
                  className={`px-3 py-1.5 text-[11px] font-mono rounded-t-lg transition-colors ${
                    activeCodeTab === 'mcp'
                      ? 'bg-dark-950 text-indigo-400 border-t-2 border-indigo-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  McpServer.ts
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 overflow-x-auto max-h-[320px] bg-dark-950 text-[11.5px] leading-relaxed text-slate-300">
                <pre>
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2 bg-dark-900 border-t border-slate-800 flex items-center justify-between text-[10.5px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Type-Safe & Sanitized</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-cyan-400">TypeScript 5.6</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Proof In Production - Stat Counters Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {t.proofOfWork}
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm hover:border-slate-300 dark:hover:border-white/[0.15] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
