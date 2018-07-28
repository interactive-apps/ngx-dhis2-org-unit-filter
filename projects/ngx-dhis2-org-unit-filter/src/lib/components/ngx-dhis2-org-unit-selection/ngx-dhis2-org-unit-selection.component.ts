import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { OrgUnit } from '../../models/org-unit.model';
import { OrgUnitFilterState } from '../../store';
import { getHighestLevelOrgUnitIds } from '../../store/selectors/org-unit.selectors';

@Component({
  selector: 'ngx-dhis2-org-unit-selection',
  templateUrl: './ngx-dhis2-org-unit-selection.component.html',
  styleUrls: ['./ngx-dhis2-org-unit-selection.component.css']
})
export class NgxDhis2OrgUnitSelectionComponent implements OnInit {
  @Input() selectedOrgUnits;
  highestLevelOrgUnitIds$: Observable<Array<string>>;
  constructor(private store: Store<OrgUnitFilterState>) {
    this.highestLevelOrgUnitIds$ = this.store.select(getHighestLevelOrgUnitIds);
  }

  ngOnInit() {}
}
