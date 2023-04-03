# About

@ngx-tc/file is an Angular library that provides developers with a simple way to show and manage files in their applications. The library is designed to be flexible and customizable, allowing developers to quickly and easily integrate file upload functionality into their applications.

The library includes a number of pre-built components that can be used to create file upload forms, display uploaded files, and manage file metadata. These components are fully customizable, allowing developers to modify the appearance and behavior of each component to fit their specific needs.

The @ngx-tc/file library is built using Angular and is designed to be lightweight and easy to use. Minimal setup is required to get started, and the library can be easily integrated into existing Angular projects.

## Usage

Install `@ngx-tc/file` in your project:

```
npm install @ngx-tc/file
```

Import `TcFileModule` e.g. in your `app.module.ts`:
```typescript
import { TcFileModule } from '@ngx-tc/file';

@NgModule({
  imports: [
    ...
    TcFileModule
  ],
})
export class AppModule {}
```

Use the `tc-file` component in you app:
```html
<tc-file [type]="'file-type'" [title]="'file-name'"></tc-file>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/files](http://tc-library.type-code.pro/#/components/files)
