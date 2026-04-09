import React, { useState, useEffect, useCallback } from 'react';
import {
    Activity, Shield, TrendingUp, Clock, AlertTriangle,
    Brain, UserCheck, ArrowRight, ActivitySquare, CheckCircle2,
    ChevronLeft, ChevronRight, Stethoscope, Users, HeartPulse,
    Crosshair, Map, Pill, Thermometer, ClipboardCheck,
    BadgeAlert, Sparkles, LineChart, HandHeart,
    Baby, AlertCircle, Phone, Syringe, Mic, Droplets, Eye, Zap, Flame, Maximize, ChevronUp, Lock, CheckCircle, FileText, ShoppingCart, Clipboard, X, Check, Package, Search, Plus, ArrowDown
} from 'lucide-react';
import mariaImg from './Media/Lanscape dark.jpeg';
import step1 from './Media/step1.png';
import step2 from './Media/step2.png';
import step3 from './Media/step3.png';
import bupSimIcon from './Media/apple-touch-icon.png';

const SlideViewer = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const slides = [
        <TitleSlide key="1" />,
        <LearningObjectivesSlide key="2" />,
        <WhyStartInEDSlide key="3" />,
        <EmergencyDepartmentRealitySlide key="4" />,
        <OUDDiagnosisSlide key="5" />,
        <WhatIsBuprenorphineSlide key="6" />,
        <ReceptorPharmacologySlide key="7" />,
        <BupVsMethadoneSlide key="8" />,
        <AssessmentIntertitleSlide key="8.5" />,
        <RecognizingWithdrawalSlide key="10" />,
        <WithdrawalTimelinesSlide key="11" />,
        <FentanylGameChangerSlide key="9" />,
        <PreInductionChecklistSlide key="12" />,
        <COWSSlide key="13" />,
        <ObjectiveSignsSlide key="14" />,
        <InductionPathwaysSlide key="15" />,
        <MaintenanceSelectionSlide key="16.5" />,
        <ComplicatingMethadoneSlide key="17" />,
        <ComplicatingPregnancyPainSlide key="18" />,
        <BerneseProtocolSlide key="19" />,
        <PostNaloxoneSlide key="20" />,
        <PrecipitatedWithdrawalBasicsSlide key="21" />,
        <UndertreatedVsPrecipitatedSlide key="22" />,
        <RedZoneSlide key="23" />,
        <DischargeDosingSlide key="24" />,
        <NaloxonePrescriptionSlide key="24.5" />,
        <HarmReductionSlide key="25" />,
        <SummarySlide key="26" />,
        <FinalHeuristicsSlide key="26.1" />,
        <FromProtocolToPracticeSlide key="26.2" />,
        <BupSimIntroSlide key="27" />,
        <MeetMariaSlide key="28" />,
        <AIVoiceSlide key="29" />,
        <ClinicalInterfaceSlide key="30" />,
        <COWSAssessmentExampleSlide key="30.1" />,
        <QuickOrderExampleSlide key="30.2" />,
        <PersonalizedDebriefSlide key="31" />,
        <AnalyticsSlide key="32" />,
        <SimulatorStep1Slide key="32.1" />,
        <SimulatorStep2Slide key="32.2" />,
        <SimulatorStep3Slide key="32.3" />,
        <ThankYouSlide key="33" />
    ];

    return (
        <div id="presentation-container" className="flex flex-col h-screen max-h-[100vh] w-full bg-slate-950 text-slate-100 font-sans overflow-hidden shadow-2xl">
            <div className="flex-1 overflow-y-auto p-6 md:p-12 relative flex flex-col justify-center">
                <div key={currentSlide} className="animate-in fade-in duration-300 h-full w-full flex flex-col justify-center">
                    {slides[currentSlide]}
                </div>
            </div>

            <div className="h-16 bg-slate-900 border-t border-slate-800 flex items-center justify-between px-6 shrink-0">
                <div className="text-slate-400 text-sm font-medium tracking-wider w-32">
                    {currentSlide + 1} / {slides.length}
                </div>

                <div className="hidden md:flex flex-1 mx-8 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-cyan-500 transition-all duration-300 ease-out"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    />
                </div>

                <div className="flex gap-3 w-32 justify-end">
                    <button onClick={toggleFullscreen} title="Toggle Fullscreen" className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300">
                        <Maximize size={22} />
                    </button>
                    <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-300">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg disabled:opacity-30 disabled:hover:bg-cyan-600 transition-colors flex items-center gap-2 font-medium">
                        Next <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

/* --- SLIDE 1 --- */
const TitleSlide = () => (
    <div className="max-w-4xl mx-auto w-full">
        <div className="w-20 h-1 bg-cyan-500 mb-8 rounded-full"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Opioid Use Disorder <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                in the Emergency Dept
            </span>
        </h1>
        <h2 className="text-xl md:text-3xl text-slate-400 font-light mb-12">
            Bridging the Gap: Clinical Theory, Edge Cases, and Simulated Practice
        </h2>
        <div className="flex items-center gap-4 mt-auto pt-8 border-t border-slate-800">
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400">
                <Stethoscope size={24} />
            </div>
            <div>
                <p className="font-semibold text-lg">Bryan English, MD</p>
                <p className="text-slate-500">Department of Emergency Medicine · Stony Brook Medicine</p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 2 --- */
const LearningObjectivesSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8">Learning Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { n: "1", t: "Recognize OUD", d: "Identify OUD using a pattern-based approach to DSM-5 criteria in the ED." },
                { n: "2", t: "Assess Readiness", d: "Evaluate withdrawal status & apply the pre-induction checklist." },
                { n: "3", t: "Initiate Treatment", d: "Execute standard & rapid induction protocols, including fentanyl cases." },
                { n: "4", t: "Manage Complications", d: "Differentiate undertreated from precipitated withdrawal & apply the 90-min bundle." },
                { n: "5", t: "Plan Disposition", d: "Develop a maintenance and discharge plan ensuring continuity of care." }
            ].map((obj, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col hover:border-cyan-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xl mb-4 shrink-0">{obj.n}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{obj.t}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{obj.d}</p>
                </div>
            ))}
        </div>
    </div>
);

/* --- SLIDE 3 --- */
const EmergencyDepartmentRealitySlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">The Emergency Department Reality</h2>
            <p className="text-slate-400 text-lg">Substance Use Disorder (SUD) is a massive, often hidden burden.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="text-6xl font-black text-cyan-400 mb-4">2-3%</div>
                <h3 className="text-2xl font-bold text-white mb-2">Opioid Visits</h3>
                <p className="text-slate-400">Of all ER visits involve opioids.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="text-6xl font-black text-purple-400 mb-4">18-25%</div>
                <h3 className="text-2xl font-bold text-white mb-2">Alcohol Visits</h3>
                <p className="text-slate-400">Of all ER visits involve alcohol.</p>
            </div>
        </div>
        <div className="mt-8 bg-red-500/10 border border-red-500/30 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-red-400">SUD is Massively Underdiagnosed</h3>
            <p className="text-slate-300 mt-2">The ED is the critical intervention point to identify and begin treating these patients before they are lost to follow-up.</p>
        </div>
    </div>
);

