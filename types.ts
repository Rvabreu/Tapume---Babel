
export interface XisSuggestion {
  name: string;
  ingredients: string[];
  description: string;
}

export enum LoadingStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
