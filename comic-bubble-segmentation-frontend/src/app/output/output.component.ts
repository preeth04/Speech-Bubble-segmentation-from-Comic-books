import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderdialogComponent } from '../components/loaderdialog/loaderdialog.component';
import { ApiService } from '../services/api.service';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  panels = Array<PanelImage>();
  inputImage: String;
  localized_bubbles: String;
  extracted_text: any;
  showBubblesText: Boolean;
  chosenPanel: String;

  constructor(
    private router: Router,
    private _dataShare: DataShareService,
    private _api: ApiService,
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar
  ) {}

  scrollDown() {
    let el = document.getElementById('bubbles-text');
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.showBubblesText = false;
    let temp = this._dataShare.getPanels();

    if (temp === undefined) {
      this.router.navigateByUrl('/');
    } else {
      this.inputImage =
        'http://localhost:5000/fetch-images?filepath=' + temp.originalInput;
      for (let i = 0; i < temp.panels.length; i++) {
        this.panels.push({
          src: 'http://localhost:5000/fetch-images?filepath=' + temp.panels[i],
          fileName: temp.panels[i],
        });
      }
    }
  }

  clickedPanel(filename) {
    let loaderDialogRef = this._dialog.open(LoaderdialogComponent, {
      data: {
        message: 'Localizing Bubbles and Extracting Text',
      },
    });

    this.showBubblesText = true;

    this._api.api_segment({ filename: filename }).subscribe(
      (data) => {
        loaderDialogRef.close();
        this.localized_bubbles =
          'http://localhost:5000/fetch-images?filepath=' +
          data['localized_bubbles'];
        this.chosenPanel =
          'http://localhost:5000/fetch-images?filepath=' + data['chosenPanel'];
        this.extracted_text = data['extracted_string'];
        this.scrollDown();
      },
      (error) => {
        loaderDialogRef.close();
        this._snackbar.open(error, null, {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbarStyle'],
        });
      }
    );
  }
}

interface PanelImage {
  src: String;
  fileName: String;
}