/* --- SLIDE 4 --- */
const WhyStartInEDSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-2">Why Start in the ED?</h2>
        <p className="text-slate-400 mb-8 text-lg">Buprenorphine initiation is incredibly high-yield.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10"><ActivitySquare size={80} /></div>
                <div className="text-5xl font-black text-cyan-400 mb-2">&gt;80,000</div>
                <div className="text-xl font-semibold text-white mb-1">Overdose Deaths</div>
                <p className="text-slate-400">Driven largely by Fentanyl in 2023.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10"><AlertTriangle size={80} /></div>
                <div className="text-5xl font-black text-cyan-400 mb-2">19%</div>
                <div className="text-xl font-semibold text-white mb-1">The Treatment Gap</div>
                <p className="text-slate-400">Only 19% of patients with OUD receive life-saving medication.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex items-center gap-6">
                <div className="bg-slate-800 p-4 rounded-xl text-cyan-400 shrink-0"><UserCheck size={32} /></div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">NNT = 2</div>
                    <p className="text-slate-400">Number needed to treat to retain a patient in treatment.</p>
                </div>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex items-center gap-6">
                <div className="bg-slate-800 p-4 rounded-xl text-cyan-400 shrink-0"><Shield size={32} /></div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">NNT = 3</div>
                    <p className="text-slate-400">Number needed to treat to stop illicit drug use entirely.</p>
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 5 --- */
const OUDDiagnosisSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">OUD Diagnosis (DSM-5 Criteria)</h2>
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-full font-medium">
                Heuristic: Recognize the clinical pattern. (≥2 criteria in 12 months = OUD)
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex gap-4">
                <Brain className="text-purple-400 shrink-0" size={32} />
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Impaired Control</h3>
                    <p className="text-slate-400 text-sm">Using more/longer than intended, or failed attempts to cut down.</p>
                </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex gap-4">
                <Users className="text-blue-400 shrink-0" size={32} />
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Social Impairment</h3>
                    <p className="text-slate-400 text-sm">Failure to fulfill major role obligations, or giving up important activities.</p>
                </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex gap-4">
                <AlertTriangle className="text-orange-400 shrink-0" size={32} />
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Risky Use</h3>
                    <p className="text-slate-400 text-sm">Continued use in physically hazardous situations despite consequences.</p>
                </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex gap-4">
                <Pill className="text-emerald-400 shrink-0" size={32} />
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Pharmacologic</h3>
                    <p className="text-slate-400 text-sm">Tolerance (needing more) and Withdrawal (symptoms when stopping).</p>
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 6 --- */
const WhatIsBuprenorphineSlide = () => (
    <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-4">What is Buprenorphine?</h2>
        <p className="text-xl text-slate-400 mb-12">The cornerstone of medication-assisted treatment for OUD.</p>
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 inline-block text-left w-full max-w-3xl mx-auto">
            <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-white text-lg">Safe for ED Initiation</h4>
                        <p className="text-slate-400">Ceiling effect means exceptionally low overdose risk compared to full agonists.</p>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-white text-lg">Sublingual Formulations</h4>
                        <p className="text-slate-400">Administered as SL tablet or film. Often compounded with naloxone (Suboxone) to deter IV misuse.</p>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-white text-lg">X-Waiver Eliminated (2023)</h4>
                        <p className="text-slate-400">Any provider with a standard DEA license can now prescribe it for OUD.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

/* --- SLIDE 7 --- */
const ReceptorPharmacologySlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Receptor Pharmacology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border-l-4 border-cyan-500 p-8 rounded-2xl">
                <Shield size={48} className="text-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">High Affinity (Blockade)</h3>
                <p className="text-slate-400 mb-4">Buprenorphine binds to the &mu;-opioid receptor with greater affinity than nearly all other opioids (including fentanyl).</p>
                <div className="bg-slate-950 p-4 rounded text-sm text-cyan-400 font-mono">Result: Displaces existing opioids.</div>
            </div>
            <div className="bg-slate-900 border-l-4 border-emerald-500 p-8 rounded-2xl">
                <Activity size={48} className="text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Partial Activity (Ceiling)</h3>
                <p className="text-slate-400 mb-4">Despite high binding, it only partially activates the receptor (40-50%).</p>
                <div className="bg-slate-950 p-4 rounded text-sm text-emerald-400 font-mono">Result: Relieves craving without respiratory depression.</div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 8 --- */
const BupVsMethadoneSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Buprenorphine vs. Methadone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border-2 border-cyan-500/30">
                <h3 className="text-2xl font-bold text-white mb-2">Buprenorphine</h3>
                <p className="text-cyan-400 font-bold tracking-wide text-xs uppercase mb-6">Partial Agonist</p>
                <ul className="space-y-4">
                    <li className="text-slate-300"><strong className="text-white">Ceiling Effect:</strong> High safety margin.</li>
                    <li className="text-slate-300"><strong className="text-white">Blockade Effect:</strong> Prevents other opioids from binding.</li>
                    <li className="text-slate-300"><strong className="text-white">ED Accessible:</strong> Prescribable immediately.</li>
                </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800">
                <h3 className="text-2xl font-bold text-slate-300 mb-2">Methadone</h3>
                <p className="text-amber-500 font-bold tracking-wide text-xs uppercase mb-6">Full Agonist</p>
                <ul className="space-y-4">
                    <li className="text-slate-300"><strong className="text-slate-200">No Ceiling Effect:</strong> Linear overdose risk.</li>
                    <li className="text-slate-300"><strong className="text-slate-200">High Synergy:</strong> Dangerous with alcohol/benzos.</li>
                    <li className="text-slate-300"><strong className="text-slate-200">Highly Regulated:</strong> Requires daily clinic visits (OTP).</li>
                </ul>
            </div>
        </div>
    </div>
);

