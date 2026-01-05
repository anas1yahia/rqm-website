import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, CheckCircle, BarChart2, ShieldCheck, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-is-this-your-solution',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './is-this-your-solution.component.html',
  styleUrls: ['./is-this-your-solution.component.scss']
})
export class IsThisYourSolutionComponent {
  readonly CheckCircle = CheckCircle;
  readonly BarChart2 = BarChart2;
  readonly ShieldCheck = ShieldCheck;
  readonly ArrowUpRight = ArrowUpRight;
}
