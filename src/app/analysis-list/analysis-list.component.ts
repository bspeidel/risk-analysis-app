import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis-list',
  templateUrl: './analysis-list.component.html',
  styleUrls: ['./analysis-list.component.scss'],
})
export class AnalysisListComponent implements OnInit {
  analyses: any[];
  analysisSubscription: Subscription;
  analysisIsIsShow: boolean = false;
  reportIsShow: boolean = false;

  @Input() customerIdFromParent: string;
  @Input() companyFromParent: string;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getAnalyses().subscribe((analyses: any[]) => {
      this.analyses = analyses;
    });
  }

  showAnalysis() {
    if (this.analysisIsIsShow == true) {
      this.analysisIsIsShow = false;
    } else {
      this.analysisIsIsShow = true;
    }
    this.reportIsShow = false;
  }

  showReport() {
    if (this.reportIsShow == true) {
      this.reportIsShow = false;
    } else {
      this.reportIsShow = true;
    }
    this.analysisIsIsShow = false;
  }

  newAnalysis(value) {
    this.firebaseService.createAnalysis(value, this.companyFromParent);
  }

  updateAnalysis(analysis) {
    this.router.navigate([
      '/analysis/' + analysis.payload.doc.id + '/company-data',
    ]);
  }
}
