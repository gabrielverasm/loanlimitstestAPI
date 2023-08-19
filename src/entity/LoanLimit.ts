import { Issuer } from './Issuer';

export class LoanLimit {
    stateCode: string;
    countyName: string;
    reportingYear: number;
    cbsaNumber: string;
    fipsCode: string;
    issuers: Issuer[];
}