/* --- SLIDE 9 --- */
const FentanylGameChangerSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-red-500">Fentanyl: The Game Changer</h2>
            <p className="text-slate-400 text-lg">Why traditional timelines no longer apply.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-red-500/10 border-4 border-red-500/30 flex items-center justify-center shrink-0">
                <Flame size={64} className="text-red-500" />
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Highly Lipophilic</h3>
                <p className="text-slate-300 leading-relaxed">Unlike heroin, fentanyl distributes massively into adipose (fat) tissue. It creates a "depot" effect, slowly leaching back into the bloodstream over days.</p>
                <div className="bg-red-500/20 text-red-400 p-4 rounded-xl border border-red-500/30 font-medium">
                    <strong>Clinical Impact:</strong> Withdrawal onset is wildly unpredictable. Patients can have fentanyl in their system 5+ days after last use.
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 10 --- */
const RecognizingWithdrawalSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Recognizing Withdrawal</h2>
            <p className="text-slate-400 text-lg">Unoccupied receptors put the body into massive sympathetic overdrive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center">
                <HeartPulse className="text-red-400 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">Physical Distress</h4>
                <p className="text-slate-400">Racing heart, elevated BP, sweating, goosebumps, vomiting, diarrhea, severe muscle/joint aches.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center">
                <Brain className="text-purple-400 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">Mental Distress</h4>
                <p className="text-slate-400">Severe anxiety, dysphoria, anhedonia, intense cravings, inability to sit still.</p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 11 --- */
const WithdrawalTimelinesSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Withdrawal Onset Timelines</h2>
        <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl flex items-center gap-6 border-l-4 border-emerald-500">
                <div className="w-40 shrink-0 font-bold text-slate-300 text-lg">Short-Acting<br /><span className="text-sm text-slate-500 font-normal">Heroin, Oxycodone</span></div>
                <div className="flex-1 text-slate-300">Onset starts in <span className="font-bold text-white">8–24 hrs</span> | Peaks at <span className="font-bold text-white">36–72 hrs</span></div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl flex items-center gap-6 border-l-4 border-amber-500">
                <div className="w-40 shrink-0 font-bold text-slate-300 text-lg">Long-Acting<br /><span className="text-sm text-slate-500 font-normal">Methadone</span></div>
                <div className="flex-1 text-slate-300">Onset starts in <span className="font-bold text-white">36–48 hrs</span> | Peaks at <span className="font-bold text-white">72–96 hrs</span></div>
            </div>
            <div className="bg-red-500/10 p-6 rounded-2xl flex items-center gap-6 border-l-4 border-red-500">
                <div className="w-40 shrink-0 font-bold text-red-400 text-lg">The Wildcard<br /><span className="text-sm text-red-500/70 font-normal">Fentanyl</span></div>
                <div className="flex-1 text-slate-300">
                    Unpredictable. Onset can be delayed <span className="font-bold text-white">up to 24-72+ hrs</span>.
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 12 --- */
const PreInductionChecklistSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Pre-Induction Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                <ClipboardCheck size={48} className="text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">1. COWS Score</h3>
                <p className="text-slate-400 text-sm">Must be &ge; 8 (ideally &gt; 12). Reassess prior to each dose.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                <Crosshair size={48} className="text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">2. Objective Signs</h3>
                <p className="text-slate-400 text-sm">Subjective pain is not enough. Must verify visible withdrawal.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                <HandHeart size={48} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">3. Patient Consent</h3>
                <p className="text-slate-400 text-sm">Patient must commit to protocol and understand precipitated risks.</p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 13 --- */
const COWSSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">COWS Score Reference</h2>
            <p className="text-slate-400 text-lg">Clinical Opiate Withdrawal Scale (0-48)</p>
        </div>
        <div className="space-y-4">
            {[
                { range: "5-8", title: "Mild", color: "bg-emerald-500", action: "Monitor — not yet ready" },
                { range: "9-12", title: "Moderate", color: "bg-yellow-500", action: "Approaching threshold" },
                { range: "13-24", title: "Mod-Severe", color: "bg-orange-500", action: "Induction threshold — proceed" },
                { range: "25-48", title: "Severe", color: "bg-red-500", action: "Urgent — initiate immediately" }
            ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-6">
                    <div className={`${item.color} w-16 h-16 shrink-0 rounded-xl flex items-center justify-center text-xl font-bold text-slate-950`}>
                        {item.range}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="bg-slate-950 py-3 px-6 rounded-lg text-right border border-slate-800 w-1/3">
                        <p className="text-slate-200 font-medium text-sm">{item.action}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

/* --- SLIDE 14 --- */
const ObjectiveSignsSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Finding Objective Signs</h2>
            <p className="text-slate-400 text-lg">Do not rely solely on patient self-reporting of "pain" or "anxiety".</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
                <Eye size={40} className="text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white">Pupillary Dilation</h4>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
                <Droplets size={40} className="text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white">Diaphoresis</h4>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
                <Activity size={40} className="text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white">Piloerection</h4>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
                <Thermometer size={40} className="text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white">Restlessness</h4>
            </div>
        </div>
        <div className="mt-8 p-6 bg-cyan-900/20 border border-cyan-500/30 rounded-xl text-center text-cyan-100">
            Wait for at least <strong>two</strong> clear, objective signs of withdrawal before administering the first dose.
        </div>
    </div>
);

/* --- SLIDE 15/16 COMBINED --- */
const InductionPathwaysSlide = () => (
    <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-2">Induction Pathways</h2>
        <div className="flex flex-col items-center mb-8 gap-4">
            <p className="text-slate-400 text-lg">Wait for moderate to severe withdrawal before beginning pathway.</p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium px-8 py-2 rounded-full inline-block">
                The goal is 16 mg on Day 1 for both pathways.
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Standard Pathway */}
            <div className="flex-1 max-w-md bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl text-left flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">Standard Induction</h3>
                <p className="text-slate-400 text-sm mb-8 flex-1">For most patients.</p>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-white">First Dose</h4>
                            <p className="text-slate-400 text-sm">4 mg buprenorphine TAB SOL, Sublingual, X1.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-white">Reassess</h4>
                            <p className="text-slate-400 text-sm">Perform reassessment in 60 minutes.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h4 className="font-bold text-white">Re-evaluate</h4>
                            <p className="text-slate-400 text-sm">Check COWS &amp; symptoms. Look for precipitated withdrawal.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">4</div>
                        <div>
                            <h4 className="font-bold text-white">Subsequent Doses</h4>
                            <p className="text-slate-400 text-sm">4 mg buprenorphine TAB SOL, Sublingual, PRN.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rapid Pathway */}
            <div className="flex-1 max-w-md bg-slate-900 rounded-3xl p-8 border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] text-left flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Rapid Induction</h3>
                <p className="text-cyan-400/70 text-sm mb-8 flex-1">For medically supervised settings (ED or ICU).</p>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-900 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-white">First Dose</h4>
                            <p className="text-slate-400 text-sm">8 mg buprenorphine TAB SOL, Sublingual, X1.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-900 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-white">Reassess</h4>
                            <p className="text-slate-400 text-sm">Perform reassessment in 60 minutes.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-900 flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h4 className="font-bold text-white">Re-evaluate</h4>
                            <p className="text-slate-400 text-sm">Check COWS &amp; symptoms. Look for precipitated withdrawal.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-900 flex items-center justify-center font-bold shrink-0">4</div>
                        <div>
                            <h4 className="font-bold text-white">Subsequent Doses</h4>
                            <p className="text-cyan-400 text-sm font-medium">8 mg buprenorphine TAB SOL, Sublingual, PRN.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-8 py-4 rounded-xl shadow-lg max-w-2xl font-medium">
            Goal: Significant relief in withdrawal symptoms or generally COWS &le; 4, indicating mild symptoms.
        </div>
    </div>
);

