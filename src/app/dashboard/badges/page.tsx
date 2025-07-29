
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Trophy, Star, BookOpen, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const badges = [
  { 
    title: 'First Steps', 
    description: 'Complete your first lesson.', 
    icon: <Star className="w-8 h-8" />, 
    earned: true 
  },
  { 
    title: 'Course Pioneer', 
    description: 'Enroll in your first course.', 
    icon: <BookOpen className="w-8 h-8" />, 
    earned: true 
  },
  { 
    title: 'Perfect Score', 
    description: 'Get 100% on an assignment.', 
    icon: <Trophy className="w-8 h-8" />, 
    earned: false 
  },
  { 
    title: 'Quick Learner', 
    description: 'Complete a course in record time.', 
    icon: <Zap className="w-8 h-8" />, 
    earned: false 
  },
   { 
    title: 'Top of the Class', 
    description: 'Finish a course with an A+ grade.', 
    icon: <Trophy className="w-8 h-8" />, 
    earned: true
  },
   { 
    title: 'Community Helper', 
    description: 'Provide a helpful answer in the forums.', 
    icon: <Star className="w-8 h-8" />, 
    earned: false 
  },
];

export default function BadgesPage() {
  return (
    <div>
        <div className="mb-6">
            <h1 className="text-2xl font-bold font-headline">My Badges</h1>
            <p className="text-muted-foreground">Celebrate your achievements and milestones.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
                <Card key={index} className={cn("text-center transition-all", !badge.earned && "opacity-50 grayscale")}>
                    <CardHeader>
                        <div className={cn("mx-auto flex h-16 w-16 items-center justify-center rounded-full", badge.earned ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
                            {badge.icon}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{badge.title}</CardTitle>
                        <CardDescription className="mt-2">{badge.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
}
