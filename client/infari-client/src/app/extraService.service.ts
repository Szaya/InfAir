import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ExtraService } from '../domain/extraService';

const httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
    })
};

@Injectable({
  providedIn: 'root'
})
export class ExtraService_Service {

    //private servicesUrl = 'http://localhost:8080//services';
    private servicesUrl = 'services';

  constructor( 
      private http: HttpClient 
    ) { }


    async getServiceByID(id: Number) {
      const service = await (this.http.get(this.servicesUrl + "//" + id)
      .toPromise() as Promise<any[]>);
      return this.createExtraServiceModel(service);
    }
    
    async deleteServiceByID(id: Number) {
      const service = await (this.http.delete(this.servicesUrl + "//" + id)
      .toPromise() as Promise<any[]>);
    }


  async getServices() {
      const services = await (this.http.get(this.servicesUrl)
      .toPromise() as Promise<any[]>);
    return services.map(this.createExtraServiceModel);
  }

  private createExtraServiceModel(extraService: any): ExtraService {
    return {
      ...extraService,
    } as ExtraService;
  }

  async createExtraService(extraService: ExtraService): Promise<Number> {
    const service = await this.http.post(this.servicesUrl, extraService).toPromise();
    return this.createExtraServiceModel(service).id;
  }

  modifyExtraServices(extraService: ExtraService)  {
     this.http.patch(this.servicesUrl + '/' + extraService.id, extraService).toPromise();

  }
}
