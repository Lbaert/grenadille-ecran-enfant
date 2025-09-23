import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Moon, Activity, Target, TrendingDown } from "lucide-react";
interface WelcomeScreenProps {
  onStart: () => void;
}
export const WelcomeScreen = ({
  onStart
}: WelcomeScreenProps) => {
  return <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 animate-gentle-bounce">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Le temps d'écran de votre enfant 
            <span className="text-red-500 block">n'est pas qu'un chiffre</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">Découvrez comment les écrans impactent votre enfant, et surtout quelles alternatives simple et positives peuvent l'aider a s'épanouir</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 hover-lift shadow-card">
            <Moon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Sommeil perturbé</h3>
            <p className="text-sm text-muted-foreground">Difficulté d'endormissement, repos de mauvaise qualité</p>
          </Card>
          
          <Card className="p-4 hover-lift shadow-card">
            <Activity className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Santé physique fragilisée</h3>
            <p className="text-sm text-muted-foreground">Sédentarité, surpoids, fatigue visuelle</p>
          </Card>
          
          <Card className="p-4 hover-lift shadow-card">
            <Target className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Attention et concentration réduites</h3>
            <p className="text-sm text-muted-foreground">Moins de patience, difficulté à se focaliser</p>
          </Card>

          <Card className="p-4 hover-lift shadow-card">
            <TrendingDown className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Résultats scolaires en baisse</h3>
            <p className="text-sm text-muted-foreground">Apprentissages freinés, mémorisation altérée</p>
          </Card>
          
          <Card className="p-4 hover-lift shadow-card">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Lien familial affaibli</h3>
            <p className="text-sm text-muted-foreground">Moins d'échanges, tensions, complicité réduite</p>
          </Card>
          
          <Card className="p-4 hover-lift shadow-card">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Relations sociales et estime de soi affectées</h3>
            <p className="text-sm text-muted-foreground">Isolement, comparaison, anxiété</p>
          </Card>
        </div>

        <p className="text-lg font-medium text-foreground mb-4">
          Votre enfant est-il trop exposé aux écrans pour son age?
        </p>

        <Button onClick={onStart} size="lg" className="bg-gradient-primary hover-glow text-lg px-8 py-6 rounded-full animate-scale-in">
          Faites le test en 2minutes
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          Gratuit • 2 minutes • Résultats personnalisés
        </p>
      </div>
    </div>;
};