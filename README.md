# NgrxTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Working

An action (getPosts) is dispatched from the PostComponent. This action is being processed by reducer in /src/app/posts/store/reducers.ts. This reducer updates the store and pieces of data are processed in selectors under src/app/posts/store/selectors.ts. PostsEffects class is a side effect to the action dispatched by the user.
