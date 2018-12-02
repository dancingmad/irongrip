import {Component, OnInit} from '@angular/core';
import {TranslationStatistics} from '../../../services/training/model/translationstatistics';
import {TranslationStatisticsService} from '../../../services/training/translationstatistics.service';
import {User} from '../../../services/user';
import {UserService} from '../../../services/user.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statisticsList: TranslationStatistics[];
  user: User;
  loading: Boolean = false;

  constructor(private statisticsService:TranslationStatisticsService,
              private userService:UserService) { }

  ngOnInit() {
    this.statisticsService.getLoadingListener().subscribe(
      loading => this.loading = loading
    );
    this.userService.getLoggedInUser().subscribe(
      u => {
        this.user = u;
        this.refreshStatistics();
      }
    );
  }

  refreshStatistics() {
    this.statisticsService.listStatistics().subscribe(
      stats => this.statisticsList = stats
    );
  }

}
