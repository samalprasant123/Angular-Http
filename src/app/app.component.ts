import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName;

  servers = [
    { name: 'Testserver', capacity: 10, id: this.generateId() },
    { name: 'Liveserver', capacity: 100, id: this.generateId() }
  ];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.appName = this.serverService.getAppName();
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name, capacity: 50, id: this.generateId()
    });
  }

  onSaveServers() {
    this.serverService.putServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGetServers() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
