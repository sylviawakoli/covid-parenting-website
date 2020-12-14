import { Component, OnInit } from '@angular/core';
import { ImpactService, ImpactSummary } from './impact.service';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent implements OnInit {

  public strCurrentDate: string="";
  public arrRegionSummaries: ImpactSummary[] = [];
  public arrDisseminationSummaries: ImpactSummary[] = [];
  public totalRegionSummary: number=0;
  public totalDisseminationSummary: number=0;

  constructor(private impactStoriesService: ImpactService) {
    this.strCurrentDate = new Date().toLocaleDateString();

    impactStoriesService.fetchImpactSummaries().subscribe((impactsummaries) => {
      impactsummaries.forEach((impactsummary) => {

        if (impactsummary.impactType.toUpperCase() === "REGION") {
          this.arrRegionSummaries.push(impactsummary)
          this.totalRegionSummary = this.totalRegionSummary + impactsummary.impactNumber;
        } else {
          this.arrDisseminationSummaries.push(impactsummary)
          this.totalDisseminationSummary = this.totalDisseminationSummary + impactsummary.impactNumber;
        }

      });

    });
  }

  ngOnInit(): void {
  }

}
