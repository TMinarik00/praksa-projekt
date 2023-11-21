// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://192.168.43.22:1434',
  endpoints: {
    cacheLearn: {
      cacheLearn: '/CacheLearn',
      setCacheRelativeExpiration: '/CacheLearn/SetCacheRelativeExpiration',
      cacheGetOrCreate: '/CacheLearn/C',
      cacheGetOrCreateAsync: '/CacheLearn/CacheGetOrCreate',
      cacheGet: '/CacheLearn/CacheGet',
      cacheGetOrCreateAbs: '/CacheLearn/CacheGetOrCreateAbs',
      cacheGetOrCreateAbsSliding: '/CacheLearn/CacheGetOrCreateAbsSliding',
      takeDataFromCache: '/CacheLearn/TakeDataFromCache',
    },

    competititon: {
      getAllCompetitions: '/Competition/GetAllCompetitions',
      getCompetitionById: '/Competition/GetCompetitionById/',
      getCompetitionIdByNaziv: 'Competition/GetCompetitionIdByNazvi',
      insertCompetition: '/Competition/InsertCompetition',
      upsertCompetition: '/Competition/UpsertCompetition',
      insertOneOrMoreCompetitions: '/Competition/InsertOneOrMoreCompetitions',
      upsertOneOrMoreCompetitions: '/Competition/UpsertOneOrMoreCompetitions',
      insertCompetitionUsingNamesOnly:
        '/Competition/InsertCompetitionUsingNamesOnly/',
      updateCompetition: '/Competition/UpdateCompetitionById/',
      deleteCompetitionById: '/Competition/DeleteCompetitionById/',
    },
    country: {
      getCountries: '/Country',
      getCountryById: '/Country/GetCountryById/',
      getCountryIdByName: '/Country/GetCountryIdByName/',
      insertCountry: '/Country/InsertCountry',
      upsertCountry: '/Country/UpsertCountry/',
      upsertOneOrMoreCountires: '/Country/UpsertOneOrMoreCountries',
      insertOneOrMoreCountires: '/Country/InsertOneOrMoreCountries',
      updateCountry: '/Country/UpdateCountry/',
      deleteCountryById: '/Country/DeleteCountryById/',
    },
    event: {
      getAllEvents: '/Event/GetAllEvents',
      getEventById: '/Event/GetEventById/',
      getEventIdByName: '/Event/GetEventIdByName/',
      insertEvent: '/Event/InsertEvent',
      upsertEvents: '/Event/UpsertEvents',
      upsertOneOrMoreEvents: '/Event/UpsertOneOrMoreEvents',
      updateEvent: '/Event/UpdateEvent/',
      deleteCounEvent: '/Event/DeleteEventById/',
    },
    sport: {
      getAllSports: '/Sport/GetAllSport',
      getSportById: '/Sport/GetSportById/',
      getSportIdByName: '/Sport/GetSportIdByName/',
      insertSport: '/Sport/InsertSport',
      upsertSport: '/Sport/UpsertSport/',
      updateSport: '/Sport/UpdateSport/',
      upsertOneOrMoreSports: '/Sport/UpsertOneOrMoreSports',
      deleteSport: '/Sport/DeleteSportById/',
    },
    teams: {
      getAllTeams: '/Teams/GetAllTeams',
      getTeamById: '/Teams/GetTeamById/',
      getTeamByCountryId: '/Teams/GetTeamByCountryId/',
      insertTeam: '/Teams/InsertTeam',
      upsertTeam: '/Teams/UpsertTeam/',
      upsertOneOrMoreTeams: '/Teams/UpsertOneOrMoreTeams',
      insertOneOrMoreTeams: '/Teams/InsertOneOrMoreTeams',
      updateTeam: '/Teams/UpdateTeam/',
      deleteTeamById: '/Teams/DeleteTeamById/',
    },
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
