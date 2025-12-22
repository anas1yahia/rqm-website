import { trigger, transition, style, query, animate, keyframes, group } from '@angular/animations';

export const glitchAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Base styles
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // Use blur and backface-visibility for smoother rendering
          'backface-visibility': 'hidden',
          'transform-style': 'preserve-3d'
        })
      ], { optional: true }),

      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),

      group([
        // LEAVE: Smooth Holographic Fade Out
        query(':leave', [
          animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
            style({ opacity: 1, transform: 'scale(1) translateX(0)', filter: 'blur(0)', offset: 0 }),
            // Slight "interference" jitter
            style({ opacity: 0.8, transform: 'scale(1.005) translateX(-2px)', filter: 'blur(1px)', offset: 0.2 }),
            style({ opacity: 0.4, transform: 'scale(1.01) translateX(2px)', filter: 'blur(2px)', offset: 0.5 }),
            // Smooth fade out
            style({ opacity: 0, transform: 'scale(1.02) translateX(0)', filter: 'blur(4px)', offset: 1 })
          ]))
        ], { optional: true }),

        // ENTER: Smooth Holographic Resolve
        query(':enter', [
          animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
            style({ opacity: 0, transform: 'scale(0.98) translateX(0)', filter: 'blur(5px)', offset: 0 }),
            // Resolving signal
            style({ opacity: 0.6, transform: 'scale(0.99) translateX(3px)', filter: 'blur(2px)', offset: 0.4 }),
            // Tiny stabilizing snap
            style({ opacity: 0.9, transform: 'scale(1) translateX(-1px)', filter: 'blur(0.5px)', offset: 0.7 }),
            style({ opacity: 1, transform: 'scale(1) translateX(0)', filter: 'blur(0)', offset: 1 })
          ]))
        ], { optional: true })
      ])
    ])
  ]);