/* --- SLIDE 17 --- */
const ComplicatingMethadoneSlide = () => (
    <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-8">Complicating Factor: Methadone</h2>
        <div className="bg-slate-900 border-l-4 border-amber-500 p-10 rounded-2xl border-y border-r border-slate-800 text-left max-w-3xl mx-auto">
            <TrendingUp size={64} className="text-amber-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">High Risk for Precipitated Withdrawal</h3>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Methadone is a long-acting full agonist. Initiating buprenorphine too early will cause a massive, prolonged crash.
            </p>
            <ul className="space-y-4 bg-slate-950 p-6 rounded-xl border border-slate-800">
                <li className="flex gap-3"><ArrowRight className="text-amber-500 shrink-0" /> <span className="text-slate-300">Wait &ge; 48-72 hours since last dose.</span></li>
                <li className="flex gap-3"><ArrowRight className="text-amber-500 shrink-0" /> <span className="text-slate-300">Target a higher COWS score (&ge;14) before starting.</span></li>
                <li className="flex gap-3"><ArrowRight className="text-amber-500 shrink-0" /> <span className="text-slate-300">Strongly consider Bernese (Micro-dosing) method.</span></li>
            </ul>
        </div>
    </div>
);

/* --- SLIDE 18 --- */
const ComplicatingPregnancyPainSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Complicating Factors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border-t-4 border-emerald-500 p-8 rounded-b-2xl border-x border-b border-slate-800 text-center">
                <Baby size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Pregnancy</h3>
                <p className="text-slate-400 mb-4">Never withhold treatment. Untreated OUD is vastly more dangerous to the fetus than medication.</p>
                <div className="bg-slate-950 p-3 rounded text-emerald-400 text-sm">Use Buprenorphine monoproduct (without Naloxone).</div>
            </div>
            <div className="bg-slate-900 border-t-4 border-red-500 p-8 rounded-b-2xl border-x border-b border-slate-800 text-center">
                <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Severe Acute Pain</h3>
                <p className="text-slate-400 mb-4">Major trauma may require full agonists to override the buprenorphine blockade.</p>
                <div className="bg-slate-950 p-3 rounded text-red-400 text-sm">Requires multi-disciplinary pain/anesthesia consult.</div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 19 --- */
const BerneseProtocolSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Low-Dose (Bernese) Protocol</h2>
            <p className="text-slate-400 text-lg">"Sneaking onto" the receptors to avoid precipitating withdrawal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Indications</h3>
                <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-2"><CheckCircle2 className="text-cyan-500 shrink-0" /> Fentanyl-positive UDS</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-cyan-500 shrink-0" /> Active Methadone Use</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-cyan-500 shrink-0" /> Patient unable to tolerate withdrawal phase</li>
                </ul>
            </div>
            <div className="bg-cyan-900/20 p-8 rounded-3xl border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">The Mechanism</h3>
                <p className="text-slate-300 leading-relaxed">
                    Start with micro-doses (0.5mg) while the patient *continues* full agonist use. Slowly titrate Bup up over 3-7 days. Buprenorphine gradually displaces the full agonist without causing a sudden crash.
                </p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 20 --- */
const PostNaloxoneSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">Post-Naloxone Buprenorphine Strategy</h2>
            <p className="text-slate-400 text-lg">Establish receptor blockade before short-acting naloxone wears off.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center relative">
            <div className="flex-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-bold text-white mb-2">Overdose</h4>
                <p className="text-sm text-slate-400">Fentanyl floods receptors. Apnea.</p>
            </div>
            <div className="hidden md:flex items-center text-slate-700"><ArrowRight size={32} /></div>
            <div className="flex-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-bold text-white mb-2">Naloxone Reversal</h4>
                <p className="text-sm text-slate-400">Naloxone abruptly strips Fentanyl. Acute withdrawal begins.</p>
            </div>
            <div className="hidden md:flex items-center text-slate-700"><ArrowRight size={32} /></div>
            <div className="flex-1 bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-2xl text-center shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <div className="w-12 h-12 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-bold text-cyan-400 mb-2">Bup Admin</h4>
                <p className="text-sm text-slate-300">16mg Bup replaces Naloxone before Fentanyl returns.</p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 21 --- */
const PrecipitatedWithdrawalBasicsSlide = () => (
    <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-500">The Pathophysiology of Precipitated Withdrawal</h2>
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl max-w-3xl mx-auto text-left">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
                When a partial agonist (Buprenorphine) is given to a patient with receptors fully occupied by a full agonist (Heroin/Fentanyl/Methadone), the Buprenorphine's high affinity kicks the full agonist off.
            </p>
            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-red-400 font-bold mb-2">The Drop in Activity</p>
                <p className="text-slate-300 text-sm">
                    Because Buprenorphine only has 40% intrinsic activity, the receptor experiences a sudden, violent drop in overall activation (from 100% to 40% in seconds). This causes maximum, agonizing withdrawal instantly.
                </p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 22 --- */
const UndertreatedVsPrecipitatedSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Undertreated vs. Precipitated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <h3 className="text-2xl font-bold text-slate-300 mb-2">Undertreated</h3>
                <p className="text-slate-500 font-medium mb-6 text-sm">Dose was insufficient to saturate receptors.</p>
                <ul className="space-y-6">
                    <li>
                        <strong className="block text-white text-sm uppercase text-slate-400">Timing</strong>
                        <span className="text-slate-300">Gradual lack of improvement (45-60 mins).</span>
                    </li>
                    <li className="bg-slate-800 p-4 rounded-xl mt-4 border-l-4 border-cyan-500">
                        <strong className="text-cyan-400">Action:</strong> Give more Buprenorphine.
                    </li>
                </ul>
            </div>
            <div className="bg-gradient-to-br from-red-950 to-slate-950 p-8 rounded-3xl border border-red-900/50">
                <h3 className="text-2xl font-bold text-red-400 mb-2">Precipitated</h3>
                <p className="text-red-500/70 font-medium mb-6 text-sm">Buprenorphine forcefully displaced a full agonist.</p>
                <ul className="space-y-6">
                    <li>
                        <strong className="block text-white text-sm uppercase text-red-400/70">Symptoms</strong>
                        <span className="text-slate-300">Abrupt onset (10-15 mins). Exploding COWS score, severe agitation, N/V.</span>
                    </li>
                    <li className="bg-red-500/20 p-4 rounded-xl mt-4 border-l-4 border-red-500">
                        <strong className="text-red-400">Action:</strong> Trigger 90-Minute Bundle.
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

/* --- SLIDE 23 --- */
const RedZoneSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3"><Activity className="text-red-500" /> The 90-Minute Red Zone Bundle</h2>
            <p className="text-slate-400 text-lg">Managing Precipitated Withdrawal.</p>
        </div>
        <div className="relative mb-12">
            <div className="absolute top-8 left-4 right-4 h-1 bg-slate-800 rounded-full z-0"></div>
            <div className="grid grid-cols-3 gap-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-red-500 border-4 border-slate-950 flex items-center justify-center text-white font-bold text-xl mb-4">T=0</div>
                    <h4 className="font-bold text-white mb-2">Aggressive Blockade</h4>
                    <p className="text-slate-400 text-sm">16 mg Bup SL <br />+ 2 mg Lorazepam</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500 border-4 border-slate-950 flex items-center justify-center text-white font-bold text-xl mb-4">30m</div>
                    <h4 className="font-bold text-white mb-2">Reassess</h4>
                    <p className="text-slate-400 text-sm">If static: <br />give 16 mg Bup SL.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 border-4 border-slate-950 flex items-center justify-center text-slate-900 font-bold text-xl mb-4">60m+</div>
                    <h4 className="font-bold text-white mb-2">Adjuncts</h4>
                    <p className="text-slate-400 text-sm">No more benzos. Add Ketamine/Haldol.</p>
                </div>
            </div>
        </div>
        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-black text-red-400 uppercase tracking-wide">Do Not Stop Buprenorphine</h3>
            <p className="text-white">The fastest way out is through. Flood the receptors to maximize the partial agonist effect.</p>
        </div>
    </div>
);

