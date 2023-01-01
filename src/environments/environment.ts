// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  apiUrl: "http://localhost:4000",
  title: "Mission Logs",
  supabase: {
    url: "https://kpwubhupojzdwzfhjfel.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd3ViaHVwb2p6ZHd6ZmhqZmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkyODY0NTgsImV4cCI6MTk4NDg2MjQ1OH0.Jgw1B8BFYfvWzTHzNuecOqEAJeWkXDORbYnEMvWIjFA",
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
