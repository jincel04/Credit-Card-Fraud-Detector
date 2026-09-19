import type { Transaction } from '../types'
export const users: Record<string,string> = { u001:'Maya Patel', u002:'Arjun Mehta', u003:'Sara Khan', u004:'Daniel Wilson' }
const patterns = [
  ['u001',['Grocery','Restaurant','Pharmacy','Utilities'],['FreshMart','Green Bowl','Care Pharmacy','City Power'],['India'],['iPhone 15','MacBook Pro'],[18,21]],
  ['u002',['Fuel','Grocery','Restaurant','Shopping'],['Metro Fuel','Daily Basket','Spice House','Urban Threads'],['India'],['Android Pixel'],[7,13]],
  ['u003',['Online Shopping','Entertainment','Travel','Restaurant'],['StreamBox','ShopKart','SkyJet','Cafe Luna'],['India','UAE'],['iPhone 14','Chrome / Windows'],[10,20]],
  ['u004',['Utilities','Grocery','Electronics','Fuel'],['City Power','FreshMart','Tech Corner','Metro Fuel'],['USA'],['Chrome / Windows'],[9,18]],
] as const
export const demoTransactions: Transaction[] = Array.from({length:96},(_,i)=>{ const p=patterns[i%4], n=Math.floor(i/4), c=p[1][n%p[1].length], m=p[2][n%p[2].length]; const date=new Date(Date.now()-(96-i)*86400000/2); date.setHours(p[5][n%2]+(n%4),n*7%60); return { transactionId:`TXN-${String(i+1).padStart(4,'0')}`,userId:p[0],timestamp:date.toISOString(),amount:Math.round((18+(n%7)*12+(i%3)*4)*100)/100,currency:'USD',merchant:m,merchantCategory:c,country:p[3][n%p[3].length],device:p[4][n%p[4].length],paymentMethod:i%3?'Card':'Mobile wallet',status:'Approved',isFraud:false,riskScore:Math.max(4,(i*7)%24),riskLevel:'Low'} })
demoTransactions.push(
 {transactionId:'TXN-ALERT-1',userId:'u001',timestamp:new Date().toISOString(),amount:1890,currency:'USD',merchant:'Luxora Electronics',merchantCategory:'Electronics',country:'Romania',device:'Unknown Android',paymentMethod:'Card',status:'Held',isFraud:true,riskScore:94,riskLevel:'Suspicious',reasons:['Amount far above normal','New country and device','Unusual category']},
 {transactionId:'TXN-ALERT-2',userId:'u002',timestamp:new Date(Date.now()-3600000).toISOString(),amount:450,currency:'USD',merchant:'Global Flights',merchantCategory:'Travel',country:'Singapore',device:'Android Pixel',paymentMethod:'Card',status:'Review',isFraud:true,riskScore:78,riskLevel:'High',reasons:['First-time travel merchant','New country']}
)
