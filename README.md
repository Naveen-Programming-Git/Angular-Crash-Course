# Followed the below steps to add remote and push the first commit

PS C:\Naveen\My-Projects\hello-world> git init
Reinitialized existing Git repository in C:/Naveen/My-Projects/hello-world/.git/
PS C:\Naveen\My-Projects\hello-world> git add README.md
PS C:\Naveen\My-Projects\hello-world> git commit -m "first commit"
On branch all-changes-new
Your branch is up to date with 'origin/all-changes-new'.

nothing to commit, working tree clean
PS C:\Naveen\My-Projects\hello-world> git branch -M main
PS C:\Naveen\My-Projects\hello-world> git remote add origin https://github.com/Naveen-Programming-Git/AngularCrashCourse.git
error: remote origin already exists.
PS C:\Naveen\My-Projects\hello-world> git remote add origin-1 https://github.com/Naveen-Programming-Git/AngularCrashCourse.git
PS C:\Naveen\My-Projects\hello-world> git branch -M main
PS C:\Naveen\My-Projects\hello-world> git push -u origin-1 main
Enumerating objects: 168, done.
Counting objects: 100% (168/168), done.
Delta compression using up to 16 threads
Compressing objects: 100% (163/163), done.
Writing objects: 100% (168/168), 155.05 KiB | 1.76 MiB/s, done.
Total 168 (delta 37), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (37/37), done.
To https://github.com/Naveen-Programming-Git/AngularCrashCourse.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin-1/main'.
PS C:\Naveen\My-Projects\hello-world> 


# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