/* --- SLIDE 24 --- */
const DischargeDosingSlide = () => (
    <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-8">Discharge Rx: 2-Week Supply</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 max-w-3xl mx-auto">
            <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <span className="text-xl text-slate-300">Standard Maintenance</span>
                    <span className="text-cyan-400 font-mono font-bold text-2xl bg-slate-950 px-4 py-2 rounded">16 mg/day</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <span className="text-xl text-slate-300">Higher Dependence</span>
                    <span className="text-cyan-400 font-mono font-bold text-2xl bg-slate-950 px-4 py-2 rounded">24 mg/day</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xl text-slate-300">Severe / High Fentanyl Use</span>
                    <span className="text-cyan-400 font-mono font-bold text-2xl bg-slate-950 px-4 py-2 rounded">32 mg/day</span>
                </div>
            </div>
            <p className="text-sm text-slate-500 mt-8 italic text-left">Format: Suboxone (bup/naloxone) 8mg/2mg SL Film. Number dispensed varies by daily dose (#28, #42, #56).</p>
        </div>
    </div>
);

/* --- SLIDE 25 --- */
const HarmReductionSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Harm Reduction & Linkage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-10 text-center flex flex-col justify-center">
                <Shield size={48} className="text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Always Co-Prescribe</h3>
                <div className="text-3xl font-black text-red-400 mb-4">Naloxone 4mg IN</div>
                <p className="text-slate-400">Essential safety net during transition to outpatient care. Provide two doses.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center flex flex-col justify-center">
                <Users size={48} className="text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Community Linkage</h3>
                <p className="text-slate-400 mb-6">Establish PCP, Outpatient Addiction Provider, or Peer Support before discharge.</p>
                <button className="bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 px-6 py-3 rounded-full font-bold">Warm Handoff Required</button>
            </div>
        </div>
    </div>
);

/* --- SLIDE 26 --- */
const SummarySlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Clinical Summary</h2>
        </div>
        <div className="space-y-3">
            {[
                "Buprenorphine is safe to start in the ED (Ceiling effect, No X-waiver).",
                "Use COWS > 12 as a guide, but remember Fentanyl depot alters timelines.",
                "Know Standard (4mg) vs Rapid (8mg) induction pathways.",
                "Precipitated withdrawal is treatable (90-min bundle: more Bup, not less).",
                "Discharge with 14-day supply, Naloxone, and a warm handoff."
            ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                    <p className="text-slate-300 font-medium">{item}</p>
                </div>
            ))}
        </div>
    </div>
);

/* --- SLIDE 27 --- */
const BupSimIntroSlide = () => (
    <div className="max-w-5xl mx-auto w-full text-center">
        <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <img src={bupSimIcon} alt="BupSim Logo" className="w-full h-full object-contain drop-shadow-2xl rounded-[1.5rem]" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">Introduction to BupSim</h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">Bridging the gap between didactic learning and high-stakes clinical execution.</p>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl inline-block">
            <p className="text-slate-300 text-lg leading-relaxed">
                The simulator allows you to practice full-cycle OUD management on a virtual patient, reinforcing dosing pathways, identifying guardrails, and managing complications in a zero-risk environment.
            </p>
        </div>
    </div>
);

/* --- SLIDE 28 --- */
const MeetMariaSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Patient: Maria Torres</h2>
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="bg-slate-800 p-10 flex flex-col items-center justify-center border-r border-slate-700 md:w-1/3">
                <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center mb-4 border-4 border-cyan-500 overflow-hidden">
                    <img src={mariaImg} alt="Maria Torres" className="w-full h-full object-cover scale-[1.8] object-top translate-y-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Maria Torres</h3>
                <p className="text-cyan-400 font-medium">32 Y/O Female</p>
            </div>
            <div className="p-10 space-y-6 md:w-2/3">
                <div>
                    <h4 className="text-slate-500 uppercase tracking-wider text-sm font-bold mb-1">Chief Complaint</h4>
                    <p className="text-white text-lg">"I have a headache and feel nauseated."</p>
                </div>
                <div>
                    <h4 className="text-slate-500 uppercase tracking-wider text-sm font-bold mb-1">HPI Context</h4>
                    <p className="text-slate-300">Brought in by EMS post-naloxone reversal for a suspected oxycodone/fentanyl overdose. Currently awake, alert, and deeply uncomfortable.</p>
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 29 --- */
const AIVoiceSlide = () => (
    <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-10 text-center">Powered by Google Gemini Live</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                        <Mic className="text-purple-400 shrink-0 mt-1" size={28} />
                        <div>
                            <h4 className="font-bold text-white text-lg">Natural Voice Interaction</h4>
                            <p className="text-slate-400 text-sm">Speak to the iPad directly. The AI processes your clinical questions and empathetic tone in real-time.</p>
                        </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                        <Brain className="text-purple-400 shrink-0 mt-1" size={28} />
                        <div>
                            <h4 className="font-bold text-white text-lg">Dynamic Responses</h4>
                            <p className="text-slate-400 text-sm">Maria’s physiological state updates based on your meds, altering her voice, anxiety level, and reported symptoms.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 rounded-3xl p-8 border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] text-center">
                    <p className="text-xl text-purple-200 italic font-light">"Are you sure this medication isn't going to make me feel worse? My friend told me it throws you into terrible withdrawals..."</p>
                    <p className="mt-6 text-sm text-purple-400 font-bold uppercase tracking-widest">— Patient Persona Output</p>
                </div>
            </div>
        </div>
    </div>
);



