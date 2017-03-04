import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {${className}} from "./${propertyName}";
import {${className}Service} from "./${propertyName}.service";

@Component({
  selector: '${propertyName}-persist',
  templateUrl: './${propertyName}-persist.component.html'
})
export class ${className}PersistComponent implements OnInit {

  ${propertyName} = new ${className}();

  constructor(private route: ActivatedRoute, private ${propertyName}Service: ${className}Service) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('id')) {
        this.${propertyName}Service.get(+params['id']).subscribe((${propertyName}: ${className}) => {
          this.${propertyName} = ${propertyName};
        });
      }
    });
  }

  save() {
    this.${propertyName}Service.save(this.${propertyName}).subscribe(() => {
      alert('Save successful');
    }, () => {
      alert('Save NOT successful');
    });
  }
}