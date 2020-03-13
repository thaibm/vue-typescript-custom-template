export interface IForm {
  name: string,
  region: string,
  activityDate: Date | null,
  activityTime: Date | null,
  delivery: boolean,
  type: any[],
  resource: string,
  description: string
}