/* --- SLIDE 30 --- */
const ClinicalInterfaceSlide = () => (
    <div className="max-w-6xl mx-auto w-full h-[650px] flex flex-col relative bg-slate-950/20 rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] p-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

        {/* 1. TOP: MOCK SMART HUD */}
        <div className="w-full pt-6 flex justify-center z-20">
            <div className="w-full max-w-2xl bg-black/25 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5"></div>
                <div className="absolute bottom-0 left-0 w-[10%] h-[1px] bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                
                <div className="flex items-center gap-4 pl-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-lg">1</div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Step 1 of 8</span>
                        <span className="text-white font-medium text-[13px] leading-none">Clinical Orientation</span>
                    </div>
                </div>

                <div className="pr-1">
                    <div className="bg-black/40 text-white/20 border border-white/5 px-6 py-2 rounded-full flex items-center gap-2 text-xs font-semibold">
                        Next Step <Lock size={12} />
                    </div>
                </div>
            </div>
        </div>

        {/* 2. MIDDLE: PatientView Frame with Slide Content */}
        <div className="flex-1 mt-6 px-10 relative z-10 flex flex-col">
            <div className="flex-1 bg-slate-900/40 backdrop-blur-sm rounded-[2.5rem] border border-white/5 p-8 flex flex-col shadow-inner">
                <div className="flex items-center justify-between mb-8 opacity-50">
                    <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Patient: Maria Torres (Learning Mode)</h3>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div><span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Live</span></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-1">
                    <div className="space-y-6">
                        <div className="bg-[#1a1c23]/60 border-l-4 border-cyan-500 p-6 rounded-2xl shadow-lg">
                            <h4 className="font-bold text-white text-lg mb-1">Clinical Instruction</h4>
                            <p className="text-sm text-slate-400">Everything you see here mirrors the real iPad interface, allowing for zero-friction transition to clinical practice.</p>
                        </div>
                        <div className="bg-[#1a1c23]/60 border-l-4 border-emerald-500 p-6 rounded-2xl shadow-lg">
                            <h4 className="font-bold text-white text-lg mb-1">Smart Guardrails</h4>
                            <p className="text-sm text-slate-400">Clinical logic prevents 'ordering' medications prematurely, ensuring follow-through on assessment best practices.</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-5 flex-1">
                        {/* COWS */}
                        <div className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-[2rem] transition-all relative overflow-hidden backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4 transition-transform">
                                <Activity size={24} className="text-cyan-400" />
                            </div>
                            <span className="text-sm font-bold text-white text-center">COWS Assessment</span>
                            <span className="text-[10px] text-white/40 mt-1 text-center font-medium">Withdrawal Scale</span>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl -z-10 translate-x-8 -translate-y-8"></div>
                        </div>

                        {/* Discharge */}
                        <div className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-[2rem] transition-all relative overflow-hidden backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 transition-transform">
                                <FileText size={24} className="text-emerald-400" />
                            </div>
                            <span className="text-sm font-bold text-white text-center">Discharge Plan</span>
                            <span className="text-[10px] text-white/40 mt-1 text-center font-medium">Rx & Follow-up</span>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -z-10 translate-x-8 -translate-y-8"></div>
                        </div>

                        {/* Quick Orders */}
                        <div className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-[2rem] transition-all relative overflow-hidden backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 transition-transform">
                                <ShoppingCart size={24} className="text-green-400" />
                            </div>
                            <span className="text-sm font-bold text-white text-center">Quick Orders</span>
                            <span className="text-[10px] text-white/40 mt-1 text-center font-medium">Meds & Labs</span>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl -z-10 translate-x-8 -translate-y-8"></div>
                        </div>

                        {/* Results */}
                        <div className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-[2rem] transition-all relative overflow-hidden backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                                <Clipboard size={24} className="text-emerald-400" />
                            </div>
                            <span className="text-sm font-bold text-white text-center">Results</span>
                            <span className="text-[10px] text-white/40 mt-1 text-center font-medium">Reports</span>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -z-10 translate-x-8 -translate-y-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. BOTTOM: MOCK CLINICAL DRAWER / BOTTOM DOCK */}
        <div className="w-full pb-8 pt-4 flex flex-col items-center z-20">
            <div className="w-full max-w-4xl mx-auto h-[75px] bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between px-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-lg">
                    <ChevronUp size={24} />
                </div>

                <div className="flex-1"></div>

                <div className="relative h-12 px-6 bg-cyan-500/10 border border-cyan-500/30 text-white shadow-[0_0_30px_rgba(6,182,212,0.2)] rounded-full flex items-center gap-3 transition-all">
                    <Sparkles size={18} className="text-cyan-400" />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[11px] font-bold uppercase tracking-wider">Gemini</span>
                        <span className="text-[9px] font-medium opacity-50">Assistant</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 30.1 --- */
const COWSAssessmentExampleSlide = () => (
    <div className="max-w-6xl mx-auto w-full h-[650px] relative bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
        {/* Floating Composite Score - Top Right */}
        <div className="absolute top-8 right-8 z-50">
            <div className="bg-[#1a1f2e] border border-white/20 rounded-2xl px-6 py-3 shadow-2xl flex flex-col items-center min-w-[140px] scale-100">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">COMPOSITE SCORE</span>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-white">14</span>
                    <span className="text-xs font-bold uppercase tracking-wider mt-1 text-orange-400">MODERATE</span>
                </div>
            </div>
        </div>

        {/* Close Button - Top Left */}
        <div className="absolute top-8 left-8 z-50 text-white/30 hover:text-white transition-colors cursor-default">
            <X size={24} />
        </div>

        {/* Header Section */}
        <div className="px-12 pt-24 pb-8">
            <div className="max-w-2xl mx-auto w-full">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-1">Resting Pulse Rate</h2>
                    <p className="text-gray-400 text-sm italic">Measured after patient is sitting or lying for one minute</p>
                </div>

                {/* Clinical Findings Callout */}
                <div className="mb-10 bg-blue-500/5 p-4 rounded-xl border border-blue-500/10 transition-all">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-2">CLINICAL FINDINGS</div>
                    <div className="flex items-start gap-3">
                        <div className="w-1 self-stretch bg-blue-500 rounded-full"></div>
                        <p className="text-lg text-white font-medium leading-tight">Maria's pulse rate is 108 bpm.</p>
                    </div>
                </div>

                {/* Options Grid */}
                <div className="space-y-3">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">SELECT RATING</div>
                    
                    <div className="flex items-center p-4 rounded-2xl border border-white/5 bg-white/5 text-gray-400 opacity-60">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold mr-4">0</div>
                        <span className="text-base font-medium">Pulse rate 80 or below</span>
                    </div>

                    <div className="flex items-center p-4 rounded-2xl border border-white/5 bg-white/5 text-gray-400 opacity-60">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold mr-4">1</div>
                        <span className="text-base font-medium">Pulse rate 81-100</span>
                    </div>

                    <div className="flex items-center p-4 rounded-2xl border border-cyan-500 bg-cyan-500/10 text-white shadow-[0_0_20px_rgba(6,182,212,0.1)] scale-[1.02]">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-sm font-bold mr-4 text-black">2</div>
                        <span className="text-base font-bold">Pulse rate 101-120</span>
                        <Check size={18} className="ml-auto text-cyan-400" />
                    </div>

                    <div className="flex items-center p-4 rounded-2xl border border-white/5 bg-white/5 text-gray-400 opacity-60">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold mr-4">4</div>
                        <span className="text-base font-medium">Pulse rate greater than 120</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer: Pagination Mockup */}
        <div className="mt-auto pb-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
                <ChevronLeft size={20} className="text-white/20" />
                <div className="flex gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-white scale-125"></div>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white/20"></div>
                    ))}
                    <div className="w-2 h-2 rounded-full bg-blue-500/40"></div>
                </div>
                <ChevronRight size={20} className="text-white/40" />
            </div>
            <div className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">ITEM 1 OF 11</div>
        </div>
    </div>
);

