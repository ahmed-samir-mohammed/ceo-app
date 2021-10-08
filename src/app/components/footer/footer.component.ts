import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/core/services/setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  settingFooter: any;

  constructor(private setting: SettingService) { }

  ngOnInit(): void {
    this.getSettingFooter()
  }

  getSettingFooter() {
    this.setting.getAllSetting().subscribe((res: any) => {
      this.settingFooter = res
    }, err => {
      console.log(err)
    })
  }

}
