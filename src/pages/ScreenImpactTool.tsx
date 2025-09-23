import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { SimulationForm } from "@/components/SimulationForm";
import { EmailCollection } from "@/components/EmailCollection";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { calculateImpact } from "@/utils/impactCalculator";
import type { SimulationData, ImpactResult } from "@/utils/impactCalculator";

type Step = 'welcome' | 'simulation' | 'email' | 'results';

export const ScreenImpactTool = () => {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [simulationData, setSimulationData] = useState<SimulationData | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const [results, setResults] = useState<ImpactResult | null>(null);

  const handleStart = () => {
    setCurrentStep('simulation');
  };

  const handleSimulationComplete = (data: SimulationData) => {
    setSimulationData(data);
    setCurrentStep('email');
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    
    if (simulationData) {
      const calculatedResults = calculateImpact(simulationData);
      setResults(calculatedResults);
      setCurrentStep('results');
    }
  };

  const handleDownloadPDF = () => {
    // Géré dans le composant ResultsDisplay
  };

  const handleShare = () => {
    // Géré dans le composant ResultsDisplay
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'simulation':
        setCurrentStep('welcome');
        break;
      case 'email':
        setCurrentStep('simulation');
        break;
      case 'results':
        setCurrentStep('email');
        break;
      default:
        setCurrentStep('welcome');
    }
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {currentStep === 'simulation' && (
        <SimulationForm 
          onNext={handleSimulationComplete}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 'email' && simulationData && (
        <EmailCollection 
          onEmailSubmit={handleEmailSubmit}
          onBack={handleBack}
          simulationData={simulationData}
        />
      )}
      
      {currentStep === 'results' && results && (
        <ResultsDisplay 
          results={results}
          userEmail={userEmail}
          onDownloadPDF={handleDownloadPDF}
          onShare={handleShare}
        />
      )}
      
      {/* Footer Grenadille */}
      <footer className="bg-card border-t py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Créé par{' '}
            <a 
              href="https://www.grenadille.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Grenadille 🌱
            </a>
            {' '}• Renforcez vos liens familiaux avec des activités enrichissantes
          </p>
        </div>
      </footer>
    </div>
  );
};