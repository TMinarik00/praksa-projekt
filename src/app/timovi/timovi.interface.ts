export interface ITeam {
  teamid?: number;
  teamName: string;
  foundedYear: number;
  city: string;
  countryid: number;
  countryName?: string;
  sportid: number;
  sportName?: string;
}

export interface ICreateTeam {
  teamname: string;
  city: string;
  countryid: number;
  foundedyear: number;
  sportid: number;
}

export interface IGetAllTeams {
  teamId?: number;
  teamName?: string;
  foundedYear?: number;
  city?: string;
  countryId?: number;
  sportid?: number;
}

export interface ISport {
  sportsId: number;
  name: string;
}

export interface ICountry {
  countryId: number;
  countryName: string;
}
