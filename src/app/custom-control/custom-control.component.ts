import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide       : NG_VALUE_ACCESSOR,
  useExisting   : forwardRef( ()=> CustomControlComponent),
  multi         : true
};

@Component({
  selector: 'rf-custom-control',
  providers : [ CUSTOM_VALUE_ACCESSOR ],
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css']
})
export class CustomControlComponent implements ControlValueAccessor{

  private level: string;
  private disabled = false;
  private onChange: Function;
  private onTouched: Function; 

  public isActive(value: string): boolean{
    return value === this.level;
  }

  public setLevel(value: string): void {
    this.level = value;
    this.onChange(this.level);
    this.onTouched
  }
  
  /**
   * @override
   */
  writeValue(obj: any): void {
    this.level = obj;
  }

  /**
   * @override
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  /**
   * @override
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * @override
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

}