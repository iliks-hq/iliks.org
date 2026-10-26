import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ShineBorder } from '../ui/shine-border';
import { Button } from '../ui/button';
import { services } from '@/data/services';

export function ServicesSlider() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full select-none"
    >
      <CarouselContent className="ml-0 py-2 md:-ml-4">
        {services.map((service) => {
          return (
            <CarouselItem
              key={service.id}
              className="basis-[88%] pr-2 pl-0 sm:basis-1/2 md:pr-0 md:pl-4 lg:basis-1/3"
            >
              <Card className="group relative min-h-80 gap-0 overflow-hidden border-0 bg-slate-950 p-0 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:shadow-xl">
                <div className="bg-foreground absolute inset-0 overflow-hidden">
                  <img
                    src={service.image.src}
                    height={service.image.height}
                    width={service.image.width}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fetchPriority="high"
                  />
                  <div className="from-foreground/50 via-foreground/75 to-foreground/5 absolute inset-0 bg-linear-to-t" />
                  <div className="from-primary/20 absolute inset-0 bg-linear-to-br via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-16">
                  <CardHeader className="flex min-h-16 flex-row items-center gap-3 space-y-0 p-0">
                    <CardTitle className="flex min-h-16 w-full items-center justify-center gap-2 font-mono md:justify-start md:gap-3">
                      <Button
                        aria-label={service.id}
                        size="icon"
                        className="group-hover:bg-primary shrink-0 bg-white/20 p-2.5 text-white ring-white/20 backdrop-blur-lg transition-colors duration-300 group-hover:ring-2"
                      >
                        <service.Icon className="height-5 width-5" />
                      </Button>
                      <span className="m-0 p-0">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="min-h-22 text-sm leading-relaxed text-white/75 md:text-start">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </div>
                <ShineBorder
                  borderWidth={3}
                  duration={10}
                  shineColor={['#fff', '#00ff', '#fff', 'transparent']}
                />
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
