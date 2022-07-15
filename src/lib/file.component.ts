import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { view, size, TcView, TcSize } from '@ngx-tc/base';

@Component({
  selector: 'tc-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements TcView, TcSize {
  @Input() title: string = 'file name';
  @Input() type: string = '*';
  @Input('view') tcView: string | view = view.primary;
  @Input('size') tcSize: string | size = size.default;
  @Input() icon: string;
  @Input() image: string;
  @Input() delete: boolean;
  @Input() load: boolean;

  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class') get class() {
    return `tc-file file-${this.tcView.toLocaleLowerCase()} file-${this.tcSize.toLocaleLowerCase()}`;
  };

  deleteFile() {
    this.onDelete.emit();
  }
}
