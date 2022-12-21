// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  apiUrl: "http://localhost:4000",
  title: "test",
  supabase: {
    url: "https://ardhiqsatdehmnjgheqi.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZGhpcXNhdGRlaG1uamdoZXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2Mjc3NjgsImV4cCI6MTk4NzIwMzc2OH0.NfHC-ysu2zNuszYPDfNMtCP4J7sYG9v41ymD6Xq0zOk",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
