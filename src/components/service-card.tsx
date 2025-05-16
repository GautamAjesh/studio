import type { Service } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Icon className="h-10 w-10 text-primary" />
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{service.description}</CardDescription>
        {service.technologies && service.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
