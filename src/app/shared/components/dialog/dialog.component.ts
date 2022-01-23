import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IDialogData } from '../../models/dialog.model'
import { NewsDialogTypes } from '../../models/news-dialog-types.model'
import { INewsActionResponse } from '../../models/news.model'
import { ErrorsService } from '../../services/errors.service'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogForm: FormGroup = new FormGroup({
    uuid: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
  })

  dialogTypeText: string
  isSubmitted = false

  readonly NewsDialogTypes = NewsDialogTypes

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    private formBuilder: FormBuilder,
    private news: NewsService,
    private errors: ErrorsService
  ) {}

  public ngOnInit(): void {
    this.dialogTypeText = this.getDialogTypeText(this.data.type)
    this.dialogForm = this.formBuilder.group({
      uuid: ['', [Validators.required]],
      title: ['', []],
      description: ['', []]
    })
    this.setFormValidators()
  }

  private getDialogTypeText(dialogType: string): string {
    if (dialogType === NewsDialogTypes.Create) {
      return 'Crear'
    } else if (dialogType === NewsDialogTypes.Update) {
      return 'Actualizar'
    } else if (dialogType === NewsDialogTypes.Remove) {
      return 'Borrar'
    }
    return ''
  }

  private setFormValidators(): void {
    if (this.data.type === NewsDialogTypes.Remove) {
      this.dialogForm.get('title')?.removeValidators([Validators.required])
      this.dialogForm.get('description')?.removeValidators([Validators.required])
    } else {
      this.dialogForm.get('title')?.setValidators([Validators.required])
      this.dialogForm.get('description')?.setValidators([Validators.required])
    }
  }

  public onSubmit(): void {
    if (this.dialogForm.valid) {
      if (this.data.type === NewsDialogTypes.Create) {
        this.news.create(this.dialogForm.value).subscribe({
          next: (response: INewsActionResponse) => this.handleSubmit(response),
          error: (error) => this.handleError(error)
        })
      } else if (this.data.type === NewsDialogTypes.Update) {
        this.news.update(this.dialogForm.value).subscribe({
          next: (response: INewsActionResponse) => this.handleSubmit(response),
          error: (error: Response) => this.handleError(error)
        })
      } else if (this.data.type === NewsDialogTypes.Remove) {
        this.news.remove(this.dialogForm.value).subscribe({
          next: (response: INewsActionResponse) => this.handleSubmit(response),
          error: (error) => this.handleError(error)
        })
      }
    }
  }

  private handleSubmit(response: INewsActionResponse): void {
    console.log(response)
    this.isSubmitted = true
  }

  private handleError(error: Response): void {
    this.isSubmitted = false
    this.onClose()
    this.errors.handleError(error)
  }

  public onClose(): void {
    this.dialogRef.close()
  }
}
