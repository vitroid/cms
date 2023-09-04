import { data } from './index.js';
export const all_talks = new Set(data.map(record=>{return record.lab}))
// console.log(all_talks)
