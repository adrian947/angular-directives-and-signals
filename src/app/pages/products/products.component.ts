import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomLabelDirective } from '../../shared/directives/customLabel.directive';
import { SetErrorDirective } from '../../shared/directives/setError.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, CustomLabelDirective, SetErrorDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private fb = inject(FormBuilder);
  public color: string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
  });

  changeColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color

  }
  handleSubmit(){
    console.log('data', this.myForm.value)
  }


}
