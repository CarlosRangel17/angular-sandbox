import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summary' // Used as the identifier in the HTML markeup 
})
// SummaryPipe implementing PipeTransform says to TypeScript compiler this class should have the exact same shape as PipeTransofmr
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number){
        if(!value) return null; 
        
        let actualLimit = (limit) ? limit : 50;
        return value.substring(0, actualLimit) + '...';
    }
}