/* --- SLIDE 30.2 --- */
const QuickOrderExampleSlide = () => (
    <div className="max-w-6xl mx-auto w-full h-[650px] relative bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Package className="text-cyan-400" size={20} />
                </div>
                <h2 className="font-bold text-lg tracking-wide text-white">Quick Orders</h2>
            </div>
            <div className="text-white/30"><X size={20} /></div>
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/* Left Catalog */}
            <div className="flex-1 flex flex-col border-r border-white/10 overflow-hidden">
                {/* Tabs */}
                <div className="flex p-4 gap-2 bg-black/20">
                    <div className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border bg-cyan-500/10 border-cyan-500/50 text-cyan-400 font-bold text-sm">
                        <Pill size={16} /> Medications
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border bg-white/5 border-white/5 text-gray-500 font-medium text-sm italic">
                        <Activity size={16} /> Diagnostics
                    </div>
                </div>

                <div className="p-4 space-y-6">
                    {/* Search Mock */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <div className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-600">
                            Search medications...
                        </div>
                    </div>

                    {/* Category */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-cyan-500/10 border-cyan-500/25">
                            <Pill size={14} className="text-cyan-400" />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                                MAT / Opioid Treatment
                            </span>
                        </div>

                        {/* List Items */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-4 rounded-xl border bg-white/5 border-white/10 opacity-50">
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-base font-semibold text-white/50">Buprenorphine</span>
                                        <span className="text-sm font-bold text-gray-500">4 mg</span>
                                    </div>
                                    <span className="text-xs italic text-gray-600">Subutex · SL</span>
                                </div>
                                <Plus size={18} className="text-gray-600" />
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl border bg-cyan-400/10 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none"></div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-base font-bold text-cyan-100">Buprenorphine</span>
                                        <span className="text-sm font-bold text-cyan-300">8 mg</span>
                                    </div>
                                    <span className="text-xs italic text-cyan-300/60">Subutex · SL</span>
                                </div>
                                <div className="bg-cyan-500/20 p-1.5 rounded-lg">
                                    <CheckCircle2 size={18} className="text-cyan-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Cart */}
            <div className="w-80 flex flex-col bg-black/20 p-6 border-l border-white/5 relative">
                <div className="flex items-center gap-2 mb-6 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                    <ShoppingCart size={14} />
                    <span>Current Order</span>
                </div>

                <div className="flex-1">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex justify-between items-center animate-in fade-in slide-in-from-right-4">
                        <div>
                            <span className="block text-sm font-bold text-white">Buprenorphine 8 mg</span>
                            <span className="text-[10px] text-white/30 uppercase tracking-tighter font-mono">SL · Ready to Sign</span>
                        </div>
                        <X size={14} className="text-white/20" />
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-sm text-white shadow-xl shadow-cyan-900/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]">
                        <span>Sign & Order</span>
                        <ChevronRight size={18} />
                    </button>
                    <p className="text-[9px] text-center text-white/20 mt-4 uppercase tracking-widest font-medium">BupSim Verification Required</p>
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 31 --- */
const PersonalizedDebriefSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">BupSim: Personalized Debrief</h2>
            <p className="text-slate-400 text-lg">Comprehensive feedback on your clinical performance after the simulation.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6"><CheckCircle2 size={32} /></div>
                    <h4 className="font-bold text-white text-lg mb-2">Clinical Accuracy</h4>
                    <p className="text-sm text-slate-400">Review correct dosing, timing, and appropriate pathway selection tailored to the specific case.</p>
                </div>
                <div className="p-4 flex flex-col items-center border-y md:border-y-0 md:border-x border-slate-800">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6"><AlertTriangle size={32} /></div>
                    <h4 className="font-bold text-white text-lg mb-2">Guardrail Violations</h4>
                    <p className="text-sm text-slate-400">Identify actions that would have resulted in precipitated withdrawal or adverse patient events.</p>
                </div>
                <div className="p-4 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6"><Users size={32} /></div>
                    <h4 className="font-bold text-white text-lg mb-2">Patient Interaction</h4>
                    <p className="text-sm text-slate-400">Receive feedback on communication tone, empathy, and effectively addressing patient fears.</p>
                </div>
            </div>
        </div>
    </div>
);

/* --- SLIDE 32 --- */
const AnalyticsSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">CPMP Grant: Analytics & Goals</h2>
            <p className="text-slate-400 text-lg">Measuring the real-world impact of simulated practice.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                <LineChart size={48} className="text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Utilization</h3>
                <p className="text-slate-400 text-sm">Tracks the number of inductions performed in the ED post-training.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                <ClipboardCheck size={48} className="text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Confidence</h3>
                <p className="text-slate-400 text-sm">Pre/post Likert scale measures self-reported confidence in induction.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                <HeartPulse size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Risk Reduction</h3>
                <p className="text-slate-400 text-sm">Reducing post-discharge relapse and overdose via better handoffs.</p>
            </div>
        </div>
    </div>
);

