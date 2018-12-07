import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FoodsService } from '../services/foods.service';
import { EquipmentService } from '../services/equipment.service';

@Component({
  selector: 'app-required-stuff',
  templateUrl: './required-stuff.component.html',
  styleUrls: ['./required-stuff.component.less']
})
export class RequiredStuffComponent implements OnInit {

  foodSettings = {
    actions: {
      add: true,
      edit: true
    },
    pager: {
      perPage: 25
    },
    columns: {
      name: {
        title: 'Name',
        sort: true,
        sortDirection: 'desc'
      },
      in_stock: {
        title: 'Taked',
        valuePrepareFunction: (value) => (value === true ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>'),
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: ''
          },
        }
      },
      quantity: {
        valuePrepareFunction: (value, row) => `${value} ${row.unit}`,
        title: 'Quantity',
      }
    }
  };

  equipmentSettings = {
    actions: {
      add: true,
      edit: true
    },
    pager: {
      perPage: 25
    },
    columns: {
      name: {
        title: 'Name',
        sort: true,
        sortDirection: 'desc'
      },
      in_stock: {
        title: 'Taked',
        valuePrepareFunction: (value) => (value === true ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>'),
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: ''
          },
        }
      }
    }
  };

  foodSource: LocalDataSource = new LocalDataSource();
  equipmentSource: LocalDataSource = new LocalDataSource();

  constructor(private foodsService: FoodsService, private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.foodsService.getFoods().subscribe(foods => {
      this.foodSource.load(foods);
    });

    this.equipmentService.getEquipments().subscribe(equipments => {
      this.equipmentSource.load(equipments);
    });
  }

}
