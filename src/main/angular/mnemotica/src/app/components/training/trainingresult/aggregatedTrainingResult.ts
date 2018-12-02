export class AggregatedTrainingResult {
  hitScore:number;
hitScoreClass: string;
skillScoreFrom: number;
skillScoreChangeFrom: number;
skillScoreFromClass: string;
skillScoreTo: number;
skillScoreChangeTo: number;
skillScoreToClass: string;
runCount: number;

static convertHitScoreToClass(hitScore:number):string {
    if (hitScore < 20) {
      return 'danger';
    }
    if (hitScore < 50) {
      return 'warning';
    }
    if (hitScore < 70) {
      return 'info';
    }
    return 'success';
  }

  static convertScoreToClass(score:number):string {
    if (score < 200) {
      return 'danger';
    }
    if (score < 300) {
      return 'warning';
    }
    if (score < 400) {
      return 'info';
    }
    return 'success';
  }

}