/* --- SLIDE 33 --- */
const ThankYouSlide = () => (
    <div className="max-w-4xl mx-auto w-full text-center">
        <div className="w-24 h-24 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <Sparkles size={48} />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-white">Thank You!</h1>
        <p className="text-xl text-slate-400 font-light mb-12">We appreciate your participation.</p>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 inline-block text-left mx-auto">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Simulator Details</h3>
            <div className="space-y-3">
                <div className="flex gap-4 items-center">
                    <Map className="text-cyan-500" size={20} />
                    <span className="text-slate-300">Location: Resident Room, Emergency Department</span>
                </div>
                <div className="flex gap-4 items-center">
                    <Phone className="text-cyan-500" size={20} />
                    <span className="text-slate-300">iPad Code: <strong>3-8-8-0</strong></span>
                </div>
            </div>
        </div>
        <div className="text-slate-500 mt-12 space-y-1">
            <p>Bryan English, MD · bryan.english@stonybrookmedicine.edu</p>
            <p>David Paddock, MD · david.paddock@stonybrookmedicine.edu</p>
        </div>
    </div>
);


/* --- NEW SLIDES --- */
const AssessmentIntertitleSlide = () => (
    <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-white">Assessment & Pre-Induction</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>
        <p className="text-2xl text-slate-400 font-light max-w-3xl mx-auto">
            Understanding Pathophysiology and Clinical Assessment
        </p>
    </div>
);

const MaintenanceSelectionSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Buprenorphine Maintenance</h2>
            <p className="text-slate-400 text-lg">Goal: Continue at least 16 mg buprenorphine for maintenance of therapy.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-slate-300 font-medium mb-6">Choose one daily maintenance regimen by matching induction versus home dosing:</p>
            <div className="space-y-4">
                <div className="flex bg-slate-950 p-4 rounded-xl border border-slate-800 items-center">
                    <div className="w-24 shrink-0 font-black text-cyan-400 text-2xl">8 mg</div>
                    <div className="w-48 font-bold text-white">Sublingual, BID</div>
                    <div className="flex-1 text-slate-400">Twice daily — split dosing</div>
                </div>
                <div className="flex bg-slate-950 p-4 rounded-xl border border-slate-800 items-center border-l-4 border-cyan-500">
                    <div className="w-24 shrink-0 font-black text-cyan-400 text-2xl">16 mg</div>
                    <div className="w-48 font-bold text-white">Sublingual, Daily</div>
                    <div className="flex-1 text-slate-400">Standard maintenance dose</div>
                </div>
                <div className="flex bg-slate-950 p-4 rounded-xl border border-slate-800 items-center">
                    <div className="w-24 shrink-0 font-black text-cyan-400 text-2xl">24 mg</div>
                    <div className="w-48 font-bold text-white">Sublingual, Daily</div>
                    <div className="flex-1 text-slate-400">Higher opioid dependence</div>
                </div>
                <div className="flex bg-slate-950 p-4 rounded-xl border border-slate-800 items-center">
                    <div className="w-24 shrink-0 font-black text-cyan-400 text-2xl">32 mg</div>
                    <div className="w-48 font-bold text-white">Sublingual, Daily</div>
                    <div className="flex-1 text-slate-400">Severe opioid dependence</div>
                </div>
            </div>
            <div className="mt-6 p-4 bg-slate-800/50 rounded-xl text-center text-sm text-slate-300">
                For patients already on buprenorphine: Confirm their current dose and continue as the maintenance dose.
            </div>
        </div>
    </div>
);

const NaloxonePrescriptionSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Naloxone Prescription</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">Naloxone 4 mg Nasal Spray</h3>
                <ul className="space-y-4 mb-6">
                    <li><strong className="text-red-400">Dispense:</strong> <span className="text-slate-300">#2 (or 1 kit of 2 pre-filled syringes)</span></li>
                    <li><strong className="text-red-400">Sig:</strong> <span className="text-slate-300">Use as directed for opioid overdose</span></li>
                    <li><strong className="text-red-400">Refills:</strong> <span className="text-slate-300">As needed</span></li>
                </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Why naloxone at discharge?</h4>
                <ul className="space-y-4">
                    <li className="flex gap-3"><Shield className="text-cyan-500 shrink-0 mt-1" size={20} /> <span className="text-slate-300">Protects against accidental overdose during dose adjustment</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={20} /> <span className="text-slate-300">Essential safety net during transition to outpatient care</span></li>
                </ul>
                <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 text-center font-bold text-white">
                    ★ Discharge Rx required before patient leaves
                </div>
            </div>
        </div>
    </div>
);

const FinalHeuristicsSlide = () => (
    <div className="max-w-5xl mx-auto w-full overflow-hidden">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Final Heuristics</h2>
            <p className="text-slate-400 text-lg">We know the rules. But are we comfortable executing them?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center">
                <Map size={48} className="text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">The ED is the Point</h3>
                <p className="text-slate-400 text-sm">The Emergency Department is the definitive intervention point, not a holding area.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center">
                <Brain size={48} className="text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Respect the Receptor</h3>
                <p className="text-slate-400 text-sm">Wait for objective withdrawal (COWS &gt; 12 + 2 signs).</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center border-b-4 border-b-red-500">
                <Zap size={48} className="text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Push Through PW</h3>
                <p className="text-slate-400 text-sm">Dose with confidence (8mg, reassess, 8mg). If PW occurs, escalate Buprenorphine.</p>
            </div>
        </div>
    </div>
);

const FromProtocolToPracticeSlide = () => (
    <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">From Protocol to Practice</h2>
            <p className="text-slate-400 text-lg">What if you could practice induction before they walk through the door?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-4">Didactic learning ≠ real-world skill.</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-cyan-400 font-bold mb-2">The True Barriers:</h4>
                        <p className="text-slate-400 text-sm">We under-screen due to time constraints, workflow issues, and simply <em>feeling awkward</em> initiating the conversation.</p>
                    </div>
                    <div>
                        <h4 className="text-red-400 font-bold mb-2">High-Stakes Fear:</h4>
                        <p className="text-slate-400 text-sm">Fear of precipitated withdrawal is a massive barrier with no easy way to practice safely.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <ActivitySquare size={120} className="text-cyan-400/80 animate-pulse" />
            </div>
        </div>
    </div>
);

const SimulatorStep1Slide = () => (
    <div className="max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto aspect-video">
            <img src={step1} alt="Step 1" className="w-full h-[108%] object-cover object-top -translate-y-[7%]" />
            <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">Research Reports</div>
        </div>
    </div>
);

const SimulatorStep2Slide = () => (
    <div className="max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto aspect-video">
            <img src={step2} alt="Step 2" className="w-full h-[108%] object-cover object-top -translate-y-[7%]" />
            <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">SPC Analysis</div>
        </div>
    </div>
);

const SimulatorStep3Slide = () => (
    <div className="max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto aspect-video">
            <img src={step3} alt="Step 3" className="w-full h-[108%] object-cover object-top -translate-y-[7%]" />
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">Dosing & Execution</div>
        </div>
    </div>
);

export default SlideViewer;