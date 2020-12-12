import { Component, OnInit } from '@angular/core';
import { ImpactStoriesService, ImpactSummary } from './impact-stories.service';

@Component({
  selector: 'app-impact-stories',
  templateUrl: './impact-stories.component.html',
  styleUrls: ['./impact-stories.component.scss']
})
export class ImpactStoriesComponent implements OnInit {

  public strCurrentDate: string="";
  public arrRegionSummaries: ImpactSummary[] = [];
  public arrDisseminationSummaries: ImpactSummary[] = [];
  public totalRegionSummary: number=0;
  public totalDisseminationSummary: number=0;

  constructor(private impactStoriesService: ImpactStoriesService) {
    this.strCurrentDate = new Date().toISOString();

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
