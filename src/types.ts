export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Suspicious'
export type AlertStatus = 'New' | 'Reviewing' | 'Resolved'
export interface Transaction { transactionId:string; userId:string; timestamp:string; amount:number; currency:string; merchant:string; merchantCategory:string; country:string; device:string; paymentMethod:string; status:string; product?:string; availableCredit?:number; isFraud?:boolean; riskScore?:number; riskLevel?:RiskLevel; reasons?:string[]; alertStatus?:AlertStatus }
export interface CardUser { userId:string; name:string; email:string; phone?:string; creditLimit:number; demoCard:string; expiry:string }
export interface Profile { userId:string; name:string; average:number; median:number; largest:number; commonCategory:string; commonMerchant:string; commonCountry:string; commonDevice:string; activeHours:number[]; count:number }
export interface Analysis { score:number; level:RiskLevel; factors:Record<string,number>; reasons:string[]; action:string }
